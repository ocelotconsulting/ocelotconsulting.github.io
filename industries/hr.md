---
layout: page_w_header
title:  "Human Resources"
subtitle: "The Right People for the Job"
background: shortBackground
overviewStatement: Ocelot worked with a local firm to help them modernize and migrate their services which are used to bring employers and job seekers together to find the best fit for an open position.
overviewList:
  - Migration to AWS Cloud
  - Web portal with Angular
  - Single Sign-On integration with 3rd parties
needStatement: The client had an exiting job placement/search service running which and they wanted to upgrade to use more modern technologies, migrate it off of costly private servers, and add additional features to improve the experience for both job seekers and posters. With our extensive experience developing modern applications and helping with cloud migrations, Ocelot was the perfect fit for the task.
needImage: /assets/images/HR.jpg
needImageAlt: Human Resources
---

{% capture solutionStatement %}
  <div class="padding-top-1">
    There were quite a few important tasks that had to happen in order to help the client continue to grow and enhance the capabilities of their solution. Some of the most important tasks include:
  </div>
  <div class="padding-top-1">
    <ul class="menu-list">
      <li>Developing networking and other infrastructure in AWS</li>
      <li>Data migration</li>
      <li>Web portal modernization with Angular</li>
      <li>Single Sign-On integration for 3rd party job posters</li>
    </ul>
  </div>
  <div class="padding-top-1">
    Ocelot cloud experts were able to take the existing product and migrate it off of private servers and into the AWS Cloud. This task included modernizing the networking, security, and data layers to better meet expectations and industry best practices. This change alone improved the performance of the clients tool by better automating deployments, troubleshooting, and correcting issues.
  </div>
  <div class="padding-top-1">
    In addition, Ocelot was able to help the client modernize their web portal. By using modern web development tools, like Angular, the clients web portal was enhanced and the user experience was improved to meet the clients desires. One of the most important new features Ocelot was able to help develop was the ability to integrate third party job posters existing systems to the clients with single sign-on. This feature provides more flexibility for job posters to adopt the system without having to manage their users in a brand new way.
  </div>
{% endcapture %}

{% capture resultsStatement %}
  <div class="padding-top-1">
    By helping the client migrate their services to AWS Cloud, modernizing their web portal, and implementing critical new features like single sign-on Ocelot was able to help the client secure new customers. The tool now helps even more talented job seekers find the right opportunity for them.
  </div>
{% endcapture %}

{% include case_study.html overviewStatement=page.overviewStatement overviewList=page.overviewList needStatement=page.needStatement needImage=page.needImage needImageAlt=page.needImageAlt solutionStatement=solutionStatement resultsStatement=resultsStatement %}
