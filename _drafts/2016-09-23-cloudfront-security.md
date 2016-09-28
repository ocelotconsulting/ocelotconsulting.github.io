---
layout:     post
title:      "Securing your Cloudfront distribution"
subtitle:   "Making your enterprise website secure, scalable and worry free"
date:       2016-09-26 00:00:00
author:     "Chris Coffman"
header-img: "img/blog/launch.jpg"
---

Hello, my name is Chris Coffman and this is my first blog post on Ocelot Consulting. Recently, I was developing a website for a fortune 200 company that needed to be globally available. The site also needed to be secured so only employees could access the content. Up to this point I had been hosting my websites in AWS EC2 instances and I wanted to try hosting this site using S3 and Cloudfront. I ran into an issue securing the site. We had been using a security gateway to provide security to our VPC. If I was going to secure Cloudfront, what was the best way to enable security?

One solution is to use AWS signed URLs or Cloudfront cookies. Cookies are a simpler solution if the entirety of your site will be hosted in Cloudfront. Therefore, how do you generate the cookies and set them for your domain? If you secure your Cloudfront distribution, no content will be accessible.

To solve this problem, I started off by setting up an S3 bucket with the following structure:
* www
  * public
* keys

The www folder hosts my website, and the public folder hosts some unsecured HTML pages. The keys folder holds my Cloudfront private key file, used to generate cookies to access the content in the www folder.

In Cloudfront I created a web distribution for my S3 origin, serving content out of the the www folder. The distribution was secured by default. I created an additional behavior for the public folder for the purpose of unsecuring it. Next, I created an error handler for HTTP 403 errors. Now, instead of giving back a cryptic forbidden response, Cloudfront would serve up a webpage that would redirect users to the login page in the public folder. The URL would include a state parameter that could be used to direct the user back to their original request once the login process was complete.

The login page I wrote at the previous company was specific to their authentication server and entitlement system. Therefore, for the purpose of this blog post, I decided to reengineer it to give you an example of how I generate the Cloudfront cookies. The code lives [in this github repo](https://github.com/ocelotconsulting/s3nator) if you would like to follow along.

The new code authenticates with Google via OAuth using their [documentation]( https://developers.google.com/identity/sign-in/web/). Once the user is authenticated, the login page uses AWS Cognito to call an AWS Lambda backend, passing the OpenID token from Google. Only authenticated Google users are allowed to invoke the Lambda. The Lambda then decodes the token by calling the Google token info endpoint and makes a decision on whether you should view the protected content.

In the code example, if your Google email address is for the ocelotconsulting domain, it generates Cloudfront cookies. To generate the Cloudfront cookies, it accesses the S3 bucket's keys folder to obtain the Cloudfront secret key. The Lambda returns the cookies to the login page, which in turn sets the cookies and redirects you back to your originally requested page. If for any reason you could not log in or the Lambda decides not to let you view the content, it redirects you to the access denied page in the public folder.

And that's it! There are several moving parts, but in this one example we accomplished quite a lot. All of this was done without hosting a traditional server. Therefore, this website is quite scalable and very responsive since it takes advantage of Cloudfront. There are no servers to maintain and no autoscaling policies to tweak.
