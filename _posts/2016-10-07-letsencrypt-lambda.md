---
layout:      posts
background:  shortBackground
title:       "Lets Encrypt Lambda"
subtitle:    "Free SSL Certificate Automation via AWS Lambda"
date:        2016-10-07 08:30:00
author:      "Larry Anderson"
description: "Obtain and maintain SSL certificates worry-free by harnessing the power of AWS lambda"
headerImg:  "/assets/images/blog/fence.jpg"
---

### Free Certificates!

> Let’s Encrypt is a free, automated, and open certificate authority brought to you by the non-profit Internet Security Research Group (ISRG). - [Let's Encrypt](https://letsencrypt.org/)

That is awesome -- I think most people can get behind free, especially since typical SSL certificate costs can range from $150-700 a year, and for a company managing a large number of domains the cost of procuring and managment of those certificates can be significant.

SSL/TLS certificates are necessary in order to encrypt content over a web connection (think bank websites, online merchants, etc.). A big problem at enterprise clients is managing certificates, with procurement, expiration, and configuration management all driving costs. Users investigating Let's Encrypt are often trying to answer how to automate their SSL infrastructure (generating/renewing/configuring) by using it as a certificate authority (CA), and how to take advantage of its flexibility.

### Let's Encrypt's ACME protocol at a glance...

Unfortunately, most client implementations of the Let's Encrypt (LE) [ACME protocol](https://github.com/ietf-wg-acme/acme/) leave something wanting. Either they're designed as more of a CLI option, which is great for an individual server/EC2 instance, or they require a server to respond to domain challenges at a specific endpoint.

Partly as a response to this, I've created [node-letsencrypt-lambda](https://github.com/ocelotconsulting/node-letsencrypt-lambda), which leverages the serverless capabilities of [AWS Lambda](https://aws.amazon.com/lambda/) to make managing certificates for domains even simpler to automate, for those users who want to leverage infrastructure in AWS. Once you are able to create and renew your own SSL certificates using this tool, you can use them to secure your personal website, or automate your SSL infrastructure on several hosts/various services depending on your personal/organization's domain and host setup.  

Let's Encrypt can be simple to use, as long as you understand what the ACME protocol needs:

* First, a domain admin registers his or her public key with LE (in an automated fashion).
* Second, the admin proves to the LE CA that they control one or more domains.
* Lastly, the automation procures certificates according to the domains it can prove control over.

{: .blog-center}
![Let's Encrypt ChallengePseudocode Process](/assets/images/blog/2016-10-07-letsencrypt-lambda/howitworks_authorization.png){:width="75%"}

{: .blog-center}
Fig. 1 - The Let's Encrypt Challenge Process

### Proving Domain Control

> With Let’s Encrypt, you do this using software that uses the ACME protocol, which typically runs on your web host. --[ Lets Encrypt](https://letsencrypt.org/getting-started/)

Runs on our web host? But that means that I would have to have an endpoint dedicated to serving whatever challenge responses LE would like. Of course, I could stand it up just-in-time if I wanted to, but nonetheless that would limit when and where I could execute the challenges from.

Luckily for us, the fine people at Let's Encrypt have implemented a challenge for DNS validation in early 2016, which is the challenge type that I have targeted for this project.

After admin registration, the lambda writes a challenge response to a DNS TXT record. It then polls DNS until it returns the new value (if a previous TXT record had been written). Once the lambda verifies the DNS TXT record is being returned from DNS, it instructs the LE system to verify the record, and if LE is satisfied, LE makes a certificate available for download.

### How our lambda function works

On an initial run of the lambda, the following high-level events take place:

1. Check to see if certificate is close to expiring (within 30 days of the expiration date). If it's fine, exit... if not, #2.

    {: .blog-center}
    ![Certificate Expiration Notice](/assets/images/blog/2016-10-07-letsencrypt-lambda/expired-cert.jpg)

    {: .blog-center}
    Fig. 2 - Expired Certificate... *don't let this happen to you!*

2. Register a configured admin (generate a keypair and send the public key in with the email to register). Write the admin data (keypair and registration info) to a file in S3.

3. Prove ownership of a domain by:

    1. Requesting challenges from LE, using the configured admin's keypair to sign the request.

    2. Take a token from LE's DNS challenge and insert a TXT record for the domain in Route53 corresponding to a digest of the token using the private key of the admin.

        {: .blog-center}
        ![Certificate Expiration Notice](/assets/images/blog/2016-10-07-letsencrypt-lambda/TXT_Record.png)

        {: .blog-center}
        Fig. 3 - DNS TXT Record

    3. Poll DNS for the TXT record containing the latest digest value.

    4. Once verified, send confirmation to LE, which will then validate the digest using the admin's public key.

4. Create a CSR for the domain (generate a keypair for the domain for the request).

5. Send the domain CSR and prior authorizations (challenge validations) to LE, which will then provide the location to the certificate and certificate chain of the domain.

6. Write the domain certificates (PEM format of certificate and issuer chain) and the domain keypair to a file in S3.

7. If configured, an S3 PUT event will trigger on upload of the domain certificate to the bucket, which will allow follow-on lambdas to run and automatically configure services based upon the received notification. In addition, the S3 bucket could fire to an SNS topic, etc.

### Wrapping Up...

Procurement of certificates in some organizations can be a lengthy ordeal, and can incur substantial real costs both in terms of dollars and time spent managing. The goal of this project and Let's Encrypt was to lessen the burden of encrypting traffic.

This is likely the first project in a series that will further the certificate management automation of an SSL infrastructure. Still necessary are tools that take the newly created certificates and help configure their usage. Please check out the project's [roadmap](https://github.com/ocelotconsulting/node-letsencrypt-lambda/blob/master/ROADMAP.md) for status of those efforts and others to come!
