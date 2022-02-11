---
layout: page_w_header
title:  "Careers with Ocelot"
subtitle: "Ocelot has opportunities for developers of all skill levels utilizing many different skills and technologies"
background: mediumBackground
benefits:
  - title: Insurance
    icon: fa-notes-medical
    description: "The health of you and your family is important and we want to help you assure that. We offer a number of plans with health, dental, optical, and life insurance for you and your family."
  - title: PTO
    icon: fa-umbrella-beach
    description: "We all deserve a break now and again. At Ocelot we strive for a healthy work life balance and believe that offering paid vacation time is an important piece of that."
  - title: Retirement
    icon: fa-piggy-bank
    description: "Saving for the future is important and at Ocelot we want to help you secure it by offering retirement accounts and company matching."
  - title: Fair Compensation
    icon: fa-hand-holding-usd
    description: "Your time is valuable and if you choose to spend extra with us we want to show our appreciation for that."
  - title: Parental Leave
    icon: fa-baby-carriage
    description: "Adding a new family member is an important part of your life and we want you to enjoy that. All Ocelots are given parental leave for both birth and adoption."
culture:
  - title: Technology First
    icon: fa-laptop-code
    description: "Ocelot was built by and for technologists and we keep that in mind with everything we do."
  - title: Never an Island
    icon: fa-users
    description: "No Ocelot works alone. We believe we are stronger together so you will always work with a team of Ocelots as well as client teams."
  - title: Work your Passion
    icon: fa-smile-beam
    description: "We want you to enjoy coming to work each day and we give you the opportunity to find what you really want to work on and pursue it."
  - title: Strong Relationships
    icon: fa-handshake
    description: "We pride ourselves on building strong, lasting relationships with our clients as we provide them the highest quality software possible"
attribution: Icons made by <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
---

{% include icon-list.html title="Culture" id="culture" section="is-medium" icons=page.culture %}
<br/>
{% include icon-list.html title="Benefits" id="benefits" section="is-medium" icons=page.benefits %}

<section class="hero is-medium">
  <div class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title">Open Positions</h1>
      <div class="columns">
        <div class="column is-one-quarter">
          {% include card.html title="Full Stack Engineer" description="For developers who are comfortable building an app from UI to API, and database to cloud provisioning." cardImage="/assets/images/software.png" route="/careers/full-stack-developer" %}
        </div>
        <div class="column is-one-quarter">
          {% include card.html title="Data Engineer" description="For developers who are comfortable processing terabytes of data. You know your Kafka from your Spark." cardImage="/assets/images/dashboard.png" route="/careers/data-engineer" %}
        </div>
        <div class="column is-one-quarter">
          {% include card.html title="Cloud Engineer" description="For developers who are comfortable enabling and expanding cloud adoption and proficiency via automation and best practices." cardImage="/assets/images/computer.png" route="/careers/cloud-engineer" %}
        </div>
        <div class="column is-one-quarter">
          {% include card.html title="Entry-Level Technology Consultant" description="For entry-level developers looking to launch their careers in software, data, and cloud engineering. An outstanding opportunity to learn from industry experts." cardImage="/assets/images/computer.png" route="/careers/entry-level-technology-consultant" %}
        </div>
      </div>
    </div>
  </div>
</section>
