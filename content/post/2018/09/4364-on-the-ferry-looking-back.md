---
title: "4364 - On The Ferry: Looking Back"
url: /2018/09/4364-on-the-ferry-looking-back.html
publishDate: 2018-09-30 18:00:00
date: 2018-09-30
categories: 
  - "olympus-m-zuiko-digital-17mm-f1-8"
tags: 
  - "island"
  - "sea"
  - "rab"
  - "morning"
  - "croatia"
  - "olympus-pen-f"
---
<div class="container">
<div class="center"><a target="_blank" href="https://d25zfm9zpd7gm5.cloudfront.net/1200x1200/2017/20170721_090337_lr.jpg"><img class="webfeedsFeaturedVisual" src="https://d25zfm9zpd7gm5.cloudfront.net/0600x0600/2017/20170721_090337_lr.jpg" /></a></div>
</div>
<br />

My primary domain 'manessinger.com' today seemed to point to the
digital void. It's IP address did not have the same value as
'gifted-panini-8eb4bc.netlify.com' (the "real" name of my static
blog site) any more, or rather, Netlify seemed to have moved. Hard
to say, because I can't look back in time. There are services for
that, but they normally don't track subdomains.

That's unfortunate. The root problem is, that I have stupidly set up
my blog as 'manessinger.com' instead of for instance
'blog.manessinger.com'. That was many years ago and it seemed like a
good idea -  for a few days.

For a subdomain I could set up a so-called CNAME, basically an
alias, that does not point to an IP address but instead to another
domain name, in my case 'gifted-panini-8eb4bc.netlify.com'. This is
robust, because any DNS lookup for an alias automatically yields the
IP of the target domain name.

For a so-called apex domain ('manessinger.com' in my case), you
can't set up an alias. My DNS registrar offers a URL redirect
service, but that does not work for HTTPS.

Anyway. While I was unhappily changing DNS settings, domain settings
on Netlify, etc, I found out, that in reality I have no problem at
all.

Google had or was the problem. A while ago I had set the DNS server
for my Mac to Google's public DNS. Yes, I know, you shouldn't do
that :smiley:

In any case, when I wanted to check if a DNS change had already been
propagated, I did an `nslookup manessinger.com` a few times, and to
my surprise it toggled between the correct IP address and two others
that didn't reverse resolve.

Sometimes I got the correct IP, most of the time a wrong one.

I tried a few other DNS servers. All yielded the correct IP all of
the time.

What a fine way to kill two hours of one's morning, especially when
you'd have a lot of work to do :stuck_out_tongue_closed_eyes: