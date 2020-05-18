---
layout:      posts
background:  shortBackground
title:       "Dynamic Entitlements"
subtitle:    "using Neo4j"
date:        2016-10-10 10:05:00
author:      "John O'Malley"
headerImg:  "/assets/images/blog/nodes.png"
description: "Enabling dynamic entitlements using neo4j"
---

Around a year ago my team was given the task of creating a cloud infrastructure in AWS for a new generation of custom application development for a Fortune 500 company. One necessary piece of the puzzle would be a new entitlement system; our legacy systems were clearly obsolete and inadequate.  We decided to model our entitlement system using [Neo4j](https://neo4j.com/), a popular graph database.

### The Legacy Environment

Our legacy services relied on a combination of an aging home-grown entitlement system and [Active Directory](https://en.wikipedia.org/wiki/Active_Directory) groups, with an abstraction layer on top which represented an attempt to unify and simplify the two disparate designs. All entitlements existed in a single global namespace; so one would have a global role list with values like `FOO_BAR_EDITOR` and `SOME_APP_USER`.

Granting access was a frustrating process.  In the case of AD groups the process required creating a ticket in a generic workflow management tool and then waiting for an approval. The process relied on two rounds of email and could take a week or more in the worst case.  The older, home-grown system was actually a bit more convenient to use but still required manual intervention.

What was perhaps the most frustrating for teams was the lack of automation.  Generally, if you joined an organization a baseline of entitlements was implied; if, for example you joined the 'Foo Bar' organization it was expected that your request for the `FOO_BAR_USER` entitlement would of course be approved. But someone would still have to respond to the approval email.

To address this last point, the concept of *dynamic entitlements* was proposed; i.e. entitlements implied by metadata rather than explicitly associated with a user or group.

### Why Neo4j?

As a model centered on entities and relationships emerged, two choices for the data layer become evident: a traditional relational DB (using RDS) or a graph DB (which we would have to host ourselves on EC2). While RDS has obvious advantages, Neo4j ultimately won out for a number of reasons:

+ Traditional relational databases can model arbitrary depth hierarchical relationships, but generally require a complex query syntax. With Neo4j such relationships were straightforward.
+ Neo4j and Cypher offer an elegant and succinct way to create, query, and visualize relationships.
+ Often, the same relationship (semantically speaking) can exist between two pairs of nodes whose logical schemas may not match. For instance, in the example model below the `:GRANTED_TO` relationship is defined as a relationship between an entitlement and a user OR and entitlement and an organization.   Modeling such a concept in a relational database would be unnecessarily complex.
+ Neo4j doesn't require that you produce a strict schema while still allowing integrity constraints and indices.

### Installing and Running Neo4j

If you're the type of person that learns best by doing, I recommend you install Neo4j and follow along with the example below. Even if you're entirely unfamiliar with graph databases you'll find that the barrier to entry is small -- it has a nice web interface that makes interacting with the DB easy.  You can download Community Edition [directly from Neo4j](https://neo4j.com/download/) or if you're like me you might prefer [docker](https://www.docker.com/products/docker) and the official [Neo4j image](https://hub.docker.com/_/neo4j/). Once you're up and running open [http://localhost:7474](http://localhost:7474), log in, set your admin password, and you're ready to start building your model:

{: .blog-center}
![Neo4j welcome](/assets/images/blog/2016-10-10-entitlements/neo4j-welcome.png)

### Building the model

Graph databases aim to express relationships in an easier, less restrictive way than relational databases. To illustrate that, let's run some Cypher statements to populate our database.  Note the intuitive syntax for inserting a relationship; there's no need to worry about the implementation details that are required to express relationships in SQL (foreign keys, joins, many-to-many resolvers, etc.).

[Cypher](https://neo4j.com/developer/cypher-query-language/) is the elegant and intuitive query language for Neo4j. If you're familiar with SQL and JavaScript/JSON you won't have much trouble picking it up. We start off by creating a few users, Alice and Bob [(of course)](https://en.wikipedia.org/wiki/Alice_and_Bob).

```
create (:User {id: 'alice', name: 'Alice'})

create (:User {id: 'bob', name: 'Bob'})
```

Run these statements one at a time in the Neo4j console and take note of the results. Neo4j tells you exactly what was created:

{: .blog-center}
![Neo4j welcome](/assets/images/blog/2016-10-10-entitlements/neo4j-feedback.png)

Next let's create a slice of an organizational hierarchy.  In our example the *IT* organization contains an
*Application Development* organization that in turn contains a *Web Application Development* organization:

```
create (:Org {id: 'IT', name: 'Information Technology'})

create (:Org {id: 'APP', name: 'Application Development'})

create (:Org {id: 'WEB', name: 'Web Application Development'})
```

At this point we have three unconnected nodes.  To express the hierarchy needed we'll need a few relationships:

```
match (o1:Org {id: 'IT'}) match (o2:Org {id: 'APP'}) create unique (o1)-[:CONTAINS]->(o2)

match (o1:Org {id: 'APP'}) match (o2:Org {id: 'WEB'}) create unique (o1)-[:CONTAINS]->(o2)
```

Cypher's syntax for creating relationships makes our query succinct and readable, and there's no need to build any kind of schema ahead of time.

The use of `create unique` is important here - it's possible to have multiple relationships with the same label between two nodes but we don't want that for this use case. If you went through this example and omitted the `unique` keyword it would in fact work exactly the same provided that you started out with an empty Neo4j instance, but using `create unique` gives you some added safety - if you accidentally run a create statement twice you won't end up with a duplicate relationship.

Continuing on, let's make Alice a member of the *Web Application Development* organization and Bob a member of the root *IT* organization:

```
match (u:User {id: 'alice'}) match (o:Org {id: 'WEB'}) create unique (u)-[:BELONGS_TO]->(o)

match (u:User {id: 'bob'}) match (o:Org {id: 'IT'}) create unique (u)-[:BELONGS_TO]->(o)
```

### Constraints

You may be assuming that Neo4j will enforce the uniqueness of the *id* field of each node, but that's not necessarily so.  An integrity constraint is needed to enforce uniqueness. We're going to end up needing four such constraints so we might as well add them now:

```
create constraint on (u:User) assert u.id is unique

create constraint on (o:Org) assert o.id is unique

create constraint on (a:App) assert a.id is unique  

create constraint on (e:Entitlement) assert e.id is unique
```  

### Apps and Entitlements

Now suppose we want to define two entitlements related to our company home page - one allows basic read access while another allows write access (a contrived scenario). To avoid using global entitlements like `MY_APP_READ_ONLY`, we need to have some way of namespacing our entitlements - in this case we use an 'app', and associate each entitlement with that namespace:

```
create (:App {id: 'HOME', name: "Home"})

create (:Entitlement {id: 'b7a564adc81e830fe95b', code: 'read', description: 'Basic read access to the home page'})

create (:Entitlement {id: '8593138bd5a27279bcd6', code: 'edit', description: 'Edit access on home page'})

match (e:Entitlement {id: 'b7a564adc81e830fe95b'}) match (a:App {id: 'HOME'}) create unique (a)-[:CONTAINS]->(e)

match (e:Entitlement {id: '8593138bd5a27279bcd6'}) match (a:App {id: 'HOME'}) create unique (a)-[:CONTAINS]->(e)
```  

We'll just use a generated ID for entitlements - no need to display that to the user. We don't expect the *code* attribute to uniquely identify our entitlement.

### Granting entitlements

Alice needs the ability to update our home page, so we'll grant her that in a straightforward manner:

```
match (u:User {id: 'alice'}) match (e:Entitlement {id: '8593138bd5a27279bcd6'}) create unique (e)-[:GRANTED_TO]->(u)
```

But our *read* entitlement should be automatically granted to anyone in IT. So instead of granting it to Alice and Bob (and everyone else) separately, we
simply grant it to the organization:

```
match (o:Org {id: 'IT'}) match (e:Entitlement {id: 'b7a564adc81e830fe95b'}) create unique (e)-[:GRANTED_TO]->(o)
```

### The model

The Neo4j web console provides a nice visualization for our simplified model:

{: .blog-center}
![Neo4j welcome](/assets/images/blog/2016-10-10-entitlements/model-visualization.png)

### Querying a user's entitlements

Alice doesn't belong to the IT organization directly... she belongs through one of its contained organizations. Intuitively the previous grant should apply to her. Luckily we can elegantly express this relationship in Cypher:

```
match (u:User)-[:BELONGS_TO]->(:Org)<-[:CONTAINS*0..]-(:Org)<-[:GRANTED_TO]-(e:Entitlement)
  return u, e
union
match(u:User)<-[:GRANTED_TO]-(e:Entitlement)
  return u, e
```

The first statement matches any entitlement granted to the user by virtue of his or her membership in an organization, including parent organizations of the user's actual associated organization - aka a *dynamic* entitlement. The second matches any entitlement granted directly, a *static* entitlement.  The `union` keyword ensures that any duplicates won't be included.

The expression `[:CONTAINS*0..]` implies that there may be zero or more relationships to traverse between organizations before we find the entitlement granted to an organization in the hierarchy. For Bob we don't traverse any parent organizations because he is a member of the *IT* organization directly. The same entitlement requires two traversals for Alice.

{: .blog-center}
![Neo4j welcome](/assets/images/blog/2016-10-10-entitlements/entitlement-query-result.png)

### Extensions

Given the base design described here for dynamic entitlements, some extensions naturally followed:

+ **Entitlements by geographic location or site** - a user's physical work location could imply an entitlement. As with organizations, the containment hierarchy or locations together with Neo4j's capabilities made that easy -- imagine the ability to grant an entitlement to anyone in the US, or to a specific site in a specific city.
+ **Entitlements by employment status** - some entitlements might only apply to employees, while others might apply to employees and contractors but not external users.

### Wrapping up

For brevity's sake I've left out a lot of detail - such as how we kept the entitlement model in sync with AD and our legacy systems and how we used a basic workflow system and web UI to speed adoption. Also the actual model was far more complex than I've illustrated here.

Thanks for reading --- I hope you've found this material useful. Let us know what you think via [twitter](https://twitter.com/ocelot_llc) or comment below.
