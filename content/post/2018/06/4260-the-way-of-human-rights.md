---
title: "4260 - The Way of Human Rights"
url: /2018/06/4260-the-way-of-human-rights.html
publishDate: Mon, 18 Jun 2018 18:00:37 +0000
date: 2018-06-18 20:00:37
categories: 
  - "olympus-m-zuiko-digital-ed-12-40mm-f2-8-pro"
tags: 
  - "architecture"
  - "germany"
  - "monument"
  - "nuremberg"
  - "olympus-om-d-e-m1-mk-ii"
---
<div class="container">
<div class="center"><a target="_blank" href="https://d25zfm9zpd7gm5.cloudfront.net/1200x1200/2017/20170620_155247_lr.jpg"><img class="webfeedsFeaturedVisual" src="https://d25zfm9zpd7gm5.cloudfront.net/0600x0600/2017/20170620_155247_lr.jpg" /></a></div>
</div>
<br />

This the "Way of Human Rights", an impressive row of columns in front of the Germanic National Museum. Each column carries a statement from the Declaration of Human Rights.

<a target="_blank" href="https://d25zfm9zpd7gm5.cloudfront.net/1200x1200/2017/20170620_145856_lr.jpg"><img style="margin: 0pt 0px 0pt 10px; float: right;" src="https://d25zfm9zpd7gm5.cloudfront.net/0150x0150/2017/20170620_145856_lr.jpg" alt="" border="0" /></a> Of course I could lament the deplorable state of Human Rights now, and there would be any reason to do so, but instead let me introduce one more complication inherent to my blog migration project.

<a target="_blank" href="https://d25zfm9zpd7gm5.cloudfront.net/1200x1200/2017/20170620_155531_lr.jpg"><img style="margin: 0pt 10px 0pt 0px; float: left;" src="https://d25zfm9zpd7gm5.cloudfront.net/0150x0150/2017/20170620_155531_lr.jpg" alt="" border="0" /></a> There are three images in this post. The first, the big one, is the "Image of the Day", the two others are presented as thumbnails only. You can click on any of these to see a bigger version.

I rarely use more than three images these days, but I did in the past, when all "good" images of a day had to fit into one post, and any image not used on the same day was "lost for the blog".

I hope you appreciate how the images are twined into the text, alternatingly aligned to the left and to the right. I also arrange the images, so that images aligned to the left are "opening towards right" and vice versa. This way everything points to the center.

If you read this post through a feed reader, you may not see what I mean. In the reader, the alignment of the images may get lost. The only way to see what it should look like, is to click through and open the original post in a browser.

Now my problem: <a href="https://en.wikipedia.org/wiki/Markdown" rel="noopener" target="_blank">Markdown</a> has no way to align images.

I have already played around with <a href="https://hexo.io/" rel="noopener" target="_blank">Hexo</a> (more about that in another post) and used its WordPress converter. When converting "<a href="/2018/05/4214-the-congress-hall-from-afar-v.html" rel="noopener" target="_blank">4214 – The Congress Hall From Afar V</a>", I get a result like this:

    ---
    title: 4214 - The Congress Hall  From Afar V
    tags:
      - Architecture
      - Boats
      - Germany
      - Lake
      - National Socialism
      - Nuremberg
      - Olympus OM-D E-M1 Mk II
    url: 16124.html
    id: 16124
    categories:
      - Olympus M.Zuiko Digital ED 12-40mm f/2.8 PRO
    date: 2018-05-03 20:00:24
    ---
    
    [![](https://d25zfm9zpd7gm5.cloudfront.net/0600x0600/2017/20170619_150154_lr.jpg)](https://d25zfm9zpd7gm5.cloudfront.net/1200x1200/2017/20170619_150154_lr.jpg)
    
    [![](https://d25zfm9zpd7gm5.cloudfront.net/0150x0150/2017/20170619_135026_lr.jpg)](https://d25zfm9zpd7gm5.cloudfront.net/1200x1200/2017/20170619_135026_lr.jpg) 
    You can't erase your past. You have to live with it. So does Nuremberg. 
    [![](https://d25zfm9zpd7gm5.cloudfront.net/0150x0150/2017/20170619_135044_lr.jpg)](https://d25zfm9zpd7gm5.cloudfront.net/1200x1200/2017/20170619_135044_lr.jpg)
    Doesn't the Image of the Day look peaceful? The war has been over for more than 70 years and we all hope it will have been the last. It has not been so in much of the world, but this does not mean things can't improve, can they?

You see, there is a section at the beginning, that is not strictly Markdown. It's what they call "Front Matter". It can come in three syntax variants, YAML like here, TOML and JSON. All three are frequently used in Markdown to represent meta-information, and many static site generators understand that. That's cool, because it means I can convert with one tool, and I am not bound to using it for presentation.

The result, when converted to static HTML (this time using <a href="http://gohugo.io/" rel="noopener" target="_blank">Hugo</a>), looks more or less like this:

<div style="background-color:#DDDDDD; color:black;
padding:20px; border:solid black 1px;"><h1>4214 - The Congress Hall  From Afar V</h1>
    <div>
      <div>
        Posted on May 3, 2018
      </div>
      <a href="#">#Architecture</a> <a href="#">#Boats</a> <a href="#">#Germany</a> <a href="#">#Lake</a> <a href="#">#National Socialism</a> <a href="#">#Nuremberg</a> <a href="#">#Olympus OM-D E-M1 Mk II</a>
    </div><p><a href="https://d25zfm9zpd7gm5.cloudfront.net/1200x1200/2017/20170619_150154_lr.jpg"><img src="https://d25zfm9zpd7gm5.cloudfront.net/0600x0600/2017/20170619_150154_lr.jpg" alt="" /></a></p>

<p><a href="https://d25zfm9zpd7gm5.cloudfront.net/1200x1200/2017/20170619_135026_lr.jpg"><img src="https://d25zfm9zpd7gm5.cloudfront.net/0150x0150/2017/20170619_135026_lr.jpg" alt="" /></a> You can&rsquo;t erase your past. You have to live with it. So does Nuremberg. <a href="https://d25zfm9zpd7gm5.cloudfront.net/1200x1200/2017/20170619_135044_lr.jpg"><img src="https://d25zfm9zpd7gm5.cloudfront.net/0150x0150/2017/20170619_135044_lr.jpg" alt="" /></a> Doesn&rsquo;t the Image of the Day look peaceful? The war has been over for more than 70 years and we all hope it will have been the last. It has not been so in much of the world, but this does not mean things can&rsquo;t improve, can they?</p></div><br />

You see the problem? Something got lost in translation 🙂

There is no way to extract the original layout and represent it perfectly. That means, I will have to find a way to reformat my posts automatically, in order to make the layout acceptable again.

One idea is, to shift all thumbnails towards the start or towards the end of the post. There I would center them. Not an ideal solution, especially because the text often refers to "the image on the right", but maybe I can get away with it. I would also have to use equal thumbnail heights. Currently the thumbnails are sized to fit into a square of 150x150 pixels, but due to the different aspect ratios, the image heights vary. This means, I would probably have to recreate the thumbnails.

Another idea is, to write my own converter (which I really want to avoid), attach some metainfo (for instance in the front matter), that tells me how to align the images, and write my own static site generator (which I really, really want to avoid), that would use the meta info to generate aligned images.

Nothing is decided so far, but you see the kind of trouble one gets into in such a project 🙂
