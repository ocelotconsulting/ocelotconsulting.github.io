# Why is Java still popular?

I wrote a little C++ in the mid 90s, but it wasn't until late in that decade that I discovered the hot new language of Java.  Despite the fact that many of its selling points (e.g. applets, checked exceptions) quickly proved of little or no value, Java caught on and, at least in my world, rapidly became ubiquitous.

As I write this in 2016, my guess is that few developers would include Java in a list of innovative programming languages, but it's worth noting that in its ascendency, Java made some fairly bold statements about software development:

+ *Object-Oriented programming is the best paradigm* - all code should be OO.
+ *Simple is better than complex* - keep language features to a minimum.
+ *Explicit is better than implicit* - so don't be afraid of boilerplate since code is read more than it is written.
 
Since it's introduction, Java has evolved slowly.  It must have been immediately obvious that your typical application required a lot of boilerplate to do even the simplest tasks so gradually a few features were added to lessen the pain.  Inner classes and anonymous classes came relatively quickly in 1.1 but Java 5 generics, autoboxing, annotations, and "for each" loops took almost 10 years.  AOP evolved separately, but again the idea was to decrease boilerplate and duplication while preserving the single-paradigm nature of Java.
   
Other than perhaps C and C++, you'd be hard-pressed to name a language that is still in use that has undergone less innovation than Java in the past 20 years.  C# was released in 2001 and now dwarfs Java in features.  Lambda expressions, for example, were just recently introduced in Java 8 but have been in C# since 2007.  Even JavaScript has evolved faster - as have languages like Clojure, Groovy, and Scala that were specifically built for the JVM (and of course did not exist when Java came out).

It's tricky to measure the popularity of a programming language - depending on the metrics you select you can get wildly different results.  But Java seems to be consistently near or at the top:

+ [http://www.codingdojo.com/blog/9-most-in-demand-programming-languages-of-2016/](http://www.codingdojo.com/blog/9-most-in-demand-programming-languages-of-2016/)
+ [http://www.tiobe.com/tiobe-index/](http://www.tiobe.com/tiobe-index/)
+ [http://spectrum.ieee.org/computing/software/the-2016-top-programming-languages](http://spectrum.ieee.org/computing/software/the-2016-top-programming-languages)

So why has Java maintained its popularity for so long despite lagging in innovation?  I must admit the question interests me because it frustrates me.  I wrote Java almost exclusively for too many years, and now that I've branched into other languages Java frankly looks ridiculous to me.  Consider this pattern, as tedious as it is familiar:

``` java
public class MyClass {
    private final int arg;
    private int prop;

    public MyClass(int myArg) {
        this.arg = myArg;
    }

    public int getArg() {
        return arg;
    }

    public int getProp() {
        return prop;
    }

    public void setProp(int prop) {
        this.prop = prop;
    }
}
```

In a large enterprise codebase you'll find this pattern repeated continuously.  Here's basically the same code written in Scala:

``` scala
class MyClass(val arg: Int) {
  var prop: Int = 0
}
```

It can be truly breathtaking how much boilerplate is needed, especially in your data model objects.  Your typically Spring/Hibernate CRUD app has hundreds if not thousands of lines of dull boilerplate.  Finding the relevant section of code for the issue at hand can be a tedious task.

Arguably worse is the single paradigm approach.  