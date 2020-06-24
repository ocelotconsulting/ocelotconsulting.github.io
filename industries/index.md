---
layout: page_w_header
title:  "Industries"
subtitle: "Ocelot carries a legacy of highly successful partnerships in multiple industries"
background: mediumBackground
industries:
  - title: Healthcare
    linkId: healthcare-section
    link: /industries/healthcare.html
    image: /assets/images/health_care_6x9.jpg
    problem: The healthcare field is constantly evolving and growing. In order to keep up, companies need to collect, manage, analyze, and display massive amounts of data while still maintaining privacy.
    solution: As the amount and variety of data consumed continues to grow, new and innovative solutions are needed to keep up. From ingesting and processing the data to analyzing and visualization, performance and accuracy are key.<br/><br/>Ocelot has experience helping clients in the healthcare industry adapt and grow to meet their ever-changing data needs without compromising privacy standards.
  - title: Utilities
    linkId: utilities-section
    link: /industries/utilities.html
    image: /assets/images/utilities2-6x9.jpg
    problem: When it comes to services in the Utilities industry performance and reliability are of critical to a companies' success.
    solution: As more people need access to services more strain is put on utility companies' infrastructure and they need to be able to adapt and scale to be able to support the extra load. IT is a critical piece of that infrastructure that can help companies' better monitor their services, react to issues, and maintain contact with their customers.<br/><br/>Ocelot has shown that we have the right skills to help clients keep up with the ever increasing demands they face.
  - title: Financial Services
    linkId: financial-section
    link: /industries/financial_services.html
    image: /assets/images/financials2-6x9.jpg
    problem: Companies in the financial services industry have to work with ever evolving regulations as well as an ever-changing market which is affected by numerous different variables.
    solution: With the ever-changing landscape of this industry companies must be able to keep track of all the moving pieces and respond quickly and accurately as new information is made available. This requires a strong focus on quick data analysis based on variable information while maintaining accuracy and security.<br/><br/>Ocelot has a proven track record of helping clients in this industry improve their processes and the build the right tools to solve these complex problems
  - title: Telecommunications
    linkId: telecom-section
    link: /industries/telecom.html
    image: /assets/images/telecom-6x9.jpg
    problem: The telecom industry has a lot of competition with each company vying to provide their services to the most people possible. Strong customer service is a crucial tool used to gain and retain customers.
    solution: With the ready availability of other providers, a telecom company has to have good customer service in order to compete. A large part of successful customer service is the ability to quickly and accurately help customers sign up for, alter, or troubleshoot their services. IT tools are paramount in this endeavor. With the right tools service agents are better able to provide customers with the help they need.<br/><br/>Ocelot has the expertise to build intuitive and responsive tools that make managing customers and their services quick and easy.
  - title: Human Resources
    linkId: hr-section
    link: /industries/hr.html
    image: /assets/images/HR.jpg
    problem: At any given time, there are ample employers looking to hire as well as people looking for work. Finding the right candidate or opportunity can be a daunting task.
    solution: IT can play a huge role in simplifying the search for the right candidates and positions. By utilizing these tools, companies can broadcast their openings to a broad audience, automatically receive and review applications, as well as ensure candidates meet minimum requirements before moving forward. Applicants using job search and hiring tools have the advantage of finding the right opportunity for them from a wide array of offerings and easily applying to them in one place.<br/><br/>Ocelot has helped clients build tools used by numerous businesses to find the best candidates and individuals find the right position for them.  
---

<div class="container">
  <div class="content">
    <div class="dashboard">
      <!-- left panel -->
      <div class="dashboard-panel is-one-quarter is-hidden-mobile">
        <aside class="menu">
          <p class="menu-label">
            Industries
          </p>
          <ul class="menu-list">
            {% for industry in page.industries %}
              <li><a href="#{{ industry.linkId }}">{{ industry.title }}</a></li>
            {% endfor %}
          </ul>
        </aside>
      </div>
      <!-- main section -->
      <div class="dashboard-main">
        <section class="section">
          {% for industry in page.industries %}
            {% include industry-summary.html title=industry.title image=industry.image problem=industry.problem solution=industry.solution linkId=industry.linkId link=industry.link %}
          {% endfor %}
        </section>
      </div>
    </div>
  </div>
</div>
