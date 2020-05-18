---
layout:      posts
background:  shortBackground
title:           "Embrace Your Constraints"
date:            2019-08-15 09:00:00
author:          "Artem Chernyak"
headerImg:      "/assets/images/blog/code.jpg"
description:     "Common constraints and techniques to deal with them"
cross-post-link: "https://hackeryarn.com/post/the-right-abstraction-for-lambdas/"
cross-post-text: "hackeryarn.com"
---

Engineers want to measure the quality and effectiveness of their work. They turn to code coverage, burn down charts, and yearly goals, with the best intention.

These measurements provide quantitative data about how much planned work was delivered, but they fail to tie the work to outcome. What good are 1,000 lines of code if the users never use the feature? These metrics distract from the two question every professional should ask:

-   Did my work deliver measurable change?
-   Did I stay within the constraints?

Everyone is familiar with the concept of measurable results. Others have written and talked extensively on how to measure the right thing: 

-   [Product Development Cycle Fundamentals](https://blog.ycombinator.com/product-development-cycle-fundamentals/)
-   [How to Measure Value](https://www.thoughtworks.com/insights/blog/how-measure-value)
-   [Measuring Effectiveness](https://medium.com/@LyndhurstGroup/measuring-effectiveness-fe84b08d9035)
-   [What's the Story About Agile Data](https://www.agilealliance.org/resources/videos/whats-the-story-about-agile-data/)

But the second question, around constraints, may come as a surprise. As engineers we have an aversion to constraints. We think they limit the quality of the solutions we deliver.

In reality, it's not the engineer that finds the best new tool that's highly regarded, it's the one that gets the results with what's right in front of him. The developer that mastered his domain brings more value.

As we dive down the rabbit hole of new tools in search of perfection: timelines double, bugs get introduced, and the whole project comes to a screeching halt because of the mountain of tech debt.

The expert engineer, on the other hand, is careful about introducing new tools. She doesn't pull in a library for left pad because she knows how to write that code. Her scope for new bugs is small so when she introduces one she quickly finds it, in her own code.

OK, most of the time the search for new tools doesn't get that bad, and the expert engineer is a myth. But the price of looking for a way around the constraints is very real, and we should strive to be more like the expert engineer.

In this article I want to cover the most common constraints I come against and provide the techniques I found to dealing with them.

# Not Enough Time

Whether a bug came up, an outage happened, or we just underestimated the work, we constantly come up against time constraints. It's the nature of a job in a highly complex domain.

The easy solution is pushing back the feature. We can finish it at the beginning of next sprint because we work in small increments&#x2026; Right?

In my experience, time constraints rarely become an issue if the tasks are kept small. As long as the tasks are kept small, features get delivered every iteration and no one gets upset because the application progresses forward.

Time constraints become an issue when we take on too much work at once. When the timeline is up and we have nothing to show. We might be one bug away from delivering the features, but that doesn't matter if the stake holders get nothing.

To prevent this situation, you have to break the all or nothing mentality. When you realize the task you're working on is too much; stop. Reevaluate the requirement.

Go back to the stakeholders with the goal of figuring out smaller chunks hidden in the details. Pareto principle states that 20% of the work holds 80% of the value. When features bloat, it's up to you to figure out the 20% that will deliver 80% of the value. You can revisit the rest later, if needed.

# Missing or Changing Requirements

Before you can be effective you need to have clarity of the expectations. To get clarity you need to ask questions.

Your question will result in one of three outcomes:

If the feature is high priority, you will get to have the needed conversation and gain clarity. This will let you start work with a better idea of what's expected and minimum down time.

A much worse outcome, but all too possible, is that you can't get anyone to look at the feature. When this happens you should question the priorities. If it's not a high enough priority to define well, it's not high enough priority to work on. The work is endless, your time isn't. See what else is needed and select a task you can accomplish.

The third option, and the one you stand to gain the most from, is that the feature is high priority but the users aren't sure what they want. When this happens, you get the chance to create low fidelity prototypes, explore new approaches, and get into a creative mindset. Working through this process with users allows you to learn about them which result in better understanding on all future work. The return on the time you investment is enormous.

# Unrealistic Expectations

If your stake holders are non-technical, like they often are, you will inevitably come up against ridiculous expectations. "It will only take a couple hours to add authorization, right?" These expectation may even be your own doing. If your application is well build and easy to use, it becomes indistinguishable from magic. Everything seems easy from the outside.

But don't get frustrated by these requests. They provide another chance to connect with the stake holders. This time, allow them to understand more about your work. Compare and contrast features and explain why this feature might take longer than another.

Once the stake holders know the work required, they will give you more time or pick a feature they can have sooner. The important part is, to educated the stake holders so next time they know the scope of a similar feature.

# The Right Tool for the Job

The notion of "the right tool for the job" echoes through every office. Unfortunately, it's misunderstood almost as often as it's uttered.

**Right** doesn't mean perfect. It means the tool that enables you to accomplish the job without wasting time. It even changes depending on the person or team.

If a team knows nothing about a language used to implement the perfect tool, they could spend weeks learning enough to implement the solution. Sure future work may get easier, but will the amount of future work justify the investment?

On the other hand, if they use the language they know and add library that gets them 80% of the way, they can give the users results now. Then you can come back to evaluate that perfect tool with a better knowledge of the alternative.

No matter which option you pick, remember that every new dependency needs careful consideration. Your team has to learn the tool. You have to make sure the tool is maintained, or has clean code so you could take on the maintenance. You have to verify that it works with the rest of your dependencies. If this sounds like too much work, consider implementing the features you need yourself.

# Technological Limitations

This is the most surprising area of frustration. Many of us have gone to school, or spent vast amount of time, to learn about optimizations, data structures, and algorithms. We learned about these so we could deal with technological limitation.

When you come up against this limitation &#x2013; like processing speed, memory limits, rendering speed &#x2013; it's not time to dispaire. It's time to celebrate. You finally get to dust off that old book and figure out a tough problem.

The important part, for those around you is that you set realistic expectations. There won't be a quick solution. It will take a significant time investment.

Once the expectations are set and you get to start the work, consider yourself lucky. These challenges don't come along often. So dive in and enjoy the learning.

# Wrap Up

This isn't an exhaustive list of constraints. These are just the once I fight with most often. Still, I hope it serves as a reminder, to you and me, about how lucky we are to work in a field that allows us to solve problems every day. To enjoy the process, we just have to expand our scope of what problems we are solving.

Finally, I would like to thank Seth Godin for the [inspiration](https://seths.blog/2019/06/constraints-and-measurement/) for this article.
