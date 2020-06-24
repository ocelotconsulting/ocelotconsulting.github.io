---
layout: page_w_header
title:  "Healthcare"
subtitle: "Bringing Data Analytics to the Cloud"
background: shortBackground
overviewStatement: Ocelot was selected by a Fortune 50 client to help them with a cloud proof of concept and in the process implement a modern web analytics portal for a $5 billion-dollar book of business.
overviewList:
  - AWS data platform using Redshift
  - Web portal using React
  - Data processes built with Go and ECS Fargate
  - Full HIPAA compliance
needStatement: "The client came to Ocelot with a problem: the cost of operating an on-premise data warehouse is quite high and as they gain more business that cost will just increase. They knew the cloud could be a good solution for them, but they did not know how it would work for them or where to get started. This is where Ocelot was able to help."
needImage: /assets/images/healthcare_3-6x9.jpg
needImageAlt: Healthcare
---

{% capture solutionStatement %}
  <div class="padding-top-1">
    In order to meet the clients' needs, Ocelot assembled a team consisting of specialists in the different
    components needed in this project. This included the following:
  </div>
  <div class="padding-top-1">
    <ul class="menu-list">
      <li>AWS networking and infrastructure</li>
      <li>Data extraction, transformation, and loading processes</li>
      <li>User interface and microservice creation</li>
    </ul>
  </div>
  <div class="padding-top-1">
    The team got to work building the necessary components for a successful cloud proof of concept. All the infrastructure was managed as code using AWS CloudFormation and a continuous integration/continuous deployment pipeline was established using GitLab and Jenkins on AWS. As the team worked, the client was able to see just how effectively the cloud could be utilized to develop solutions to meet their needs and they began to get excited by the possibilities.
  </div>
  <div class="padding-top-1">
    The process was not without its roadblocks, however. One of the biggest challenges was integrating the 3rd party business intelligence solution the client used. There was an AWS Marketplace option availablefor the tool, but it did not meet the strict security and production readiness standards required for such sensitive information. Instead, the team implemented their own solution to manage and host the 3rd party services needed to analyze and visualize the data for the client. This showed the client that even without the availability of premade solutions, the cloud provided them the flexibility to adapt and still meet their requirements.
  </div>
  <div class="padding-top-1">
    Over the course of a year, Ocelot was able to help the client exceed their expectations around what operating in the cloud could do for them and provided them with a template to help ease other teams and business units in their own adoptions.
  </div>
{% endcapture %}

{% capture resultsStatement %}
  <div class="padding-top-1">
    Due to the massive success of this initial proof of concept, the client has gained confidence in cloud computing and has proceeded to move forward into a full, department and companywide, cloud transformation. Some of the highlights that have occurred since this initial success include:
  </div>
  <div class="padding-top-1">
    <ul class="menu-list">
      <li>Proof of concept product running live for hundreds of users across multiple business units</li>
      <li>Creation of a dedicated Cloud Services team with the help of Ocelot</li>
      <li>Building a companywide AWS standard using Landing Zone</li>
      <li>Adoption of the cloud across the entire department as well as others spinning up</li>
      <li>Creation of a cloud data lake to begin migrating their entire data warehouse</li>
    </ul>
  </div>
{% endcapture %}

{% include case_study.html overviewStatement=page.overviewStatement overviewList=page.overviewList needStatement=page.needStatement needImage=page.needImage needImageAlt=page.needImageAlt solutionStatement=solutionStatement resultsStatement=resultsStatement %}
