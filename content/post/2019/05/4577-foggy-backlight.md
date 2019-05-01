---
title: "4577 - Foggy Backlight"
url: /2019/05/4577-foggy-backlight.html
publishDate: 2019-05-01 18:00:00
date: 2019-05-01
categories: 
  - "olympus-m-zuiko-digital-ed-75-mm-f1-8"
tags: 
  - "austria"
  - "wien"
  - "vienna"
  - "car"
  - "olympus-pen-f"
---
<div class="container">
<div class="center"><a target="_blank" href="https://d25zfm9zpd7gm5.cloudfront.net/1200x1200/2018/20180307_084928_lr.jpg"><img class="webfeedsFeaturedVisual" src="https://d25zfm9zpd7gm5.cloudfront.net/0600x0600/2018/20180307_084928_lr.jpg" /></a></div>
</div>
<br />

Car backlights have always been a favorite of mine. Maybe it's
because they are among the few reliably colorful things in winter
:smiley: 

By the way, it's likely that you can't see the thumbnail of this
image on the blog's overview page. I know. 

The image is in my Amazon S3 bucket like all the other images, and I
can view it there via its S3 URL. That's not how it is viewed on the
blog though. It is viewed through Amazon Cloudfront, a world-wide
distribution service that enhances availability. Or so they say
:smiley:

It is also likely that you've got an error when you recently
submitted a comment. I know.

Something in Amazon's APIs seems to have changed.

Complexity. We really, really have a problem with complexity. I
already consider the experiment to put the blog up in the cloud as
failed. There is too much complexity. Things change all by
themselves. This goes on for some time and suddenly everything
breaks, nothing works any more.

Sure, I have kept notes, I have documented the sources, I have
blogged about it, but once the catastrophe happens, so much time has
passed, that it's hard to even remember how you made it.

Speaking of complexity, at the moment I'm looking for programming
languages and frameworks that have low complexity, are easy to
learn, have small numbers of dependencies (i.e. modules that you
install from the internet, a major source of instability) and don't
need a lot of runtime environment.

I have considered Scala and Kotlin, two languages running on the
Java Virtual Machine. 

Scala is mature, but it is an inherently complex language written by
mathematicians, and you see it. It offers options to create all
sorts of meta-languages. People use it and the result is, that other
people's sources are often impossible to read. Inherent complexity
is not good :smiley:

Kotlin is a down-to-earth practical language developed by Jetbrains,
the developers of my favorite development environment IntelliJ IDEA.
Kotlin is fine, but I deem it not yet mature enough. 

Basically what I want from such a language is, that I can write web
services with access to relational databases. Not much, huh? A web
framework, a data converter framework for JSON and XML, both nicely
integrated, and then a nice way to get into a good old Postgresql
database.

Turns out that younger languages often don't even support XML at all.
Tough when you need to talk to services delivering XML, tough when
you have legacy files of data in XML.

Anyway. I liked Kotlin, but overall its frameworks are not mature
enough yet.

I have considered Python, and why not? Python is mature, easy to
learn, easy to read, and due to its applications in machine
learning, it has become one of the most popular languages at all.
Ask different people and you get different rankings, but in all
popular lists of popular languages, Python is in the top five.

A few things are wrong with Python though. First of all, the
language did not manage the transition from Python2 to Python3.
Basically they are two very similar but different languages. Some
libraries you only get for one, some you only get for the other. It
has been so for years and I see no resolution. There are ways around
that, but they bring complexity.

Then there are the web and database frameworks. Django is king, but
Django is a kitchen sink framework that does all, down to the
database, and if you don't like the way it works, you better use
something else. Everything else though is fragmented, composed of
many parts that frequently and independently change, and there you
have it again: complexity.

Then I considered Rust, a language provided by the nice guys at
Mozilla, a language that powers all the newer parts of Firefox.

Wow! What a racing car! Unfortunately it has the same problem as
Kotlin, even worse. Immature frameworks, everything is in flow.

The other problem with Rust is, that it has a completely new and
innovative solution to memory management. It's a fast and safe
language. Amazing. The price you pay? It's a hard language to learn.
If something compiles, it usually works. It's just that you can't
get it to compile. The compiler gives you all sorts of really
helpful tips, but it turns out that some trivial things (at least
trivial in other languages) are really, really challenging.

I won't give up completely on Rust. I like the language, I like the
ideas, it just needs more time to mature. I'll look into it again in
a year.

And then, of course, there is Go (aka Golang), a nice, easy to
learn, safe and fast language. I've written part of my blogging
software in Go. I did it a year ago and at that time I found the
frameworks still immature. They seem to have improved though. The
result is, that I currently try to use Go. Let's see how this works
out.