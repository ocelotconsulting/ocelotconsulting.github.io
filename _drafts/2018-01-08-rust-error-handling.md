---
layout:     post
title:      "Rust Error Handling"
date:       2018-01-06 09:45:00
author:     "John O'Malley"
header-img: "img/blog/code.jpg"
description: "error handling in the Rust programming language"
---

Software engineering is a constant learning experience, but sometimes we get stuck in a rut solving the same sort of 
problem with the same techniques.  New programming languages often arise from the perceived inelegance or unreliability
of existing programming languages to solve particular problems.  For a contemporary example consider the new Rust 
programming language. 

I've been wanting to learn a new language for a few years now, and one that I've had my eye on is 
[Rust](http://rust-lang.org).  Rust is primarily a systems language although its designers claim it's fine for general 
purpose use.  My background is primarily in applications and web development - Scala, Java, and lately mostly client and
server-side JavaScript, but with Rust being a popular language for the "next big thing" - 
[WebAssembly](http://webassembly.org/) - it seemed like a great choice. 

Rust's killer feature is memory safety without garbage collection via a complex system of accounting built into the 
language.  It's a steep, but fun, learning curve for the unfamiliar, but today I'm going to focus on error handling.

Rust (and Go) are outliers among modern languages because they don't rely on exceptions for error handling.

## What's wrong with exceptions?

Exceptions have been around since well before C++ introduced them, and most languages introduced in the last 25 years 
use exceptions as the primary error reporting/handling mechanism.  Whereas a language like C required you to check 
every intermediate result of a compound I/O operation exceptions allow you to write the happy path and let all potential
errors flow to a single error handler.

You could make the argument that this approach is inappropriate in certain context (maybe OS kernel code or device 
drivers), but for application code it's often the best way.  Consider this contrived example of an 
[express](https://expressjs.com/) endpoint:

``` javascript
const getItemEndpoint = async (req, res) => {
  try {   
    const {id} = req.params
    const item = await getItemFromDb(id)
    if (!item) {
      res.status(404).send(`item ${id} not found`)
    } else {
      item.history = await getHistory(id)
      item.users = await getUsers(id)
      res.json(item}
    }
  } catch (e) {
    log.error(e)
    res.status(500).send('unexpected error')
  }  
}
 
```

Assuming that `getItemFromDb`, `getHistory`, and `getUsers` do I/O, then we have multiple ways to have unexpected failures.
Assuming we're logging a decent stack trace, it really doesn't add anything to handle each of the three potential 
failures individually.  This is in contrast to the potential error we anticipated - that the item could not originally 
be found.  We correctly handle that by responding with 404.

The problem comes with the truly fatal errors like memory leaks and such.  Then even an application web server should 
probably terminate.

Java tried to solve this and failed miserably.  I could go on at length about why Java exceptions don't work well in 
practice, but really all you need to know is that someone, somewhere is right now reading through hundreds of lines of 
stack traces trying to distinguish the real exception from all the useless wrappers.       

## Error handling in Go

[Go](http://golang.org) and Rust largely take the same approach to error handling.  Go functions can return multiple 
values, and it's conventional for one of those to be an error if an error is possible.  So you'll see a lot of this 
sort of thing:

``` go
response, err := GetData()
if err != nil {
    return err
}
```

You can even get a [special keyboard](http://i.imgur.com/EVc3Nm0.png) to make it easier ;).  

If anything turned me off Go, it was the repetitive error handling and the fact that they made the decision to 
perpetuate the [billion dollar mistake](https://en.wikipedia.org/wiki/Tony_Hoare). I realize a lot of great code is 
being written in Go - I love Docker as much as anyone - but it's not my first choice. 

## Rust error handling

Rust doesn't have nulls (or nils, or undefined), so any function that could possibly return an error returns a result
enum instead:

``` rust
enum Result<T, E> {
   Ok(T),
   Err(E),
}
```

Note - enums in Rust are not like enums in, say, Java.  They are more like algebraic data types in functional languages
such as F# or Scala.  

The Result type is similar to the `Option` type that Rust also adopts.  If you're familiar with other functional 
languages the option type should be familiar:

``` rust
enum Option<T> {
    None,
    Some(T),
}
```

Many, many functions and methods in the standard library return `Result<...>` or `Option<...>` types.  It's clear that 
the APIs were carefully designed to be compatible with every known platform and locale.  Using the standard library can
be frustratingly verbose and unintuitive to the newbie.  Fortunately, Rust adds some nice sugar to make the experience
more palatable.

But what about fatal errors like memory leaks and stack overflows?  Rust (and Go) provide another facility for that that
is superficially similar to exceptions but intended only for unexpected, often fatal, errors - *panic*:

``` rust
// contrived example
if remaining_memory() < 0 {
  panic!("unexpected error - out of memory")
}
```

## Example - project directories

I wrote a [simple utility](https://github.com/ocelotconsulting/prjs) to scan *$HOME/projects* for project directories 
and output the most recently edited projects, with timestamps.  I defined a project directory as one with a *.git* 
directory within. 

For a simple example, suppose we want a `is_git_dir` function that determines whether a given 
[DirEntry](https://doc.rust-lang.org/stable/std/fs/struct.DirEntry.html) corresponds to a directory named *.git*.  
Sounds trivial, right?  Let's do it the verbose way - step by step:

``` rust
use std::fs::DirEntry;
use std::fs::Metadata;
use std::io::Error;
use std::ffi::OsString;

// clumsy, verbose version - we can do better
fn is_git_dir_verbose(entry: &DirEntry) -> Result<bool, Error> {
    let file_name_osstring: OsString = entry.file_name();
    let file_name_option: Option<&str> = file_name_osstring.to_str();
    // file name is an OsString which may not be convertible to a Rust string
    // so check for None
    if file_name_option.is_none() {
        return Ok(false);
    }
    // this won't blow up because we checked for None
    if file_name_option.unwrap() != ".git" {
        return Ok(false);
    }
    // get metadata for the dir entry - can fail
    let metadata_result: Result<Metadata> = entry.metadata();
    if metadata_result.is_err() {
        return Err(metadata_result.unwrap_err());
    }
    return Ok(metadata_result.unwrap().is_dir());
}
```

First we have to convert the file name to an `Option<&str>` (for the purposes of this example you can consider `&str` 
equivalent to `String`).  Why an Option? See [here](https://doc.rust-lang.org/stable/std/ffi/struct.OsString.html).

If we can't convert the file name to a string we just assume it's not `".git"` and return `Ok(false)`.  We also return 
`Ok(false)` after unwrapping the value (which must be safe because we checked first) and determining that the file
name does not match the string `".git"`.

The `unwrap` method of 'Result' and 'Option' returns the Some/Ok value if it exists or panics otherwise (more about 
panics below).

Next we get the [Metadata](https://doc.rust-lang.org/stable/std/fs/struct.Metadata.html) for the directory entry which
returns a `Result`, presumably because we may need to perform some I/O to get that data.  We check for an error 
(and return an `Err(...)` if we find one), then finally check the `is_dir` method to determine our final result.

This looks a bit like our Go code we saw earlier - can we do better?  Luckily Rust provides some sugar to reduce the 
noise:  

``` rust
use std::fs::DirEntry;
use std::io::Result;

// nice and concise - not to mention readable
fn is_git_dir(entry: &DirEntry) -> Result<bool> {
    Ok(entry.file_name().to_str() == Some(".git") && entry.metadata()?.is_dir())
}
```

Now we've got it down to a one-liner:

+ First, we imported [std::io::Result](https://doc.rust-lang.org/stable/std/io/type.Result.html), a type definition 
that reduces verbosity when dealing with multiple I/O errors.
+ We can simplify the file name comparison by simply matching against `Some(".git")`.
+ You can leave off the `return` keyword if the last statement in the method does not end in a semicolon.
+ Most importantly the question mark operator means that you rarely have to check for errors.

The question mark operator is simple and elegant.  If the result is `Err`, it returns that error immediately.  If 
'Ok', the result is unwrapped.  Given that Rust is ultra-conservative about returning `Result` when there is any 
possibility of an error the question mark operator really comes into its own when you have multiple potential errors 
that could occur in a function body.  For example, here's the function that invokes `is_git_dir`:

``` rust
use std::fs::read_dir;
use std::fs::DirEntry;
use std::io::Result;

fn is_project_dir(entry: &DirEntry) -> Result<bool> {
    for path_string in entry.path().to_str() {
        for child_entry in read_dir(path_string)? {
            if is_git_dir(&child_entry?)? {
                return Ok(true);
            }
        }
    }
    Ok(false)
}

```

## Conclusion

Coming from a JavaScript/Scala/Java background I'm used to the exception paradigm of handling errors.  Learning Rust
has made me rethink the utility of exceptions.  While I'm not sure I'm convinced that error values are superior to 
exceptions in all situations, I think I understand why Rust was designed that way.

If you're interested in Rust, I recommend the [second edition](https://doc.rust-lang.org/book/second-edition/) of the 
free rust online book (in draft at the time of this writing).  It's going to take some time and patience but if you're
like me it will open you up to some new ideas.

Thanks for reading.
