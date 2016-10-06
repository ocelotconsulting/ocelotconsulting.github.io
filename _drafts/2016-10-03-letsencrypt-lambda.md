---
layout:     post
title:      "Lets-Encrypt Lambda"
subtitle:   "Free SSL certificate automation via AWS Lambda"
date:       2016-10-03 00:00:00
author:     "Larry Anderson"
description: "Obtain SSL certificates worry-free by harnessing the power of AWS lambda"
header-img: "img/blog/fence.jpg"
---

### Free Certificates!
>Let’s Encrypt is a free, automated, and open certificate authority brought to you by the non-profit Internet Security Research Group (ISRG). - [Lets-Encrypt](https://letsencrypt.org/)

That is awesome, I think most people can get behind free. Thanks Lets-Encrypt (LE) ! A big question when venturing out of the hobby world of personal websites, is how can I automate using this CA, and how flexible can it be?

Unfortunately, most client implementations of the LE/ACME protocol leave something wanting. Either they're designed as more of a CLI option, which is great for an individual server/EC2 instance or they require a server to respond to domain challenges at a specific endpoint.

Partly as a response to finding this to be the case, I've created [node-letsencrypt-lambda](https://github.com/ocelotconsulting/node-letsencrypt-lambda), which aims to make managing certificates for domains even more automated for users who want to leverage infrastructure in AWS. Once you are able to create your own SSL certificates using this tool, you can use them to secure your personal website, or automate your SSL infrastructure on several hosts/various services depending on your organization's domain/host setup.

### At a glance...

Lets-Encrypt can be simple to use, as long as you understand what the ACME protocol needs:

* First, a domain admin register's his/her public key with LE (in an automated fashion).

* Second, the admin proves to the LE CA that they control one or more domains.

* Lastly, the automation procures certificates according to the domains it can prove control over.


### Proving domain control
>With Let’s Encrypt, you do this using software that uses the ACME protocol, which typically runs on your web host. --[ Lets Encrypt](https://letsencrypt.org/getting-started/)

Runs on our web host? But that means I have to have an endpoint dedicated to serving whatever challenge responses LE would like. Of course I could stand it up just-in-time if I wanted to, but nonetheless it limits when and where I could execute the challenges from.

Luckily for us, the fine people at Lets-Encrypt have implemented a challenge for DNS validation back in early 2016, which is the challenge type I targeted for this project.

After admin registration, the lambda writes a challenge response to a TXT record in DNS, then polls DNS until it returns the new value (if a previous TXT record had been written). Once the lambda verifies the DNS TXT record should be there, it instructs the LE system to verify that it owns the domain via DNS, and if LE is satisfied, it makes a certificate available for download.

### Pseudocode
On an initial run of the lambda, the following high-level events take place:

1. Check to see if certificate is close to expiring (within 30 days of the expiration date). If it's fine, exit... if not, #2.

2. Register a configured admin (generate a keypair and send the public key in with the email to register). Write the admin data (keypair and registration info) to a file in S3.

3. Prove ownership of a domain by:

    1. Requesting challenges from LE, using the configured admin's keypair to sign the request.

    2. Take a token from LE's DNS challenge and insert a TXT record for the domain in Route53 corresponding to a digest of the token using the private key of the admin.

    3. Poll DNS for the TXT record containing the latest digest value.

    4. Once verified, send confirmation to LE, which will then validate the digest using the admin's public key.

4. Create a CSR for the domain (generate a keypair for the domain for the request).

5. Send the domain CSR and prior authorizations (challenge validations) to LE, which will then provide the location to the certificate and certificate chain of the domain.

6. Write the domain certificates (PEM format of certificate and issuer chain) and the domain keypair to a file in S3.

7. If configured, an S3 SNS event will occur on the PUT of the domain certificate to the bucket, which will allow follow-on lambdas to run and automatically configure services based upon the received notification.

### Still to come...

* As defined in the project [roadmap](https://github.com/ocelotconsulting/node-letsencrypt-lambda/blob/master/ROADMAP.md), additional services need to be created to automate things further.

  * Create a lambda to listen to the S3 events of certificates and configure them in IAM.

  * Create a lambda to listen to the S3 events of certificates and configure them in ELB's.

* Possibly create other cron-type automation to load certificates from the S3 bucket.

* Create run mode for creating local PEM files of cert/chain.

* Support DNS services outside of Route53.
