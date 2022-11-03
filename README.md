# Website Redesign

## Development Setup

1. Install [Ruby][ruby].

    ```bash
    brew install ruby@2
    ```
_Note: this version of Jekyll doesn't run on Ruby 3+, and you need to use 2.x_

2. Ruby installations are not symlinked to `/usr/local` because macOS already provides a (much older) ruby installation. You have to update your `$PATH` to put the Homebrew Ruby installation ahead of the default macOS installation.

    ```bash
    export PATH="/usr/local/opt/ruby/bin:$PATH"
    ```

3. Install the dependencies. The [`github-pages`][ghp] gem is a wrapper around all of the [gems made available to GitHub Pages][ghp-gems].

    ```bash
    bundle install
    ```

4. Build the site and watch for changes. Using `bundle exec <cmd>` here ensures that you're using the `jekyll` version specified by `github-pages`.

    ```bash
    bundle exec jekyll serve
    ```

[ruby]: https://www.ruby-lang.org/en/
[ghp]: https://rubygems.org/gems/github-pages
[ghp-gems]: https://pages.github.com/versions/

## Setup for Windows Subsystem for Linux (WSL)

1. Install [`rbenv`][rbenv] using the instructions in the link.  For the version, use 2.5.8.  You may need to use `apt`
to install additional dependencies - but the installer will tell you if you are missing any.

1.  Set the version of ruby to the version you just installed - IE `rbenv global 2.5.8`

1. Check that your ruby executable is the right version with `ruby -v`

1. Install the dependencies. The [`github-pages`][ghp] gem is a wrapper around all of the [gems made available to GitHub Pages][ghp-gems].

    ```bash
    bundle install
    ```

1. Build the site and watch for changes. Using `bundle exec <cmd>` here ensures that you're using the `jekyll` version specified by `github-pages`.

    ```bash
    bundle exec jekyll serve
    ```

[rbenv]: https://gorails.com/setup/ubuntu/16.04#ruby-rbenv

## S3 deployment setup

If you would like to set up deployment to an S3 bucket you can use the [s3_website](https://github.com/laurilehmijoki/s3_website) gem to handle the deployment. Once you have a bucket set up to host a static site and you have `s3_website` installed on your machine you can simply run:

```bash
AWS_PROFILE=profile S3_BUCKET=bucket s3_website push
```

Where `profile` and `bucket` are the appropriate values for your account/bucket.
.
