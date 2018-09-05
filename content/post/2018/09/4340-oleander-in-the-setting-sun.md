---
title: "4340 - Oleander in the Setting Sun"
url: /2018/09/4340-oleander-in-the-setting-sun.html
publishDate: 2018-09-06 18:00:00
date: 2018-09-06
categories: 
  - "olympus-m-zuiko-digital-17mm-f1-8"
tags: 
  - "blossom"
  - "sun"
  - "rab"
  - "croatia"
  - "olympus-pen-f"
---
<div class="container">
<div class="center"><a target="_blank" href="https://d25zfm9zpd7gm5.cloudfront.net/1200x1200/2017/20170716_200431_lr.jpg"><img class="webfeedsFeaturedVisual" src="https://d25zfm9zpd7gm5.cloudfront.net/0600x0600/2017/20170716_200431_lr.jpg" /></a></div>
</div>
<br />

If you think of the effort I've used during the last two months to
bring my blog to a new platform, you may ask yourself: why did he do
that?

Indeed that's something I've been asked by everyone at work. After
all, there are blogging platforms out there, that require just a few
clicks to get you going. Why invest so much time? Turns out there
are a few good reasons:

I've grown out of blogger, I've used WordPress for a long time, I've
had my pictures hosted on SmugMug, I've had them hosted on my own
WordPress server, believe me, I've been there. Nothing lasts
forever. Neither will the infrastructure that I'm on today. 

It won't matter though. I am now in a position that I can move my
blog to a new server infrastructure in a few hours. Everything is
automatically backed up, everything is as portable as it can be.
What I've done now is an investment into the future. 10 years from
now I will still be able to publish on this blog, and I will be able
to do it just as I do it now. 

On Blogger I had some restrictions and I had other restrictions on
WordPress. Moving from Blogger to WordPress needed a lot of effort,
leaving WordPress needed even more. The next move will be
effortless. Every move in the future will.

The new blog is also fast. A normal post has a few kilobytes. There
is CSS, but it is minimal. There is a single JavaScript, but you
only load it on the Comments page. If you don't click on "💬 Reply
💬", no script ever gets loaded. I use Web Fonts, but you only load
them once. You won't see much of a difference on a fast network, but
on slow networks it is noticeable.

And then I've learned a lot. Trying to avoid a commenting service
like [Disqus](https://disqus.com/) with all its privacy
implications, I had to implement some software. It's all open source
on GitHub:

* [manessinger-comment](https://github.com/amanessinger/manessinger-comment)
  is a JavaScript web component implemented using
  [Stencil](https://stenciljs.com/). It delivers comments via AWS
  API Gateway to an AWS Lambda function.

* [manessingercomment-receiver](https://github.com/amanessinger/manessingercomment-receiver)
  is the JavaScript implementation of the Lambda function. It does
  some basic checks and pushes incoming comments to an AWS SQS FIFO
  message queue. The Lambda also notifies me about new comments via
  Amazon's AWS SES Simple Email Service.

* [manessingercomment-harvester](https://github.com/amanessinger/manessingercomment-harvester)
  is a Go based program, that collects comments from the AWS SQS
  queue and stores them in the local clone of [this blog's
  repo](https://github.com/amanessinger/manessinger.com) on my
  laptop. 
  
I couldn't have done all that before. Now I can. I mean, everybody
talks about the cloud. People praise it or vilify it, sometimes
both, but in fact few people can use it to create programs. It's
considered the domain of young developers, not necessarily of people
of my age. 

I may or may not be able to use my Amazon knowledge professionally,
but what I've done on Amazon's cloud, I can now do as well on
Microsoft's Azure or the Google Cloud. It's about principles, not
about the the provider. That alone would have been worth it.

If that all does not count for you, well, I have one more reason: It
was fun :satisfied: