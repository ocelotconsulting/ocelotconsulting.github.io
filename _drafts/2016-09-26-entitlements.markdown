---
layout:     post
title:      "Creating a modern Entitlement System"
subtitle:   "The story of how "
date:       2016-09-26 15:05:00
author:     "John O'Malley"
header-img: "img/blog/launch.jpg"
---

# Creating a modern Entitlement System

About a year ago, the co-founders of Ocelot Consulting were employed by a Fortune 500 company and assigned the daunting task of creating a cloud infrastructure in AWS for a new generation of custom business app development.  Migrating legacy systems as-is was not a practical option; clearly many capabilities needed to be re-imagined and re-engineered.

Overcoming the challenges of the next 6-12 months required a lot of aggressive change to the existing process - enough for half a dozen posts at least - but today I'll focus on the entitlement system.
  
Legacy services, all designed for J2EE and deployed as EAR files, relied on a combination of AD groups and entitlements defined in a home-grown system that was more than a decade old.  Requesting entitlements was a slow, manual process.  First - create a ticket through an online system or by calling the helpdesk.  Then an email would be sent off to the owner of the group (sometimes after a day or two).  Approval could take a few days or more, depending on whether the owner was available.   

On top of that there was more complexity... a layer of abstraction was added to unify the two concepts of AD groups and legacy entitlements.  And entitlements were more or less defined by name in a big global namespace.

### Requirements

None of the infrastructure that supported legacy entitlements would be able to run outside of our firewall... but we'd never be able to develop new workflows in AWS or migrate existing ones if we didn't have an entitlement system.  So we had the perfect excuse to tackle the task of replacing our aging entitlement system; it simply had to be done to succeed.

Quickly the requirements emerged:
 
+ Improve the namespacing and self-service. 



We'd had to deal with the  

Our legacy systems were J2EE apps deployed as EAR files to WebLogic clusters by a separate release team.  Although we had moved away from the old schedule of three releases per year, the deployment process still required awkward coordination between multiple teams.  Applications would be deployed off hours, with an outage, and with the dev team on call in case anything went wrong.
  
+ Deploy to AWS
+ Deploy as often as needed using blue-green deployments.  Let the development teams perform and troubleshoot deployments.
+ Enable modern web development using Node.js and NPM.  Obviously this goal in itself didn't have much to do with AWS or cloud computing, but it was a direction that needed to be taken.  Our old deployment environments were constructed with the assumption that everyone should develop using J2EE; we recognized that we needed to be more flexible if we were going to modernize.
+ Support legacy applications still running internally - to the extent that we had to seamlessly support all legacy APIs.  This was arguably the biggest challenge. 

The next six months or so were a flurry of activity and innovation, and we could probably generate a dozen blog posts on what we learned, but for this post we'll focus on the entitlement system.






The effort had some urgency behind it; previous efforts had stalled and management was impatient. The months to follow necessitated aggressive action to prove that we could radically change te
 


About a year ago, the urgency became clear.  Management was getting impatient, and we needed to transition from our legacy environment in our data center (J2EE on WebLogic, Oracle) to AWS.  Many of our services supported legacy applications running internally, so we would need to run in AWS while maintaining backward compatibility.  On top of that, we had an awkward legacy entitlement system to deal with - a combination of Active Directory and a homegrown system with an additional layer added as a band aid at a later date.

Like many large companies, we had seen the future of cloud computing and realized that we needed to get on board sooner rather than later.  But the costs seemed enormous, and no clear transition path was evident.  We had a diverse, complex suite of internal applications that needed to be supported indefinitely while the transition took place.

Our first decision was relatively easy - break up our monolithic services.  In our pre-dev-ops organization it was imperative that those who deployed and monitored the applications have a relatively simple model of what would be deployed and how to deploy it.  So we generally deployed our services and UIs as EAR files - bundles of web applications deployed to a single cluster all at once.

A single suite of services was broken up into five microservices each of which was re-engineered and optimized.  For three of these, it made sense to use JSON databases rather than relational (in fact, we had already resorted to embedding JSON in Oracle when not other so).
A fourth was re-engineered in RDS with PostgreSQL.

Finally, came the most daunting task - the entitlement system.  We would have to replace not only our existing service layer on top of the entitlement system, but also the capabilities that Active Directory and the legacy role system had provided.  We also would have to propagate AD and legacy role changes to our new system for a reasonable transition period.

While backward compatibility and legacy support was important, it would have been a great mistake to overlook the great opportunity we were given to reimagine our company's entitlement system.  Granting entitlements was a tedious process involving a centralized helpdesk, an email based approval process that could take days, and a big global namespace of entitlements.

Further, some entitlements could be inferred from your organization, or physical location.  Imagine a new member joins your team and on day one he or she is granted every necessary entitlement with no effort required, and these entitlements are automatically revoked when he or she transfers to a new team.

From these concerns emerged a design for our new entitlement system:

+ Entitlements are namespaced by application.
+ Entitlements are defined by user groups - membership in an associated user group grants the entitlement.
+ Legacy entitlements (previously AD groups and legacy roles) are associated with the "global" application.  A combination of events and batch processes keep legacy entitlements in sync so that existing business processes work seamlessly.
+ User groups have static members, who are manually approved, and dynamic members, implied by employment status (e.g. employee vs. contractor), geographic location, and/or organization membership.

For geographic location and organization, containment is of course important.  My geographic location might be, say, an office in North Carolina but any entitlement which applies to North America should apply to me as well.

A graph database seemed an elegant fit to model these relationships - we chose neo4j because we knew a few teams that had done some innovative work with it.  We ran neo4j on a EC2 Ubuntu instance but initially we had no high availability (HA) license and had to come up with a homegrown backup solution.  Ultimately we chose an r3.xlarge EC2 instance to accommodate a large neo4j cache for optimal performance and upgraded to HA.

Supporting legacy workflows was perhaps more technically challenging than expected; while the legacy homegrown role system was relatively simple to enhance to add events for the new entitlement system, the AD group integration was more painful.  For several weeks we relied upon nightly full loads as well as the ability to do a manual reload of a particular user on demand.  Eventually change events flowed into the new system in real time as designed.

We wouldn't have been successful, however, without the UI.  We were particularly proud of a few features:

+ Discoverability by mega-menu:  All workflows are organized into an overall menu system visible on the home page.  In the entitlement UI, you can view all possible workflows and request access to the workflows you are unable to access.
+ Discoverability by search:  All applications, groups, and entitlements are indexed for fast searching using AWS ElasticSearch.
+ Self Service: When manual approval is needed, you can request an entitlement directly from the UI.  The approval process involves a notification that shows up on the navigation bar of any workflow, and can be forwarded as an email or a Slack message.
+ Auditing: Group owners approve or reject entitlement requests, and all requests are properly audited per IS requirements.

All services and UIs would need to live in AWS properly secured in a consistent manner, sharing the same domains (one for production, another for non-prod).  We needed something to perform the OAuth password flow while integrating seamlessly with our new entitlement system.  An nginx plugin seemed like a good choice, but ultimately the flexibility offered by node-http-proxy together with its excellent performance won out.  (put a link to the project here?)

Because there was a vacuum in the ops space in AWS, we took the opportunity to aggressively enable dev ops.  Route mapping, Oauth Client creation and management, and deployments were entirely initiated by development team with proper approval for production deployments.

Legacy applications were secured with a basic Apache plugin.  While this approach was deprecated, it was not feasible to migrate dozens of applications to OAuth and Ping in the time provided.  So we needed a bridge to accept the credentials provided by Apache and with a trusted client ID delegate to the new secured APIs in AWS.  This proxy/bridge was deployed internally to replace the entire EAR service deployment with a compatible API that delegated to AWS services.

The rollout began in January '16 and continued for the next six months without any major issues.  The platform we created for AWS this year is now used by at least eight different internal development teams.  The positive response we received was gratifying; self-service and dynamic entitlements were received with enthusiasm by the business.  Developers are thrilled with the new dev ops centered process.

A year later, we're excited about replicating our successes elsewhere.  It's a great time to be a cloud engineer.