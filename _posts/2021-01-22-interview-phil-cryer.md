---
layout:      posts
background:  shorterBackground
title:       "Ocelot Interviews Phil Cryer"
subtitle:    ""
date:        2021-01-22 9:00
author:      "Jay Silverman"
headerImg:  "/assets/images/posts/interview.jpg"
description: ""
---

## Ocelot Interviews Phil Cryer

[Phil Cryer](https://www.linkedin.com/in/philcryer/){:target="_blank"} is a Cloud Security Architect at Ocelot Consulting. He is a St. Louis native, avid fan of the St. Louis Blues, and passionate about driving open-source projects. We recently interviewed him to learn more. 

![Phil Cryer](/assets/images/posts/2021-01-22-interview-phil-cryer/phil.jpg)

Phil (center) at a work client in Martha's Vineyard and Woods Hole, Massachusetts

 
**Jay (interviewer): How would you describe the Ocelot community and interacting with your coworkers?**

Phil: What I’ve enjoyed most working at Ocelot is the people. Beyond any other place I’ve worked, I’ve never felt as much of a team that wants everyone to succeed. 

I love what I do but am always learning. So, when I haven’t used $TOOL for 2 years, well things have changed. Here I feel like we have a rolling base of knowledge to query, and again, it makes us all better. 

**Jay: How did you originally get into IT?**

Phil: My first real IT job was desktop support technician but what I loved about it was that we did everything for the systems, end to end. We’d run all the Cat5 for network, all the phone lines, terminating them on both ends, punching down the phone block, running all the servers, switches, and T1 connection. All while building out and supporting all the desktop computers and printers. It was an amazing time of learning all new things, and that only accelerated when we starting solving things with Linux and open-source software.

**Jay: I always appreciate you sharing Linux tips and the latest distributions you are trying out. How many Linux distros do you think you've tried?**

I don’t know how many distros I’ve tried. Honestly, so many on different platforms (desktops, laptops, servers, IoT boards, phones). Anytime there’s one that does something new or interesting I like to try it out. 

Recently I’ve moved from using Debian-based distros for desktop to an Arch Linux variant called [ArchLabs Linux](https://archlabslinux.com/){:target="_blank"}). Of course GNU/Linux is just the kernel, so there’s lots of ways to do the rest differently, and I like this one because it really only includes the minimum amount of packages. This leaves me to figure out how to get the things I want working to work - and it’s been fun.

![ArchLabs Linux](/assets/images/posts/2021-01-22-interview-phil-cryer/archlabs.png)

My next challenge is to try Slackware again. Slackware is the oldest still running Linux distribution (followed by Debian) and is the one with which I really felt I started to learn Linux (after a short time with Red Hat). Slackware really allows you to learn how to run Linux and I really loved it in the day. I started on the server and used it as a desktop before moving on to BSDs and various Debian or Ubuntu offshoots for desktops. I ran FreeBSD (BSD is not Linux, but can run almost all of the same software) for my main server for many years and it’s a great distro for that.

**Jay: Are there any Linux projects or hacks which you are the most proud of?**

I think hacks is the right term since I’ve never considered myself a developer - more of a sys-admin, dev-ops, hacker in the true sense of the word. I like looking at a problem and learning how to address it with (most of the time) open-source software. 

Often times I feel like my ideas are more important than how I get them done. For example an old project like [lipsync](https://github.com/philcryer/lipsync){:target="_blank"} dealt with building something that would mimic the behavior of dropbox, but using simple, open source software and some scripts. Sure it didn’t do everything DB did and that wasn’t the goal. Instead to demystify how it was done.

![lipsync](/assets/images/posts/2021-01-22-interview-phil-cryer/lipsync.png)

Another was an idea of how you could brute force and guess a unique string. Unmasking a service that was expected to be private by the user. In this case I looked at how a file sharing service was naming their files to try and anonymize them but by not using enough variety which made it somewhat easy to guess... And if you scripted it, well we have all the time in the world to script it! So by using a bash script to tie together simple Unix utilities, I came up with a project to do just that, shared on [a github repo](https://github.com/philcryer/ca-harvester){:target="_blank"}. While this service was mainly used to share ideas and screenshots, I found all sorts of things that shouldn’t be public. As the repo spells out, this was revealed to the company in an ethical manner and it was only after they replied that I posted it publicly.

![harvester](/assets/images/posts/2021-01-22-interview-phil-cryer/harvester.png)

But those are old examples. I’ve been searching for more things I can do using new programing languages that I couldn’t with the simple tools I was using before. 

Recently I was working with an old friend uploading public domain literature to [Filecoin](https://filecoin.io/){:target="_blank"}. The idea was that it would be a permanent way to store historical information on a decentralized storage network for future generations. It was great working with him again, and our approaches were similar but complemented each other. We looked at a new way to think about storage. The tie in between Filecoin and IPFS (InterPlanetary File System) being complementary protocols is really interesting. They’re used for storing and sharing data in a truly distributed web as a new storage method that can archive things for future generations (more on this on [filecoin's documentation](https://docs.filecoin.io/about-filecoin/ipfs-and-filecoin/#data-storage-incentives){:target="_blank"}).

![filecoin](/assets/images/posts/2021-01-22-interview-phil-cryer/filecoin.png)

**Jay: Thank you Phil for taking time to share your experiences with us!**
