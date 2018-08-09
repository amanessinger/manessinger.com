---
title: "1991 - In The Morning"
url: /2012/03/1991-in-the-morning.html
publishDate: Fri, 30 Mar 2012 17:16:42 +0000
date: 2012-03-30 19:16:42
categories: 
  - "panasonic-lumix-g-201-7-asph"
tags: 
  - "austria"
  - "carinthia"
  - "hdr"
  - "karnten"
  - "landscape"
  - "olympus-e-p2"
  - "photoshop"
  - "sky"
  - "sunrise"
---
<div class="container">
<div class="center"><a target="_blank" href="https://d25zfm9zpd7gm5.cloudfront.net/1200x1200/2012/20120330_064216_ps.jpg"><img src="https://d25zfm9zpd7gm5.cloudfront.net/0600x0600/2012/20120330_064216_ps.jpg" /></a></div>
</div>
<br />

I have labeled this image "HDR", but technically that is wrong. It is a fusion of three bracketed exposures, aligned and merged with masks in Photoshop. Pretty much effort went into making this as naturally looking as was possible and, frankly, I think it turned out pretty well.

The challenge here is to maintain the blinding brightness of the sun, but without having to sacrifice detail. This is a matter of carefully blending the original exposures and of using localized "Exposure" layers and curves to smooth out the sky. Basically we want brightness to fade out from the sun's center along something like a Gaussian Bell curve.

HDR tone mapping programs like Photomatix Pro are pretty good at that and I could have gone that route, but as I had also to eliminate some lens flares, I tackled it manually.

Cloning out the flares was challenging as well. They were of course in the central clouds and there was simply no material to clone from. You may know that problem: if you get the right texture and luminosity, the color is off and vice versa.

The solution is, to do it in separate steps. I use a blank, transparent layer in "Luminosity" blending mode and I just clone from parts with the right texture and luminosity. In order to better see what I do, I have a temporary desaturation layer on top, i.e. above the target layer of my cloning operation. This works, because in the "Sample" drop-down menu of the "Clone" tool bar, I always use "Current & Below". Thus I can use layers above the current layer to amplify aspects of the image, but this amplification is not taken up by the clone brush. When I'm satisfied with smooth textures, I remove the desaturation layer.

At that moment color is completely and irritatingly off. That was the reason for working under a desaturation screen in the first place: colors, especially saturated ones tend to give an impression of changed luminosity.

The final step is a second blank layer, but this time in "Color" blending mode. Here you clone from places with matching color, regardless of luminosity. If you want to, you can even use a light- to mid-gray layer in "Luminosity" mode above as a screen. Doing so you see only colors, no texture. A strong "Saturation" layer may help as well. Put them in a group, and then you can quickly turn the screen on and off.

 In pathological cases it would be possible to refine the method further by using separate clone layers in "Hue" and in "Saturation" blending more instead of one in "Color". Normally it will not be worth the hassle though.

The Song of the Day is "<a href="http://www.lyricsmode.com/lyrics/n/norah_jones/in_the_morning.html" target="_blank">In The Morning</a>" from the 2004 Norah Jones album "Feels Like Home". Hear it on <a href="http://www.youtube.com/watch?v=rL6hEhpDYBo" target="_blank">YouTube</a>.
