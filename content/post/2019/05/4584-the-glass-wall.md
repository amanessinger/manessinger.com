---
title: "4584 - The Glass Wall"
url: /2019/05/4584-the-glass-wall.html
publishDate: 2019-05-08 18:00:00
date: 2019-05-08
categories: 
  - "mitakon-speedmaster-250-95"
tags: 
  - "austria"
  - "wien"
  - "vienna"
  - "architecture"
  - "black-and-white"
  - "olympus-pen-f"
---
<div class="container">
<div class="center"><a target="_blank" href="https://d25zfm9zpd7gm5.cloudfront.net/1200x1200/2018/20180327_081302_lr.jpg"><img class="webfeedsFeaturedVisual" src="https://d25zfm9zpd7gm5.cloudfront.net/0600x0600/2018/20180327_081302_lr.jpg" /></a></div>
</div>
<br />

I'm a developer and I do most of my development work under
Unix/Linux. I have done so literally for decades (yeah, really
:smiley:). I need Unix for my projects, I need it for small
automation jobs, it's the environment that I feel at home in.

MacOS is not Linux, but it is a variant of Unix. If you get
something for Linux, chances are, that it is also available on the
Mac. If not, you can just compile it from source yourself.

Windows always was different. Up to Steve Ballmer, Microsoft used to
call Linux a cancer. They waged war against free and open source
software. Not so any more. Their new CEO, [Satya
Nadella](https://en.wikipedia.org/wiki/Satya_Nadella), apart from
being a deeply charismatic person, is also a great strategist. He
embraced Linux and Open Source, bought GitHub, the biggest
repository of Open Source, and in general Microsoft today is one of
the biggest contributors to Open Source, ranking with the likes of
Google.

About a year ago they introduced WSL, the _Windows Subsystem for
Linux_. It took some time to mature, but today it is ready for prime
time.

WSL is basically a Linux running in Windows. You can even choose the
distribution or install more than one. You don't have a graphical
user interface, but you do have the command line.

At first I didn't understand how you should properly do real work
with that thing. Use your Windows programs to work on the Linux
files? Turns out you can't. So I searched around and finally found
the explanation: You don't use Linux to create files under Linux.
You use Linux to create and work with files of the Windows system
around it.

You see, Windows programs can't access Linux files, they don't even
see them, but the embedded Linux sees the Windows environment. You
use Linux in Windows directories. There you can work with Windows
files from both sides and even compile them to Linux programs.

It seems for programming purposes, even if you want to program under
Linux and for Linux, Windows 10 has matured to be a fine environment
and I think I can very well live with it.
