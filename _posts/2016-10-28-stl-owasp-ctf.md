---
layout:      posts
background:  shortBackground
title:       "STL OWASP CTF"
subtitle:    "Seeing information security from the other side"
date:        2016-10-28 09:45:00
author:      "Larry Anderson"
headerImg:  "/assets/images/blog/war_room.jpg"
description: "My experience at the October 20th Capture The Flag event put on by the St. Louis OWASP chapter."
---

## My first CTF

Over the past few years, I've written quite a bit of code targeted at the security domain. Whether it's been libraries to assist other developers, POC's to investigate new protocols or technologies, or assisting development of a [security-focused reverse-proxy](https://github.com/ocelotconsulting/ocelot), I have spent considerable time focused on security. I take pride in doing something that others find difficult, taking a complex problem at attempting to make it simpler. I've attended security conferences where CTFs were taking place, but felt like I'd be missing out on some important talk or be too busy to participate.

When I attended a local [STL Cyber Meetup](https://www.meetup.com/STL-CYBER-Meetup/) recently, I was informed that the local OWASP chapter was sponsoring a CTF in late October, which really interested me. Participating would allow me to view things from an attacker's or penetration tester's perspective. I was worried that it was going to be close to the [Hackathon](https://globalhack.org/globalhack-vi/) I was also participating in that weekend, but the opportunity to jump into a CTF that was local was too enticing.

## Preparation

The organizer of the event sent out messages to participants, letting them know that they'd need their own laptop (check) and an installation of Kali linux. I had toyed with Kali years before, but not to the point of using it regularly. Having experience with docker, I realized that Kali had some official docker support recently, so I chose to go this route. I found a [docker image](https://hub.docker.com/r/jgamblin/kalibrowser-lxde/) which came packaged with a VNC server/viewer and decided to use that, as I didn't want to install other software on my machine, especially of the variety used in Kali.

{: .blog-center}
![Kali docker in browser](/assets/images/blog/2016-10-28-stl-owasp-ctf/kali-browser.png)

{: .blog-center}
Fig. 1 - Kali docker in a browser (courtesy [Jerry Gamblin](http://jerrygamblin.com/))

I'd also previously ran an early version of [Facebook's CTF server](https://github.com/facebook/fbctf), so I was familiar with what the actual premise of a CTF was, and the types of things to be expected in the various levels of challenges.

Outside of that, I did very little other preparation. I brought my laptop, and an attitude for learning, and hoped for the best.

## My Experience

We were given credentials to a Symantec site which allowed us to download a VPN configuration to connect to the game's private network. Once connected, we were able to load the game's leaderboard and challenge set. I was able to accomplish this pretty easily, and was ripping into the initial questions pretty quickly. The questions centered around a fake social networking website seemingly based off of a professional site like LinkedIn. We were provided a link to download the fake site's code, which was primarily python. I don't have a lot of direct python experience, but I have been meaning to learn some, and it wasn't a requirement to know anything advanced for this exercise.

I found the first few flags relatively quickly, and found myself doing rather well in comparison to other people around the room who were having trouble simply VPNing to the private network. The leaderboard was mine! An example of this type of question was to find the location in the python source code of an unchecked/unvalidated redirect. In this case, you were trying to send a colleague a link to your educational experience on the fake site, and the link was not checked (so could be made to redirect to a locally controlled server where you could scrape details about the remote user) for validity -- like making sure the url was to a page on the current site vs. another server.

{: .blog-center}
![Yours Truly](/assets/images/blog/2016-10-28-stl-owasp-ctf/yours_truly.jpeg)

{: .blog-center}
Fig. 2 - Yours truly @ the 10/20/2016 STL OWASP CTF at T-Rex downtown.

At some point I arrived at a harder challenge, one that was worth more points but required more work to be done. And that's really where I found issues with the competition. I came up with an idea that I thought would win the flag, but tried repeated variations on that idea to no avail. I revealed a couple of hints to the challenge (reducing the potential reward), and they indicated I was trying the right thing, but still it wasn't working. The idea with a few of these larger challenges was that there was a "bot" representing a fake user on the system end, which would traverse the links and Cross Site Scripting (XSS) attacks I was trying, in order to expose data from that fake bot. The problem was that my bot seemingly never visited the traps I had set up for them.

## Wrap-up

Overall, I really enjoyed the experience. It helped me to think outside the box in terms of what a potential attacker or penetration tester might try when confronted with a web application. I enjoyed both the educational and competitive nature of the event, which was right up my alley. Had I to do it over again, I would only change a few things:

* Install Kali linux on a thumb drive where it could have full access to hardware (rather than running in docker as a privileged container)
* Have a second laptop for Google to assist with different attack strategies while the Kali laptop was connected to the private network
* Fully understand how the CTF organizers are utilizing bots as part of the competition
* Participate in CTFs where all of the competition is local.  

I thought I performed rather well, finishing in the top 10% of competitors despite this being my first CTF. I still think I could do better in the future, and I'm excited to give it another go.
