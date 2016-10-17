---
layout:     post
title:      "Snap-Slack Bot"
subtitle:   "leveraging AWS lambda for asynchronous slack activities"
date:       2016-10-17 10:05:00
author:     "Larry Anderson"
header-img: "img/blog/snap-slack.jpg"
description: "A snapchat style slack bot implemented in AWS Lambda"
---

## We Love Slack
Here at Ocelot Consulting, we use [Slack](https://slack.com/) quite heavily for our inter-team communication. In fact, as indicated in the footer of our website, we have a [public Slack](http://slack-registration.foxeared.com/) which anyone can join to converse with us. Slack integrations have formed a large part of our automation/notification strategy in the past to facilitate DevOps (or ChatOps) practices, and will likely do so in the future.

For a more lighthearted project, I recently created a Slack bot with a somewhat simple, if not peculiar purpose. Occasionally when messaging between the team and other groups, certain recipients of messages had not been the intended target, or perhaps the content of the message was not appropriate for certain recipients. In these extremely limited situations, it became obvious that Slack's `Delete message` button was an ally. Taking automation seriously, what would be nice is if instead of manually clicking on the `Delete message` button, we could instead rely on a specified delay after which Slack would go ahead and delete the given message for us.

---

{: .blog-center}
![Delete message button](/img/blog/2016-10-17-snap-slack/delete.png){:width="75%"}

{: .blog-center}
Fig. 1 - The friendly "Delete message" button

---

## Slack Setup
To create such a bot, there is a little setup required on both the Slack side and the
AWS side. On the Slack side, you have to create a bot custom integration (which provides you with a token that can be used for calling Slack web APIs) as well as a slash command custom integration so that we can conveniently call the command, as easily as sending a normal Slack message.

---

{: .blog-center}
![Slack custom integrations](/img/blog/2016-10-17-snap-slack/custom-integrations.png){:width="75%"}

{: .blog-center}
Fig. 2 - The resulting custom Slack integrations

---

## Lambda Setup
On the AWS side, there currently exists a [blueprint to create a Slack 'echo' Lambda](https://aws.amazon.com/blogs/aws/new-slack-integration-blueprints-for-aws-lambda/) for Node.js which
configures an API Gateway HTTPS route to call the new Lambda, as well as provides instructions on how to do some of what I'm talking about here in comments. As it states, part of the additional setup is encrypting the token received when creating the slash command in Slack via KMS:

    $ aws kms encrypt --key-id alias/<KMS key name> --plaintext "<slash command token>"

This encrypted token will be verified on incoming slack commands to ensure the command is authorized to invoke the Lambda. There are a few additional steps needed for configuration, which you can view in the [project's github repo](https://github.com/ocelotconsulting/snap-slack-lambda#configuration).

Most of the development of this project was pretty straightforward and simple, Slack has done a great job with [documenting their APIs](https://api.slack.com/methods) and making them easily testable. Once I got going with the correct configuration, it was a matter of no time doing the operations I was needing to perform.

## We live in an async world
Where I ran into a slight snag was when I realized slack wants a response within 3 seconds from any command that is called. Lambda is decently quick to operate and respond to commands, but if a new container is spun up and you experience latency over the internet, you can easily go over this limit.

---

{: .blog-center}
![Slack timeout error](/img/blog/2016-10-17-snap-slack/timeout.jpg){:width="75%"}

{: .blog-center}
Fig. 3 - The slack timeout error

---

Compounding the problem is that Slack expects an HTTP response (200 is normal, others are acceptable if a true response). The slash command invocation provides a `response_url` to issue other asynchronous responses to, but that is intended for use past the initial response. Whenever returning a response from a Node Lambda, the event processing completes, so providing that snappy response before performing the real logic of the bot will result in erroneous execution.

After a few minutes of Google-sleuthing I ran across what I would use as the solution to this asynchronous problem -- [*invoking a second Lambda function*](https://github.com/ocelotconsulting/snap-slack-lambda/blob/master/src/aws/lambda/invokeLambda.js#L4). So essentially what the initial Lambda call does now is proxy an invocation to a second Lambda ([with `InvocationType` parameter set to a value of `Event`](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Lambda.html#invoke-property)), and then return the response so that the Slack slash command is satisfied before its 3 second command timeout.

---

{: .blog-center}
![Snapslack Slash Command](/img/blog/2016-10-17-snap-slack/slash-command.png){:width="75%"}

{: .blog-center}
Fig. 4 - The Slack slash command in action.

---

## Wrap-up
So now our command is working, and messages are being deleted before they can cause any undue harm. Whew!

While this was certainly a whimsical usage of Slack and Lambda to perform some light automation, the two form a pretty powerful DevOps/ChatOps duo, which can be leveraged for a large number of potential usages. Comments/suggestions? Feel free to drop us a line on [twitter](https://twitter.com/ocelot_llc) or in the comments below. Thanks!
