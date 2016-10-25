---
layout:     post
title:      "GlobalHack VI"
subtitle:   "caffeine, coding, and contributing for a cause"
date:       2016-10-17 13:45:00
author:     "John, Larry, and Tyler"
header-img: "img/blog/homeless.jpg"
description: "The Ocelot team's experience participating in GlobalHack 6 (for St. Patrick's Center in St. Louis)"
---

## The Cause
As a team we decided to participate in this year's GlobalHack 6 to help support the cause of fighting homelessness, using the [St. Patrick Center](http://www.stpatrickcenter.org/) in St. Louis as an example for the project's premise. The problem's [project brief](https://drive.google.com/drive/folders/0B2mfdDRureR9Yk8wSk9MX1ZCME0) centered the problem around 4 main areas:

* **Prevention** -- helping to divert the need for homeless assistance by finding ways to help prior to a person becoming homeless
* **Emergency Shelter** -- helping to quickly get someone into housing assistance
* **Electronic Referrals/Data Sharing** -- helping a Continuum of Care (CoC) become more integrated and refer people from one service to another
* **Data visualization** -- helping a CoC to be able to quickly view changes in performance of initiatives and be able to compare with other CoC's nationally

Homelessness is definitely not something which can be solved in a weekend spent writing code, but it was a good cause nonetheless which we were more than happy to be involved with.

## The Logistics
The team wanted to get the entire experience, so we arrived at noon on Friday so as to survey the playing field. GlobalHack did a good job with setting up the event, which was located in the Chaifetz Center on the campus of Saint Louis University. They had the entire floor of the arena set up with buffet tables from end-to-end. We found a good corner to setup shop in, and prepared ourselves for the weekend "marathon".

Around 6pm they began the keynote, which was a series of small speeches by sponsors, the mayor of St. Louis, people from the St. Patrick Center, and the founders of GlobalHack. I believe we received the project brief and dataset(s) around 7:30pm Friday, which officially kicked off the time period for contributing towards our submission.

GlobalHack also provided meals, power, Wi-Fi access, and other amenities to participants. I'd say for the most part they did what they could to make the weekend the best it could be for participants, but it is definitely hard to ever write code for an entire weekend on minimal sleep.

## Our experience
As far as our team, we had 3 of Ocelot Consulting's founders (Chris had a prior commitment for a family vacation) as well as 3 of our biggest fans (Bryan Young, Patrick Byrne, and Derek Tandy). None of us had ever participated in a hackathon, so it was going to be new for everyone.

### What we did
We spent the first hour dissecting the problem and what would be our approach. We ended up primarily targeting parts 2 & 3 of the brief, leaving prevention and data visualizations for nice-to-have and possible inclusion near the deadline.

To accomplish these goals, we decided to develop a bed finding application, which anyone could use to help assist a homeless person in quickly finding and reserving appropriate accommodations for an evening. When someone searched for a shelter, they would input a household's information (how many men, women, children, etc) and the search results would display appropriate facilities where they could then be reserved a bed, and the walking directions to the facility would be displayed.

It also aimed to provide quick access to a client's (homeless person) information, as well as the ability to enter data for a client. Finally, it allowed for a worker at a shelter to refer a client to an affiliated service provider (food, clothing, healthcare, education), and save that historical data into the client's profile.

We had a few affiliated features like allowing a homeless individual to register to receive a text message when a bed became available at a full shelter facility. The system also could send out weather related alerts according to current weather trends in case the service providers should be on the look out for people missing payments on higher utility bills or similar reasons.

### What we didn't do
Data visualization is something that can be semi-easily setup under normal circumstances with a good data set/collection method, so we figured this would be of somewhat lesser value for the organization. Prevention we saw as a pretty complex problem, as it aimed to predict who would become homeless and help them prior. It seemed like a "Minority Report" situation, where having data on real people near homelessness around the area might be rife with privacy concerns as well as data collection difficulty. If given a larger amount of time we probably could have focused more on the problem and done some work with advanced data analytics to do some prediction modeling with a good dataset, but we had not the time nor the data to accomplish it.
