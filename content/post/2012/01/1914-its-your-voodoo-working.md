---
title: "1914 - It's Your Voodoo Working"
url: /2012/01/1914-its-your-voodoo-working.html
publishDate: Sun, 15 Jan 2012 01:53:28 +0000
date: 2012-01-15 02:53:28
categories: 
  - "nikon-501-2"
tags: 
  - "austria"
  - "bicycle"
  - "olympus-e-p2"
  - "street"
  - "vienna"
  - "wien"
---
<div class="container">
<div class="center"><a target="_blank" href="https://d25zfm9zpd7gm5.cloudfront.net/1200x1200/2012/20120113_084712_ps.jpg"><img src="https://d25zfm9zpd7gm5.cloudfront.net/0600x0600/2012/20120113_084712_ps.jpg" /></a></div>
</div>
<br />

I had hoped the problem would simply go away in a few hours, but guess what, it didn't. I had to fix it myself.

When I could call up the server control panel again, it was the control panel of "cx24", the server they had moved me to, the server that lacked the data of  almost four months. "fsx04", the so-called "Faster Server", was still reachable though. I could ping it and I could also login via SSH. It was flaky, I hardly could type a few commands before the connection froze, but at least it was possible.

In order to not have to type for too long, I prepared the commands beforehand, so that I only had to copy/paste them. This helped. I still had to try a few times, but finally I could dump the MySQL database for my blog, transfer the dump to the new server and restore it there. You can't imagine my relief!

Today I finally fixed the images. I simply logged into "fsx04" again (this time without  a problem) and copied the missing image directories over to "cx24", via SCP, simply across their LAN. This was fast and now I have everything back.

 Of course this is already voodoo for most people. I can do that, working with UNIX computers is part of my job, I know the incantations, but it's nothing that lay people could do. More about that in the next post.

The Song of the Day is "It's Your Voodoo Working" from the 2009 Imelda May album "Love Tattoo". Hear it on <a href="http://www.youtube.com/watch?v=UGrvkYt39-I" target="_blank">YouTube</a>.
