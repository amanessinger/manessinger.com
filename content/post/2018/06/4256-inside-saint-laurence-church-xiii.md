---
title: "4256 – Inside Saint Laurence Church XIII"
url: /2018/06/4256-inside-saint-laurence-church-xiii.html
publishDate: Thu, 14 Jun 2018 18:00:45 +0000
date: 2018-06-14 20:00:45
categories: 
  - "olympus-m-zuiko-digital-ed-12-40mm-f2-8-pro"
tags: 
  - "architecture"
  - "church"
  - "germany"
  - "nuremberg"
  - "olympus-om-d-e-m1-mk-ii"
---
<div class="container">
<div class="center"><a target="_blank" href="https://d25zfm9zpd7gm5.cloudfront.net/1200x1200/2017/20170620_133113_lr.jpg"><img class="webfeedsFeaturedVisual" src="https://d25zfm9zpd7gm5.cloudfront.net/0600x0600/2017/20170620_133113_lr.jpg" /></a></div>
</div>
<br />

The relation between headless CMS for content production, version control system for storage, static site generator for creating static files and web server for statically serving those files, that relation is extremely elegant. It's what we call loose coupling and clean separation of concerns. 

Got a problem in one part of the chain? Solve it with the best tool available. There is no need for a single programming language, and for each stage you have the full set of choices. The problem that comes with that is, you actually have to make choices 🙂

In my case it is clear that I don't need a CMS (for now), although there's a catch: I will need something like that for comments. Comments won't be edited by me but by my visitors, and I can't require them to be able to or even want to use Markdown. In terms of comments, the best strategy is, to make the barrier as low as possible. At the same time I want to block SPAM. I already have some ideas, but let's delay that discussion until I know more about my future tool set.

I do need a web server, but that's trivial. I will use either <a href="https://httpd.apache.org/" rel="noopener" target="_blank">Apache</a> (as I've done for 20+ years) or <a href="https://www.nginx.com/" rel="noopener" target="_blank">NGINX</a>, most likely the latter.

The version control system will be Git, and I will use a cloud repository. It will either be a public one at <a href="https://github.com/" rel="noopener" target="_blank">GitHub</a> (if I am able to make blog source and tools and configuration public) or <a href="https://gitlab.com/" rel="noopener" target="_blank">GitLab</a> (if I need to keep the repository private). I will start on GitLab, but adding GitHub later on will be trivial.

This just leaves me with the non-trivial task of choosing between 224 static site generators 😄
