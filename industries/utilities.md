---
layout: page_w_header
title:  "Utilities"
subtitle: "Powering Next Generation Tools and Procedures"
background: shortBackground
overviewStatement: Ocelot has partnered with a fortune 500 client to improve customer-facing solutions, improve performance and cloud adoption, and drive advanced analytics capabilities.
overviewList:
  - Customer Data Privacy Compliance
  - Informatica Data Analytics Suite in the Cloud
  - Managed AWS Active Directory
  - Integrated AWS Direct Connect
needStatement: The client approached Ocelot with a desire to improve their processes and procedures to keep up with increasing demand and make the best use of modern tools and technologies. Ocelot had the experience and people to help the client get started on the right foot.
needImage: /assets/images/utilities-6x9.jpg
needImageAld: Utilities
---

{% capture solutionStatement %}
  <div class="padding-top-1">
    The first major initiative that Ocelot was able to help the client with was the initial set up of proofs of concept in the cloud as well as the design, creation, and sharing of best practices for ensuring security and performance. In order to make this process repeatable and automated, Ocelot helped to build and deploy a continuous integration/continuous deployment pipeline using a Cloudbees Jenkins cluster with various other tools like Artifactory, Hygieia, Github Enterprise, Sonar, and AWS XRay. These tools coupled with standardized processes and procedures allowed for the adoption of a full blue/green deployment strategy thus making deployments smooth and seamless to the users.
  </div>
  <div class="padding-top-1">
    The second goal that Ocelot was able to help with was migrating the client's data infrastructure from on premise servers to the AWS cloud. The client utilized a suite of Informatica data analytics tools to power their applications and wanted to be able to continue to utilize that after migrating to the cloud. This task proved to be significantly more complex than was initially anticipated. However, developers from Ocelot never gave up. They continued to work the problem and participated in quite a few coworking sessions with client developers as well as Informatica support personnel. This persistence paid off and the full suite of Self-Aware Informatica data analytics tools used by the client on premise were successfully migrated and utilized in AWS.
  </div>
  <div class="padding-top-1">
    Now that Ocelot had helped the client successfully establish standards and best practices for working in the cloud as well as aided in migrating their data and analytics infrastructure, the client was ready to start utilizing it all to improve their existing applications. With the help of Ocelot, the client was able to successfully migrate their primary public website to AWS. Additionally, Ocelot built and deployed an energy efficiency portal to production to AWS using S3, Cloudfront and API Gateway which the client is able to use to better track and manage data about their provided services.
  </div>
{% endcapture %}

{% capture resultsStatement %}
  <div class="padding-top-1">
    With the aid of Ocelot, the client has made impressive progress meeting their goals of modernizing their applications and infrastructure as well as putting standards of best practice in place. Some of the biggest accomplishments so far include:
  </div>
  <div class="padding-top-1">
    <ul class="menu-list">
      <li>Deployed primary production website for the client to AWS</li>
      <li>Implemented development automation using blue/green deployments and continuous integration/continuous deployment tools</li>
      <li>Extended client Active Directory to managed AWS Active Directory with one way trust</li>
      <li>Replaced existing AWS VPN connections to a single shared Direct Connect</li>
      <li>Added organizational structure and service control policies across all AWS accounts</li>
    </ul>
  </div>
{% endcapture %}

{% include case_study.html overviewStatement=page.overviewStatement overviewList=page.overviewList needStatement=page.needStatement needImage=page.needImage needImageAlt=page.needImageAlt solutionStatement=solutionStatement resultsStatement=resultsStatement %}
