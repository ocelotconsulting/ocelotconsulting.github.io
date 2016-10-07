---
layout:     post
title:      "Using Neo4j for Entitlements"
subtitle:   "Entitlements modeled using a graph DB"
date:       2016-10-07 18:05:00
author:     "John O'Malley"
header-img: "img/blog/fence.jpg"
---

## Using Graph DB Technology for Entitlements

About a year ago, the co-founders of Ocelot Consulting were employed by a Fortune 500 company and assigned the daunting task of creating a cloud infrastructure in AWS for a new generation of custom business app development.  Migrating legacy systems as-is was not a practical option; clearly many capabilities needed to be re-imagined and re-engineered.

Overcoming the challenges of the next 6-12 months required a lot of aggressive change to the existing process - enough for half a dozen posts at least - but today I'll focus on the entitlement system.

### The legacy environment

Our legacy services were deployed to J2EE containers as EAR files.  They relied on a combination of an aging home-grown entitlement system and AD groups, with an abstraction layer on top which represented an attempt to unify and simplify the two disparate designs.  All entitlements existed in a single global namespace; so one would have a global role list with values like `FOO_BAR_EDITOR` and `SOME_APP_USER`.
 
Granting access was a frustrating process.  In the case of AD groups the process required creating a ticket in a generic workflow management tool and then waiting for an approval.  The process relied on two rounds of email and could take a week or more in the worst case.  The older, home-grown system was actually a bit more convenient to use but still required manual intervention.

What was perhaps the most frustrating for teams was the lack of automation.  Generally, if you joined an organization a baseline of entitlements was implied; if, for example you joined the 'Foo Bar' organization it was expected that your request for the `FOO_BAR_USER` entitlement would of course be approved.  But someone would still have to respond the the approval email.
  
### The solution
 
Our solution featured the popular graph database [neo4j](https://neo4j.com/).  I'd like to illustrate why we chose neo4j with an (optionally) hands-on example.  To work through this example, first install Neo4j Community Edition - [this](https://hub.docker.com/_/neo4j/) image can be used with [docker](https://docs.docker.com/engine/installation/mac/) or you can download and install neo4j manually.  Once you're up and running open a browser to [http://localhost:7474](http://localhost:7474), log in, set your admin password, and you're ready to start building your graph database:

---

{: .blog-center}
![Neo4j welcome](/img/blog/2016-10-10-entitlements/neo4j-welcome.png){:width="100%"}

---

### Building our model

Graph databases aim to express relationships in an easier, less restrictive way than relational databases.  To illustrate that, let's run some Cypher statements to populate our database.  Note the intuitive syntax for inserting a relationship... there's no need to worry about the implementation details that are required to express relationships in SQL (foreign keys, joins, many-to-many resolvers, etc.).
 
First we'll create a few users using the [cypher](https://neo4j.com/developer/cypher-query-language/) query language - Alice and Bob (of course).

```
create (:User {id: 'alice', name: 'Alice'})
create (:User {id: 'bob', name: 'Bob'})
```

Run these statements one at a time in the neo4j console and take note of the results.  Neo4j tells you exactly what was created: 

---

{: .blog-center}
![Neo4j welcome](/img/blog/2016-10-10-entitlements/neo4j-feedback.png){:width="100%"}

---

Next let's create a slice of an organizational hierarchy.  In our example the IT org contains an application development organization that contains a web application development organization.
  
```
create (:Org {id: 'IT', name: 'Information Technology'})
create (:Org {id: 'APP', name: 'Application Development'})
create (:Org {id: 'WEB', name: 'Web Application Development'})
```

At this point we have three unconnected nodes.  To express the hierarchy needed we'll need a few relationships:
  
```
match (o1:Org {id: 'IT'}) match (o2:Org {id: 'APP'}) create (o1)-[:CONTAINS]->(o2)
match (o1:Org {id: 'APP'}) match (o2:Org {id: 'WEB'}) create (o1)-[:CONTAINS]->(o2)
```

Cypher's syntax for creating relationships makes our `create` query succinct and readable, and there's no need to build any kind of schema ahead of time - although neo4j does support SQL-like constraints. 

Continuing on, let's make Alice a member of the Web Application Development organization and Bob a member of the root organization:
  
```
match (u:User {id: 'alice'}) match (o:Org {id: 'WEB'}) create (u)-[:BELONGS_TO]->(o)
match (u:User {id: 'bob'}) match (o:Org {id: 'IT'}) create (u)-[:BELONGS_TO]->(o)
```  

Now suppose we want to define two entitlements related to our company home page - one allows basic read access while another allows write access (a contrived scenario).  To avoid using global entitlements like `MY_APP_READ_ONLY`, we need to have some way of namespacing our entitlements - in this case we use an 'app', and associate each entitlement with that namespace:
     
```
create (:App {id: 'HOME', name: "Home"})
create (:Entitlement {id: 'b7a564adc81e830fe95b', code: 'read', description: 'Basic read access to the home page'})
create (:Entitlement {id: '8593138bd5a27279bcd6', code: 'edit', description: 'Edit access on home page'})
match (e:Entitlement {id: 'b7a564adc81e830fe95b'}) match (a:App {id: 'HOME'}) create (a)-[:CONTAINS]->(e)
match (e:Entitlement {id: '8593138bd5a27279bcd6'}) match (a:App {id: 'HOME'}) create (a)-[:CONTAINS]->(e)
```  

We'll just use a generated ID for entitlements - no need to display that to the user.  We don't expect the 'code' attribute to uniquely identify our entitlement.

### Granting entitlements

Alice needs the ability to update our home page, so we'll grant her that in a straightforward manner:

```
match (u:User {id: 'alice'}) match (e:Entitlement {id: '8593138bd5a27279bcd6'}) create (e)-[:GRANTED_TO]->(u)
```

But our read entitlement should be automatically granted to anyone in IT.  So instead of granting it to Alice and Bob (and everyone else) separately, we
simply grant it to the organization:

```
match (o:Org {id: 'IT'}) match (e:Entitlement {id: 'b7a564adc81e830fe95b'}) create (e)-[:GRANTED_TO]->(o)
```

### Visualization

The Neo4j web console provides a nice visualization for our model:

---

{: .blog-center}
![Neo4j welcome](/img/blog/2016-10-10-entitlements/model-visualization.png){:width="100%"}

---


### Querying a user's entitlements

Alice doesn't belong to the IT organization directly... she belongs through one of its contained organizations.  Intuitively the previous grant should apply to her.  Luckily we can elegantly express this relationship in Cypher:
 
``` cyper
match (u:User)-[:BELONGS_TO]->(:Org)<-[:CONTAINS*0..]-(:Org)<-[:GRANTED_TO]-(e:Entitlement)
  return u, e 
union 
match(u:User)<-[:GRANTED_TO]-(e:Entitlement)
  return u, e
```

The first statement matches any entitlement granted to the user by virtue of his or her membership in an organization, including parent organizations of the user's actual associated organization.  The second matches any entitlement granted directly.  The union keyword ensures that any duplicates won't be included.

Note the expression `[:CONTAINS*0..]` - this implies that there may be zero or more relationships to traverse between organizations before we find the entitlement granted to an organization in the hierarchy.

The query produces the expected results:

---

{: .blog-center}
![Neo4j welcome](/img/blog/2016-10-10-entitlements/entitlement-query-result.png){:width="100%"}

---

### Extensions
   
Given the base design described here (in a simplified manner) for dynamic entitlements, it wasn't too hard to implement extensions:

+ **Entitlements by geographic location or site** - a user's physical work location could imply an entitlement.  As with organizations, the containment hierarchy or locations together with neo4j's capabilities made that easy - imagine the ability to grant an entitlement to anyone in the US, or to a specific site in a specific city.
+ **Entitlements by employment status** - some entitlements might only apply to employees, while others might apply to employees and contractors but not external users. 

### Why use a graph DB?

+ Traditional relational databases can model arbitrary depth hierarchical relationships, but generally require a complex query syntax and lots of DDL.  With neo4j relationships are first class citizens... not a consequence of your schema design.
+ Neo4j and cypher offer an elegant and succinct way to create, query, and visualize relationships.
+ Often, the same relationship (semantically speaking) can exist between two pairs of nodes whose schemas may not match.  In our example, the `:GRANTED_TO` relationship is defined as a relationship between an entitlement and a user OR and entitlement and an organization.   Modeling such a concept in a relational database is unnecessarily complex.
+ Neo4j doesn't require that you produce a strict schema while still allowing integrity constraints and indices.

### Legacy entitlements
 
As previously mentioned, legacy entitlements were not namespaced -- they were essentially the equivalent of global variables.  It's hard to sell a new system if you cannot retire the old one and ensure backward compatibility.  Legacy entitlements were duly modeled as apps conventially named after the assigned legacy environment (e.g. dev/test/production).  An unexpected side benefit of this approach was that we were able to deploy the new system to only two environments by default - whereas the old system required four full-fledged environments.
  
### Wrapping up

Software engineers continuously struggle with the pain of accommodating legacy systems, and sometimes the cost of modernizing seems prohibitively large.  But sometimes the right tool makes the difference.  Luckily we as engineers increasingly have more feasible options available to us ... such as neo4j.  Thanks for reading and please follow us on twitter and let us know what you think: [@ocelot_llc](https://twitter.com/ocelot_llc)
