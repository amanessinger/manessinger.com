---
title: "4272 - Once More The Holy Spirit Hospital"
url: /2018/06/4272-once-more-the-holy-spirit-hospital.html
publishDate: Sat, 30 Jun 2018 18:00:27 +0000
date: 2018-06-30 20:00:27
categories: 
  - "olympus-m-zuiko-digital-ed-12-40mm-f2-8-pro"
tags: 
  - "architecture"
  - "germany"
  - "nuremberg"
  - "olympus-om-d-e-m1-mk-ii"
  - "river"
---
<div class="container">
<div class="center"><a target="_blank" href="https://d25zfm9zpd7gm5.cloudfront.net/1200x1200/2017/20170620_170829_lr.jpg"><img class="webfeedsFeaturedVisual" src="https://d25zfm9zpd7gm5.cloudfront.net/0600x0600/2017/20170620_170829_lr.jpg" /></a></div>
</div>
<br />

Next conversion, next tool, this time <a href="https://jekyllrb.com/" rel="noopener" target="_blank">Jekyll</a>. Again I used a virtual machine for sanity, but I gave it generous 8GB.

While Hexo converts from a database XML export, Jekyll needs access to WordPress' MySql database. No problem. Inside of the VM I ran the database inside of a docker container. Then I installed <a href="http://import.jekyllrb.com/docs/wordpressdotcom/" rel="noopener" target="_blank">Ruby, a few Gems, Jekyll and the importer</a>. It was a little messy, but when I had it running, the conversion was quickly done. It's not quite as fast as <a href="http://gohugo.io/" rel="noopener" target="_blank">Hugo</a>, but it is by no means slow.

The conversion result is interesting. The Hexo conversion fed into Hugo had immediately given me a proper blog structure. With Jekyll's conversion to Markdown this was not the case, not even when converted to HTML by Jekyll itself. Hugo unfortunately can't work with the Markdown produced by Jekyll at all.

Two things were much better though:

You may know that <a href="https://en.wikipedia.org/wiki/Markdown" rel="noopener" target="_blank">Markdown</a> allows for embedded HTML tags. You don't necessarily need them, but you can always use them to represent things that can't otherwise be done in simple Markdown.

Jekyll utilizes that. This perfectly solves the problem of historic multi-image posts by keeping the original layout.

Basically Jekyll's Markdown result is the HTML body of the original post, prefixed by generous front matter containing much more metadata than Hexo had preserved.

<div style="background-color:#DDDDDD; color:black;
padding:20px; border:solid black 1px;"><code>---
layout: post
status: publish
published: true
title: 1266 - Something Magic
author:
  display_name: andreas
  login: amanessinger
  email: andreas&nbsp;@&nbsp;manessinger.com
  url: /
author_login: amanessinger
author_email: andreas&nbsp;@&nbsp;manessinger.com
author_url: /
wordpress_id: 4087
wordpress_url: /?p=4087
date: '2010-04-02 07:05:41 +0200'
date_gmt: '2010-04-02 05:05:41 +0200'
categories:
- Nikon 24/2.8 AF
tags:
- Austria
- Vienna
- Wien
- Color
- Spring
- Street
comments:
- id: 6444
  author: Thomas
  author_email: q&nbsp;@&nbsp;q.com
  author_url: http://www.nobodys-domain.de
  date: '2010-04-05 00:55:18 +0200'
  date_gmt: '2010-04-04 22:55:18 +0200'
  content: Love the lead photo! The yellow-blue split works greatly.Although it reminds
    me a bit on a German political party that I don't like that much... 😉
- id: 6445
  author: andreas
  author_email: andreas&nbsp;@&nbsp;manessinger.com
  author_url: /
  date: '2010-04-05 01:58:20 +0200'
  date_gmt: '2010-04-04 23:58:20 +0200'
  content: Yellow/blue? No idea. Help me along!
- id: 6447
  author: andreas
  author_email: andreas&nbsp;@&nbsp;manessinger.com
  author_url: /
  date: '2010-04-05 08:54:47 +0200'
  date_gmt: '2010-04-05 06:54:47 +0200'
  content: |-
    Oh, I see. I always thought they were yellow/black.

    Anyway. That's too much of a nice color combo to let it be occupied in my mind by the Masters of Opportunism 🙂
---
&lt;p&gt;&lt;a target="_blank" href="https://d25zfm9zpd7gm5.cloudfront.net/1200x1200/2010/20100331_191638_ps.jpg"&gt;&lt;img src="https://d25zfm9zpd7gm5.cloudfront.net/0600x0600/2010/20100331_191638_ps.jpg" /&gt;&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a target="_blank" href="https://d25zfm9zpd7gm5.cloudfront.net/1200x1200/2010/20100401_084642_ps.jpg"&gt;&lt;img style="margin: 0pt 0px 0pt 10px; float: right;" src="https://d25zfm9zpd7gm5.cloudfront.net/0150x0150/2010/20100401_084642_ps.jpg" alt="" border="0" /&gt;&lt;/a&gt; It's funny. Yesterday was an incredibly beautiful day and I thought I had taken all sorts of good images, though when I came home and looked at them, there were only some very naive pictures of leaves coming out on the trees, blossoms and the blinding sun. Not a single good image, this street scene being the only thing even remotely usable.&lt;/p&gt;
&lt;p&gt;There is really something magic in Spring. Experiencing such a day fills me with wild joy, and even though one would think the city can't have changed, it has. Now my only job would be to actually capture this in an image 🙂&lt;/p&gt;
&lt;p&gt;Fortunately I have an image left from Wednesday. It's no replacement for the missing Spring image, but after I had posted "&lt;a target="_blankhref="/2010/03/1265-the-people-who-grinned-themselves-to-death.html"&gt;1265 – The People Who Grinned Themselves To Death&lt;/a&gt;", I saw it, tried working on it, and the result pleased me enough to carry it over to this post.&lt;/p&gt;
&lt;p&gt;&lt;iframe src="http://rcm.amazon.com/e/cm?lt1=_blank&amp;bc1=000000&amp;IS2=1&amp;bg1=000000&amp;fc1=FFFFFF&amp;lc1=99AADD&amp;t=thedailphotof-20&amp;o=1&amp;p=8&amp;l=as1&amp;m=amazon&amp;f=ifr&amp;md=10FE9736YVPPT7A0FBG2&amp;asins=B0025X4P6K" style="margin: 0pt 10px 0pt 0px; float: left; width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"&gt;&lt;/iframe&gt; The Song of the Day is "&lt;a target="_blank" href="http://www.lyricsmode.com/lyrics/p/procol_harum/something_magic.html"&gt;Something Magic&lt;/a&gt;" by Procol Harum, originally from the 1977 album of the same name. I have it on the 2009 live album "In Concert with The Danish National Concert Orchestra and Choir" that I bought some days ago from Amazon.de as digital downloads. Interestingly enough, Amazon.com has only the CD, not the MP3 files. Oh how I marvel at the intricacy of the international music business.&lt;/p&gt;
&lt;p&gt;Here's a video on &lt;a target="_blank" href="http://www.youtube.com/watch?v=uyGTmRSFgeY"&gt;YouTube&lt;/a&gt;. Enjoy!&lt;/p&gt;
</code></div><br />

Did you see the comments in the front matter? Is that cool? Comments among a page's metadata!

It seems what we need is the basic structure generated by Hexo, amended with HTML and comments from Jekyll's conversion. I might need to use both converters and do some post-processing myself.

Then there is still the problem of how to enable new comments as well. That will need some more experiments, but I have an idea.
