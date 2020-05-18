---
layout:      posts
background:  shortBackground
title:       "GlobalHack VI"
subtitle:    "Caffeine, Coding, and Contributing for a Cause"
date:        2016-10-27 08:00:00
author:      "John, Larry, and Tyler"
headerImg:  "/assets/images/blog/homeless.jpg"
description: "The Ocelot team's experience participating in GlobalHack 6 (for St. Patrick's Center in St. Louis)"
---

## The Cause

We participated in this year's [GlobalHack 6](https://globalhack.org/globalhack-vi/) to support the cause of fighting homelessness.  It was a grueling weekend of non-stop design and coding with very little sleep. The challenge presented to us had a [project brief](https://drive.google.com/drive/folders/0B2mfdDRureR9Yk8wSk9MX1ZCME0) with four areas of focus:

* **Prevention** -- identifying those at risk of becoming homeless and potential strategies to keep such individuals housed
* **Emergency Shelter** -- streamlining the process of getting emergency housing for those on the streets
* **Electronic Referrals/Data Sharing** -- helping a Continuum of Care (CoC) become more integrated and refer people from one service to another
* **Data visualization** -- helping a CoC to be able to quickly view changes in performance of initiatives and be able to compare with other CoC's nationally

## The Logistics

We arrived at noon on Friday and got set up early.  Virtually the entire surface of the floor of Chaifetz arena was covered with tables and power cords:

{: .blog-center}
![Chaifetz Arena](/assets/images/blog/2016-10-27-global-hack-6/chaifetz.jpg)

{: .blog-center}
Fig. 1 - After everyone arrived

Around 6pm they began the keynote, which was a series of small speeches by sponsors, the mayor of St. Louis, people from the St. Patrick Center, and the founders of GlobalHack. I believe we received the project brief and dataset(s) around 7:30pm Friday, which officially kicked off the time period for contributing towards our submission.

GlobalHack provided meals, Wi-Fi access, and other amenities to participants. I'd say for the most part they did what they could to make the weekend the best it could be for participants, but it is definitely hard to ever write code for an entire weekend on minimal sleep.

{: .blog-center}
![Mass of Developers](/assets/images/blog/2016-10-27-global-hack-6/dev_mass.jpg)

{: .blog-center}
Fig. 2 - The field

There were around 1200 developers, tons of sponsors, and lots of activities going on at all hours of the day. The event's slack instance was abuzz with requests for help, images from giphy, and lightheartedness of other participants trying to enjoy the experience.

## Our experience

As far as our team, we had 3 of Ocelot Consulting's founders (Chris had a prior commitment for a family vacation) as well as 3 of our former coworkers (Bryan Young, Patrick Byrne, and Derek Tandy). None of us had ever participated in a hackathon, but we all felt ready for the challenge.

{: .blog-center}
![Our team](/assets/images/blog/2016-10-27-global-hack-6/team.jpg)

{: .blog-center}
Fig. 3 - The team

The weekend itself proved very tiring. Most of us were there from around noon on Friday until 3AM. We then came back on Saturday around 8am and worked until 2AM Sunday (hold a few who spent the entire night at the arena working or trying to sleep). Finally, we closed out the weekend at Chaifetz from around 7AM Sunday until the awards ceremony in the afternoon.

{: .blog-center}
![Ocelots](/assets/images/blog/2016-10-27-global-hack-6/ocelot.jpg)

{: .blog-center}
Fig. 4 - Our team mascot was there for support

It was very grueling, with the injections of caffeine and snacks in our stomachs doing a combined number on our personal health and hygiene, along with sitting in folding chairs for a prolonged period of time. GlobalHack was kind enough to provide us with some meals, but at some point we decided we needed to supplement that with food from the outside world in order to protect our health and sanity.

{: .blog-center}
![Cookies](/assets/images/blog/2016-10-27-global-hack-6/cookies.jpg)

{: .blog-center}
Fig. 5 - Some branded cookies courtesy of Tyler's wife

We were very proud as a team that we were able to maintain our composure and not experience any inter-team hostility, which is an accomplishment when doing so much within 48 hours. There were times where we were very delirious from lack of sleep and nutrition but we held together very well, and enjoyed the opportunity to work together for a good cause.

### What we did

We spent the first hour dissecting the problem and what would be our approach. We ended up primarily targeting parts 2 & 3 of the brief, leaving prevention and data visualizations for nice-to-have and possible inclusion near the deadline.

{: .blog-center}
![Ocelot Whiteboard](/assets/images/blog/2016-10-27-global-hack-6/whiteboard.jpg)

{: .blog-center}
Fig. 6 - The Ocelot whiteboard, pre-planning

To accomplish these goals, we decided to develop a bed finding application, which anyone could use to help assist a homeless person in quickly finding and reserving appropriate accommodations for an evening. When someone searched for a shelter, they would input a household's information (how many men, women, children, etc) and the search results would display appropriate facilities where they could then be reserved a bed, and the walking directions to the facility would be displayed.

It also aimed to provide quick access to a client's (homeless person) information, as well as the ability to enter data for a client. Finally, it allowed for a worker at a shelter to refer a client to an affiliated service provider (food, clothing, healthcare, education), and save that historical data into the client's profile.

We had a few affiliated features like allowing a homeless individual to register to receive a text message when a bed became available at a full shelter facility. The system also could send out weather related alerts according to current weather trends in case the service providers should be on the look out for people missing payments on higher utility bills or similar reasons.

#### Technical Description

We utilized a [couchdb 2](http://couchdb.apache.org/) database, exposed via RESTful expressjs/node services, and fronted by a React/bootstrap/node user interface. We utilized Auth0 for authentication via either Google or Facebook login. We also had tie-ins to SNS for SMS texting (alerts for bed availability), SES for emailing (when someone in the public reserved a bed that was eventually claimed by a homeless person), and the weather underground API for alerting to specific weather events and how they might affect homeless clients.

### What we didn't do

Data visualization is something that can be semi-easily setup under normal circumstances with a good data set/collection method, so we figured this would be of somewhat lesser value for the organization.

Prevention we saw as a pretty complex problem, as it aimed to predict who would become homeless and help them prior. It seemed like a "Minority Report" situation, where having data on real people close to becoming homeless around the area might be rife with privacy concerns as well as data collection difficulty. If given a larger amount of time we probably could have focused more on the problem and done some work with advanced data analytics to do some prediction modeling with a good dataset, but we had not the time nor the data to accomplish it.

## The end result

We were pleased that what we made was completely functional from end-to-end. We had databases, a service layer, and a functional user interface that would all potentially benefit a CoC or individual homeless shelter should it ever be necessary.

{: .blog-center}
<div class='globalhack-screenshots'>
    <a href="/assets/images/blog/2016-10-27-global-hack-6/screenshots/home.png" data-lightbox="screenshots" data-title="Main Menu">
    <img src="/assets/images/blog/2016-10-27-global-hack-6/screenshots/home.png">
    </a>
    <a href="/assets/images/blog/2016-10-27-global-hack-6/screenshots/main_menu.png" data-lightbox="screenshots" data-title="Main Menu">
    <img src="/assets/images/blog/2016-10-27-global-hack-6/screenshots/main_menu.png">
    </a>
    <a href="/assets/images/blog/2016-10-27-global-hack-6/screenshots/find_beds.png" data-lightbox="screenshots" data-title="Main Menu">
    <img src="/assets/images/blog/2016-10-27-global-hack-6/screenshots/find_beds.png">
    </a>
    <a href="/assets/images/blog/2016-10-27-global-hack-6/screenshots/register.png" data-lightbox="screenshots" data-title="Main Menu">
    <img src="/assets/images/blog/2016-10-27-global-hack-6/screenshots/register.png">
    </a>
    <a href="/assets/images/blog/2016-10-27-global-hack-6/screenshots/client_history.png" data-lightbox="screenshots" data-title="Main Menu">
    <img src="/assets/images/blog/2016-10-27-global-hack-6/screenshots/client_history.png">
    </a>
    <a href="/assets/images/blog/2016-10-27-global-hack-6/screenshots/shelter.png" data-lightbox="screenshots" data-title="Main Menu">
    <img src="/assets/images/blog/2016-10-27-global-hack-6/screenshots/shelter.png">
    </a>
</div>

{: .blog-center}
Screenshots

We might have focused more on just making something that looked good if we felt that St. Patrick Center and similar organizations would benefit most from that, but we find value in function and meeting a need, not in smoke and mirrors. Had we to do the competition over again, we might have included more placeholders or templates faking out parts of non-implemented functionality, or perhaps polished the user interface and presentation to please the judges more.

Normally in iterative software development the goal of having working software wins out initially, and client needs get met going forward whether that be polishing a UI or extended functionality. We have no doubt in our user interface and presentation skills, but we chose certain priorities for this competition and are pleased with the results.

If you would like to view our work, check out the links below, and feel free to drop us a line via twitter or comment.

* [Submission for GlobalHack 6](https://devpost.com/software/ocelot-consulting-s-global-hack-6-project)
* [Github Repository](https://github.com/ocelotconsulting/global-hack-6/tree/1.0)
* [Our Application](https://gh6.ocelotconsulting.com/)
