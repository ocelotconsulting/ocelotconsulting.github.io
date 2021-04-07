---
layout:      posts
background:  shorterBackground
title:       "Ocelot Interviews Jarrod McEvers"
subtitle:    ""
date:        2021-04-08 7:00
author:      "Jay Silverman"
headerImg:  "/assets/images/posts/questions.jpg"
description: ""
---

## Ocelot Interviews Jarrod McEvers

[Jarrod McEvers](https://www.linkedin.com/in/jarrod-mcevers-39b02670/){:target="_blank"} is a Cloud Engineer at Ocelot Consulting. He shares with us his passion for cloud and software engineering, his experiences with IoT, and some interesting perks of growing up in a small town.

![Jarrod McEvers](/assets/images/posts/2021-04-06-interview-jarrod/jarrod.jpg)

**Jay (interviewer): Hi Jarrod, thank you for taking time to answer a few questions about yourself! You have been at Ocelot since last June - how has your experience been?**

Jarrod: There are many aspects I like, but the one at the top of my list is the culture. Switching jobs during the COVID-19 pandemic has been way less stressful than I thought it would be because of the atmosphere at Ocelot. It's a culture with a high level of inclusion that gives you the assurance that, no matter what background you come from, you are welcome here. Everyone here is more than willing to lend a helping hand. If someone asks a question or for advice in Slack, it will probably get answered within a few minutes. I think the social efforts like the interviews are a nice touch. It makes working from home less isolated.

**Jay: Before Ocelot, could you share with us what your most rewarding project that you worked on was?**

Jarrod: My favorite project is one I did while I was at Emerson Electric. I worked on a product team as a backend engineer for Emerson's WiFi thermostat, [Sensi](https://sensi.emerson.com/en-us/products/wifi-thermostat){:target="_blank"}. Our team was responsible for everything (code, security, infrastructure, and more), so we had a weekly on-call rotation to make sure our customers could change their thermostats anytime of the day through the mobile app. The person on-call was nicknamed Batman (because they are the guardian of the night). With great power, comes great responsibility. Because Batman protects the night from outages, they typically lost sleep throughout the work week. Since Batman could potentially be sleep deprived, they were exempted from normal work during business hours. This allowed them to experiment, take care of tech debt, cut infrastructure costs, etc. We eventually got to the point where our production environment was stable and it would be weeks, or even months, between outages.

![Sensi](/assets/images/posts/2021-04-06-interview-jarrod/sensi.jpg)

Having a constantly stable infrastructure does have a drawback or two. One of those is any new engineers added to the on-call rotation couldn't get first-hand experience with these outages. I happened to be cleaning out my closet when I found a programable [AWS IoT button](https://www.amazon.com/gp/product/B01C7WE5WM){:target="_blank"} that I had bought a few years prior. My idea was that we would simulate production-like issues in a testing environment. This application was mostly based off of [Chaos Monkey](https://netflix.github.io/chaosmonkey/){:target="_blank"}, a tool created by Netflix to test infrastructure durability. I called it the Infrastructure Destroyifier. I was able to finish this during one of my Batman weeks. The application is pretty simple as it only required an IoT button and AWS (IoT service, a lambda function, and the SDK). When you press the button, it would run a lambda function that would randomly do something destructive in our testing environment. The things that got destroyed/modified would cause one of our software canaries to start alerting. Our canaries would send messages into one of our Slack channels saying that something was wrong. This was the cue for Batman to try to figure out what was going wrong in the testing environment. This facilitated learning opportunities for our newer engineers without the pressures of time constraints or SLAs. It was a project that was extremely rewarding to work on.

![AWS IoT](/assets/images/posts/2021-04-06-interview-jarrod/aws-iot.jpg)

**Jay: How did you get into IT?**

Jarrod: I knew I wanted to do something with computers/electronics from an early age, but I wasn't sure what career path to choose. Video games were a big part of my life growing up, which may have influenced me to head down the IT path so I could be a video game designer/programmer. I went to a small high school (my graduating class was 27 students!), so there were no opportunities to take programming classes. However, I was lucky enough to be a member of the yearbook club for my junior and senior years of high school. My favorite part about it was making Photoshop clipping paths, which I was better pretty good at. Those two years convinced me to try to pursue a graphic design degree, or so I thought.

I knew my collegiate path would be two years at a community college (Lewis and Clark Community College in Godfrey, IL) then finish my Bachelor's degree at Southern Illinois University Edwardsville (SIUE). While setting up classes for Lewis and Clark, my advisor informed me that there was no transfer program with SIUE for graphic design. This was a problem because there was no guarantee that any graphic design credits would transfer. I was not going to enroll at a different community college since my first year of tuition at Lewis and Clark was covered by a scholarship. After some research and advice from my advisor, I decided to go for a computer science degree as it could potentially lead to jobs with a graphics focus. The first line of code I wrote was in my first programming class during my second semester at Lewis and Clark, and I haven't stopped writing code since that class!

![AWS IoT](/assets/images/posts/2021-04-06-interview-jarrod/lewis-and-clark.jpg)
![AWS IoT](/assets/images/posts/2021-04-06-interview-jarrod/SIUE.png)

**Jay: I see you grew up in Wrights and now live in Alton, IL. What's the difference in any between the two areas? Do you miss living in Wrights?**

Jarrod: The population of Wrights is less than 100 while Alton's is over 25,000, so it is not difficult to spot the differences. While I do miss living in my hometown, I now appreciate the fact that I don't have to drive 10 plus miles for the closest necessities (gas, groceries, etc.). Wrights has a post office, a park, a town hall building, and a grain bin, and that's about it. The running joke is that Wrights is so small that it only has one street, which isn't far from the truth. It is also small enough that during a census year, some of the villagers (Wrights is considered a village) gathered at the town hall to manually count the population of Wrights. My hometown does come with some benefits as you are going to get more acreage with the property you buy. Another perk is that you can have chickens without anybody complaining (I would know as my dad has been raising chickens for the last 16 years). Eggs were the only grocery we never had to go the store for, especially when a winter storm was approaching. Taking care of the chickens was a hobby of my mine growing up. To this day my parents' neighbors still call me the "Chicken Whisper" as I was able to catch any chicken that got out of its fencing. I guess I could have been a famous chicken wrangler instead of a software engineer.

**Jay: Thank you Jarrod for taking time to share your experiences with us!**
