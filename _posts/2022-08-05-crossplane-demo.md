---
layout:      posts
background:  shortBackground
title:       "Crossplane, a Kubernetes-powered IaC Tool"
subtitle:    ""
date:        2022-08-05 09:00:00
author:      "Marty Henderson"
description: ""
headerImg:  "/assets/images/posts/2022-08-05-crossplane/popsicle-header.jpg"
cross-post-link: "https://nalth.is/crossplane"
cross-post-text: "Nalthis"
---

##

Header Image - Photo by <a href="https://unsplash.com/es/@taylorheeryphoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Taylor Heery</a> on <a href="https://unsplash.com/s/photos/popsicle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
_This post originally appeared on Marty Henderson's [personal blog](https://nalth.is/crossplane)._

[Crossplane](crossplane.io) is a newer member of the Infrastructure-as-Code team, with many components still yet to be built or in an alpha or beta state. Although it is new, it introduces some novel ideas of how to manage infrastructure that you deploy, especially if you are familiar with Kubernetes

### Where's the demo?

Here's my [example code](https://gitlab.com/mjh/crossplane-demo/), but don't get too excited before the explanation.

### Back up, what is Infrastructure as Code?

Imagine if you have a smart thermostat in your house and you set it to a pleasant 68 degrees. The thermostat then regularly takes the temperature of the house and heats or cools it as appropriate. This concept is called state and it means that you want it at 68 degrees as a state and you want the thermostat to keep it at that state.

You might also want the thermostat to do different things depending on time of day. Maybe you go to your weekend board game day at your friend's every Saturday, and it's okay for it to get up to 74 degrees on Saturday during the day in the summer or down to 62 degrees in the winter. This is a new state that gets passed to it on Saturdays and then it gets sent the regular, 68 degree state otherwise. During this time you expect the degree you set it to is what the thermostat is going to hit.

What if you run something even bigger though? Imagine you run a museum where parts that the tourists are going through can be 72 degrees, but you have several sections with glass that need to be kept colder for preservation, perhaps at 55 degrees, and several more sections that your employees take breaks in or do office work at, and you keep that at 68 degrees. This can mean you have a hundred thermostats that have a state assigned to them. If an exhibit changes and no longer needs to be 55 degrees, you probably want it at the 72 degrees of everything else. If you add a new exhibit, you need to add a new thermostat at whatever the appropriate temperature is. But here you are, 100 thermostats all set nicely.

Then you lose power. 

Panicked you probably start taking care of secure pieces, escorting visitors out, and generally managing the function of the museum. You safely secure the place and several hours later, the power comes back. However, while power was out, it wiped the memory of those thermostats - and now they're all holding at 74 degrees. So, you need to hurry up and get them, especially the preservation temperatures, all back. What can you do? That's right, your poor volunteers staff and interns are running around to 100 different thermostats and setting them to the notes you made next to them - and hopefully those sticky notes are still accurate!

Imagine if, instead of several people running around, setting thermostats, hoping they're correct, double checking them, and making alterations, you could just push a button and they'd go back to what you initially set them. That's what infrastructure-as-code is about - keeping your configuration, temperatures in this case, stored in code so that you can deploy or redeploy them as necessary. You also don't need to worry about keeping sticky notes or manual intervention - you just update the code and deploy it.

There are many tools to work with infrastructure-as-code and they work each in their own way. Common ones you'll see are:

  * [Terraform](terraform.io)
  * [AWS CloudFormation](https://aws.amazon.com/cloudformation/) - specifically for AWS resources
  * [Azure Resource Manager](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/overview) - specifically for Azure resources
  * [Pulumi](https://www.pulumi.com/)

  But I want to talk about a specific one of these - [Crossplane](crossplane.io).

  ### What is Crossplane?

Crossplane is an infrastructure-as-code tool that manages your infrastructure as Kubernetes objects and keeps state within Kubernetes, leveraging controllers and extensions for various cloud providers and their object types.

What does this mean?

If you're use to something such as Terraform, you have `.tf` files that explain what the code should do. You can import modules, use existing providers, and everything. In my demo, I actually have the [terraform](https://gitlab.com/mjh/crossplane-demo/-/tree/main/terraform) I used to build the Kubernetes cluster I did my examples with. In it, you can see I have two files - `main.tf` and `k8s.tf`
  * `main.tf` defines my provider (DigitalOcean), grabs the API token from my local machine, and defines which version of Terraform to use.  
  * `k8s.tf` defines what should actually be built - in this case, a scalable Kubernetes cluster using a smaller Droplet for my workers.

I deploy those two files and there you have a Kubernetes cluster (Terraform state is for another discussion, but I do have a solution there). If you want to run that code, and have an API key handy, you could run it from that directory and get a Kubernetes cluster (something like terraform apply -var "do_token=${DO_TOKEN}").
So, what makes Crossplane different?

Crossplane sees the providers and their configurations as extensions of Kubernetes. After [installing Crossplane into your cluster](https://crossplane.io/docs/v1.9/getting-started/install-configure.html#install-crossplane) with helm, you have a whole set of new Kubernetes Objects you can work with. The biggest being Provider and ProviderConfig. By using both of these, you can get the ability to create your infrastructure as Kubernetes objects, using yaml to write them and Kubernetes to check and maintain state.

### Okay, let's do this!

My [demo repo](https://gitlab.com/mjh/crossplane-demo/-/tree/main/crossplane_install) has three different providers, DigitalOcean, AWS, and Azure. Each of these will reach out to a different repository and grab new Objects that can be managed. As of 28 Jul, they are the latest versions, but I can't promise to maintain that - you can check the versions at the github repos for the Crossplane Contribs for [Azure](https://github.com/crossplane-contrib/provider-azure), [AWS](https://github.com/crossplane-contrib/provider-aws), and [DigitalOcean](https://github.com/crossplane-contrib/provider-digitalocean/) or any of the other providers Crossplane has in [one nice spot](https://crossplane.io/docs/v1.9/concepts/providers.html).

For instance, applying the [azure-install.yaml](https://gitlab.com/mjh/crossplane-demo/-/blob/main/crossplane_install/azure_install.yaml) will allow access to all the Azure objects as the provider `provider-azure`. You can even see all your providers at a quick glance with normal `kubectl` commands.

!["kubectl get providers to show the providers in my k8s cluster"](/assets/images/posts/2022-08-05-crossplane/kubectl-get-providers.png)

Which brings me to the `ProviderConfig` object. This is how you reference your user that has permissions to deploy. This user will need pretty broad permissions in order to deploy anything and should be a closely held secret. However, once the configuration is in Kubernetes, there's no need to keep pulling it down or risk having more people have it. This is one of the things I like about how Crossplane does Providers and ProviderConfigs.

Each `ProviderConfig` has a slightly different way of presenting credentials and this is something that Crossplane has room for improvement on. For instance, to get the AWS Credentials, assuming you have credentials locally and in the default profile, you run a little script:

```bash
BASE64ENCODED_AWS_ACCOUNT_CREDS=$(echo -e "[default]\naws_access_key_id = $(aws configure get aws_access_key_id --profile $aws_profile)\naws_secret_access_key = $(aws configure get aws_secret_access_key --profile $aws_profile)" | base64  | tr -d "\n")
```

And this will get you the encoded credentials you'd put in the `ProviderConfiguration` for AWS [here](https://gitlab.com/mjh/crossplane-demo/-/blob/main/crossplane_configure/aws_configure.yaml#L9), where it says replacewithbase64encoded.

```yaml
---
apiVersion: v1
kind: Secret
metadata:
  name: aws-account-creds
  namespace: crossplane-system
type: Opaque
data:
  credentials: replacewithbase64encoded
---
apiVersion: aws.crossplane.io/v1beta1
kind: ProviderConfig
metadata:
  name: provider-aws
spec:
  credentials:
    source: Secret
    secretRef:
      namespace: crossplane-system
      name: aws-account-creds
      key: credentials
```

Alrighty! Now that we have a provider configured with AWS Secrets...what do we do?
We write some YAML! I promise, I will break this down, but let's make a hosted S3 bucket website.

The yaml is in my [demo repo](https://gitlab.com/mjh/crossplane-demo/-/blob/main/crossplane/site_s3.yaml) but let's break down the big pieces.

```yaml
---
apiVersion: s3.aws.crossplane.io/v1beta1
kind: Bucket
metadata:
  name: s3-crossplane-bucket
  annotations:
    # This will be the actual bucket name. It must be globally unique, so you
    # probably want to change it before trying to apply this example.
    crossplane.io/external-name: crossplane-nalth-is
```

So you can see in this part we are creating a Kubernetes Object with a kind of `Bucket` off the `s3.aws.crossplane.io/v1beta1extension` we've installed. In it, we give the bucket an internal facting name in `metadata` and an external name in the `crossplane.io/external-name part` of the annotations. This is the core of what the object will be.

```yaml
spec:
  forProvider:
    acl: private
    locationConstraint: us-east-1
    websiteConfiguration:
      indexDocument:
        suffix: index.html
    publicAccessBlockConfiguration:
      blockPublicPolicy: false
    accelerateConfiguration:
      status: Suspended
    versioningConfiguration:
      status: Suspended
    tagging:
      tagSet:
        - key: project
          value: blog
    objectLockEnabledForBucket: false
    serverSideEncryptionConfiguration:
      rules:
        - applyServerSideEncryptionByDefault:
            sseAlgorithm: AES256
    corsConfiguration:
      corsRules:
        - allowedMethods:
            - "GET"
          allowedOrigins:
            - "*"
          allowedHeaders:
            - "*"
          exposeHeaders:
            - "x-amz-server-side-encryption"
    lifecycleConfiguration:
      rules:
        - status: Disabled
```
This in here are the things you want your bucket to have and do, normal things like tagging, versioning, and where your default page is for your site (in a static website hosted S3 bucket). S3 has a lot of options that I won't cover in this blog, but suffice it to say that these are just checkmarks in the console of AWS or properties in Terraform.

```yaml
  providerConfigRef:
    name: provider-aws
```

The last section references which `ProviderConfig` to use. Of particular note, this means you could have a single `Provider` (such as AWS) and several `ProviderConfig` objects that each hit different accounts or have different permissions - this allows you to still have one place with all the credentials at that the author of the yaml doesn't need to see or know, they just need to know the name of the `ProviderConfig`.

Okay, so you take this yaml, tweak it to your settings and then throw it at the cluster

```bash
kubectl apply -f s3_site.yaml
```

And then what? This is where Crossplane does its magic - it reaches out to `Provider` with the `ProviderConfig` and creates the object and grabs the information about it. 

Neat, huh?

Well, let's try something bigger - an Azure Kuberenetes cluster.

_Note: At the time of writing this, non-corporate accounts have a hard time getting resources in the US regions, thus why I chose Norway for the example._

Looking through my [example](https://gitlab.com/mjh/crossplane-demo/-/blob/main/crossplane/norway_aks.yaml), we can see that creating an AKS isn't just one object, but four of them and they're all in the same yaml file:

  * ResourceGroup
  * VirtualNetwork
  * Subnet
  * AKSCluster

And more importantly, we can see that they reference one another, such as `resourceGroupNameRef` referencing the first object created. This isn't tied to just one yaml file; in fact, this could be 4 yaml files and they could reference each other's object. This was something I was concerned about in coming from Terraform; I do a lot of references and glad to see they're still here.

So, once this `norway_aks.yaml` is ran, what happens? Quite frankly, we wait at first, Kubernetes wasn't built in a day. But after about 5 minutes, we can take a quick look for sure!

!["Using kubectl to describe the AKS Cluster"](/assets/images/posts/2022-08-05-crossplane/describe-akscluster.png)

Alright, there's a lot of notes in here, but let's skip down to the relevant part of this object.

!["AKS Status Successful"](/assets/images/posts/2022-08-05-crossplane/aks-status-state.png)

So, we're cooking with gas now! You can even verify in the Azure console if you really want.

!["Status in Azure Console of AKS"](/assets/images/posts/2022-08-05-crossplane/aks-in-azure-console.png)

So, now that it's in state, what if I don't want it anymore?

Delete the yaml file!

As you can guess by the fact I have the DigitalOcean provider and configuration, I had some DigitalOcean resources. However, that Provider is still maturing and would created a brand new Droplet every time the status of configuration was checked - 8 droplets later, I hastily deleted the yaml file and applied it and the Droplets stopped being created. The DO Provider is still not good at deleting resources, but the AWS one is!

If we want to hand-delete an object, we can, just like normal.

```bash
kubectl delete bucket s3-crossplane-bucket
```

!["Deleting a Bucket objects via kubectl"](/assets/images/posts/2022-08-05-crossplane/kubectl-deleting-buckets.png)

!["Status of Bucket in AWS - no such bucket"](/assets/images/posts/2022-08-05-crossplane/aws-console-s3bucket.png)

And we can just reapply the yaml to return it

![](/assets/images/posts/2022-08-05-crossplane/apply-s3-yaml.png)

![](/assets/images/posts/2022-08-05-crossplane/new-bucket-exists.png)

_Note: as of writing this, the `synced` error will be fixed in v0.30.0_

So, there you have it, you can use Crossplane to control your objects in quite a few Providers through managed yaml and treat them just like Kubernetes objects.

Hey, did you know I automated all of this on a Merge Request? Next time I'll show you how I made this full-on gitops.
