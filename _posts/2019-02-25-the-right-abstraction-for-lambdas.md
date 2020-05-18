---
layout:          posts
background:      mediumBackground
title:           "The Right Abstraction for Lambdas"
date:            2019-02-25 09:00:00
author:          "Artem Chernyak"
headerImg:      "/assets/images/blog/code.jpg"
description:     "Using serverless functions to hand requests"
cross-post-link: "https://hackeryarn.com/post/the-right-abstraction-for-lambdas/"
cross-post-text: "hackeryarn.com"
---

<!-- *{{page.author}} - {{page.date | date: "%b %d, %Y"}}* -->

Serverless functions are a great alternative for many light tasks that would traditionally required a server. They allow you to split up work across mutiple small functions, and you only pay for what you use. On top of that, they require less maintenance than managing your own server or Kubernetes cluster.

However, the single function per lambda approach can become too granular. Shared functionality becomes hard to group together. You only have hard to enforce naming convention for lambda that belong together. Then comes the problem of sharing code between lamdas. Do you need a library for a few common functions?

I side with [Sandy Metz](https://www.sandimetz.com/blog/2016/1/20/the-wrong-abstraction) in that "duplication is far cheaper than the wrong abstraction". But that doesn't mean you should give up the search for the right abstraction.

[The Serverless Framework](https://serverless.com/) addresses some of these issues by letting you share code in the same project. However, it requires you to completely change how you process requests. You can't rely on the same set of battle tested libraries that you use would use elsewhere. If you later decide to switch to a microservice architecture, you need to change large portions of your handlers. [The Serverless Framework](https://serverless.com/) alone isn't enough.

## The Right Abstractions

I think having one action per lambda function is too granular. It gets rid of all the tooling built around handling web requests and routing.

A single lambda should handle all the actions on a single resource. The function should know how to perform a Create, Read, Update, Delete, along with specialty methods.

With this in place, you share the most appropriate logic without needless indirection. It creates space to break up your code. The actions that deal with the same resource are put together in one package. Everything else is either tied with its resource or abstracted into a general package.

## Other Benefits

Having a single lambda handle all the actions of a resource has a hidden performance advantage. You see it when users perform multple actions on a single resource - a common scenario. The first action warms up the lambda, so subsequent request have better performance.

The best part is that the majority of your app can still follow the same pattern as a microservice. If you need to move to a traditional server, the only thing you need to change is a small wrapper around your router.

Lambdas give you great power, but you need to use them correctly to take full advantage of it. An abstraction that adds to your code portability and usability is what you need to successfully work with lambdas.

## Creating a Multi-Route Lambdas

You will run into a problem when trying to create lambdas that handle multiple routes. There isn't a built in mechanism for handling more than one actions in the context of a lambda. Luckily, there are many efforts in the community to make this scenario possible.

No matter the technology you use, the communities create gateways that all work in a similar way. They translate the requests intended for a lambda into requests that a router can handle. You get to use the router and handlers approach you are used to while running your code in a lambda.

The following section shows how to apply this technique across Go and Node.js servers.

### Go

If you want to use this technique with Go, [Apex gateway](https://github.com/apex/gateway) provides an easy way to translate lambda bound requests. You create your router as normal, pass the router to the `http.Handle` function, and use the gateway to start your server. Everything else is taken care of by the library.

```golang
package main

import (
    "log"

    "github.com/apex/gateway"
    "github.com/gorilla/mux"
)

func main() {
    r := mux.NewRouter()

    r.HandleFunc("/sample", handler)

    http.Handle("/", r)
    log.Fatal(gateway.ListenAndServe(":8080", nil))
}
```

### Node.js and Express

For Express, there is the [aws-serverless-express](https://github.com/awslabs/aws-serverless-express) library. It allows you to wrap your normal express app is a server, and proxy it from a serverless handler.

```js
const express = require('express')
const awsServerlessExpress = require('aws-serverless-express');

const app = express()

app.get('/sample', handler)

const server = awsServerlessExpress.createServer(app);

exports.handler = (event,context) => {
  awsServerlessExpress.proxy(server, event, context)
}
```
