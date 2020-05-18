---
layout:      posts
background:  shortBackground
title:       "Rebooting Error Handling"
subtitle:    "Using the Rust programming language"
date:        2018-01-08 10:00:00
author:      "John O'Malley"
headerImg:  "/assets/images/blog/code.jpg"
description: "Error handling in the Rust programming language"
---

Software engineering is a constant learning experience, but sometimes we get stuck in a rut solving the same sort of problem with the same techniques.  New programming languages often arise from the perceived inelegance or unreliability of existing programming languages to solve particular problems.  For a contemporary example, consider the new Rust programming language. 

I've been wanting to learn a new language for a few years now, and [Rust](http://rust-lang.org) has been near the top of my list.  Rust is primarily a systems language although its designers claim it's fine for general purpose use. My recent background is primarily in applications and web development - Scala, Java, and lately mostly client and server-side JavaScript, but since Rust is a popular language for developing [WebAssembly](http://webassembly.org/)
there's some overlap. 

Rust's killer feature is memory safety without garbage collection via a complex system of accounting built into the language. It's a new concept that's been a fun challenge to learn, and potentially the subject of a future blog post. Today, though, I'm going to focus on error handling. Rust (and Go) are outliers among modern languages because they don't rely on exceptions for error handling.

## What's wrong with exceptions?

Exceptions have been around since well before C++ introduced them, and most languages introduced in the last 25 years use exceptions as the primary error reporting/handling mechanism.  Whereas a language like C requires you to check every intermediate result of a compound I/O operation, exceptions allow you to write the happy path and let all potential errors flow to a single error handler.

You could make the argument that this approach is inappropriate in certain context (e.g. OS kernel code or device drivers), but for application code it's often the best way.  Consider this contrived example of an 
[express](https://expressjs.com/) endpoint:

```js
const getItemEndpoint = async (req, res) => {
  try {   
    const {id} = req.params
    const item = await getItemFromDb(id)
    if (!item) {
      // not found - respond  
      res.status(404).send(`item ${id} not found`)
    } else {
      // do some more I/O to get detail info for the item  
      item.history = await getHistory(id)
      item.users = await getUsers(id)
      // respond with 200 + JSON
      res.json(item)
    }
  } catch (e) {
    log.error(e)
    res.status(500).send('unexpected error')
  }  
}
```

In this case, we have an error that we can anticipate and handle gracefully (the 404 response), but we also have potential errors that we can't do anything about.  The `getItemFromDb`, `getHistory`, and `getUsers` functions perform I/O, and any could fail do to environmental or dependency issues.  Assuming we're logging the stack trace to provide context, it really doesn't add anything to handle each of the three potential exceptions individually.

The problem comes with the truly fatal errors like memory leaks and such.  Then even an application web server should probably terminate.  Exceptions don't do a great job of distinguishing between the two.  

Java tried to solve the problem, but I think it's fair to say that checked exceptions are a failed experiment with a number of unpleasant side effects to boot.  

## Errors in Go

[Go](http://golang.org) and Rust largely take the same approach to error handling.  Go functions can return multiple values, and it's conventional for one of those to be an error if there is a possibility of failure.  So you'll see a lot of this sort of thing:

```golang
response, err := GetData()
if err != nil {
    return err
}
```

You can even get a [special keyboard](http://i.imgur.com/EVc3Nm0.png) to make it easier ;).    

Go's error handling is the subject of considerable debate.  It's argued that the convention makes it's difficult to ignore errors, which may be true but sounds like the sort of thing people were saying about checked exceptions many years ago. The use of `nil` (`null` in Go-speak) is [another controversial design choice](https://www.lucidchart.com/techblog/2015/08/31/the-worst-mistake-of-computer-science/).

Rust takes a different approach.

## Errors in Rust

Rust doesn't have a null/nil/undefined value. Any function that could possibly return an error returns a result enum instead:

```rust
enum Result<T, E> {
   Ok(T),
   Err(E),
}
```

Rust also has an `Option` type.  If you're familiar with functional languages like Scala and F#, this will seem familiar. Enums in Rust are analogous to algebraic data types in functional languages - not, say, Java enums.

```rust
enum Option<T> {
    None,
    Some(T),
}
```

Functions and methods in the standard library typically return `Result<...>` or `Option<...>` types.  It's clear that the APIs were carefully designed to be compatible with every known platform and locale.  Using the standard library can be at times frustratingly verbose and unintuitive to the newbie.  As we'll see later, Rust adds some sugar to make the experience more palatable.

## Panics

What about fatal errors like memory leaks and stack overflows?  Rust and Go provide another capability that is superficially similar to exceptions but intended only for unexpected, often fatal, errors - *panic*:

```rust
// contrived example
if remaining_memory() < 0 {
  panic!("unexpected error - out of memory")
}
```

Panics unwind the stack similarly to exceptions, but they aren't intended to be caught and handled near the source.

## Example - project directories

For an example that uses `Result` and `Option` values, I wrote a [simple utility](https://github.com/ocelotconsulting/prjs) to scan *$HOME/projects* for project directories and output the most recently edited projects, with timestamps. I defined a project directory as one with a *.git* directory within.  The output looks something like:

```
$ prjs
2018-01-08 10:18:04 ocelotconsulting/prjs
2018-01-08 10:17:06 ocelotconsulting/ocelotconsulting.github.io
2018-01-07 18:00:02 some-other-folder/some-other-project
...
```

Let's say we write an `is_git_dir` function that determines whether a given 
[DirEntry](https://doc.rust-lang.org/stable/std/fs/struct.DirEntry.html) corresponds to a directory named *.git*.  Sounds trivial, right?  First let's look at an overly verbose implementation:

```rust
use std::fs::DirEntry;
use std::fs::Metadata;
use std::io::Error;
use std::ffi::OsString;

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

(Note that I've added type annotations to everything but they aren't required - like many modern statically typed languages Rust can infer types)

First we have to convert the file name to an `Option<&str>` (for the purposes of this example you can consider `&str` equivalent to `String`).  If you're wondering why this method returns an Option see [here](https://doc.rust-lang.org/stable/std/ffi/struct.OsString.html).

If we can't convert the file name to a string we just assume it's not `".git"` and return `Ok(false)`.  We also return `Ok(false)` after unwrapping the value (which must be safe because we checked first) and determining that the file name does not match the string `".git"`.

The `unwrap` method of 'Result'/'Option' returns the wrapped Some/Ok value if it exists or panics otherwise.

Next we get the [Metadata](https://doc.rust-lang.org/stable/std/fs/struct.Metadata.html) for the directory entry which returns a `Result`, presumably because we may need to perform some I/O to get that data. We check for an error (and return an `Err(...)` if we find one), then finally check the `is_dir` method to determine our final result.

This looks similar to Go's approach - we're checking every intermediate result. Luckily Rust allows us to reduce the noise:

```rust
use std::fs::DirEntry;
use std::io::Result;

// nice and concise - not to mention readable
fn is_git_dir(entry: &DirEntry) -> Result<bool> {
    Ok(entry.file_name().to_str() == Some(".git") && entry.metadata()?.is_dir())
}
```

Now we've got it down to a one-liner:

+ First, we imported [std::io::Result](https://doc.rust-lang.org/stable/std/io/type.Result.html), a type definition that reduces verbosity when dealing with multiple I/O errors.
+ We can simplify the file name comparison by simply matching against `Some(".git")`.
+ You can leave off the `return` keyword if the last statement in the method does not end in a semicolon.
+ Most importantly, we use the **?** operator to avoid checking each error.

The question mark operator is simple and elegant.  If the result is `Err`, it returns that error immediately. If 'Ok', the result is unwrapped.  Given that Rust is ultra-conservative about returning `Result` when there is any possibility of an error the question mark operator really comes into its own when you have multiple potential errors that could occur in a function body.  For example, here's the function that invokes `is_git_dir`:

```rust
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

The consequence of using the question mark operator is that we can only report errors at a higher level than the original error.  In this case, at least, I think it's clear that it's the right call.

## Conclusion

Coming from a JavaScript/Scala/Java background I'm used to the exception paradigm of handling errors.  Learning Rust has made me rethink the utility of exceptions.  While I'm not sure I'm convinced that error values are superior to exceptions in all situations, I think I understand why Rust was designed that way.

Check out the [second edition](https://doc.rust-lang.org/book/second-edition/) of the free Rust online book (in draft at the time of this writing) if you want to give Rust a try.  It's going to take some time and patience but if you're like me it will open you up to some new ideas.

Thanks for reading.
