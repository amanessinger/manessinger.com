---
title: "1622 - The Flow"
url: /2011/03/1622-the-flow.html
publishDate: Sun, 27 Mar 2011 22:40:00 +0000
date: 2011-03-28 00:40:00
categories: 
  - "panasonic-dmc-lx5"
  - "photoshop-tutorial"
tags: 
  - "austria"
  - "bicycle"
  - "book"
  - "carinthia"
  - "karnten"
  - "landscape"
  - "panasonic-dmc-lx5-review"
  - "people"
  - "photoshop"
  - "river"
  - "street"
  - "traffic"
  - "vienna"
  - "wien"
---
<div class="container">
<div class="center"><a target="_blank" href="https://d25zfm9zpd7gm5.cloudfront.net/1200x1200/2011/20110326_133327_ps.jpg"><img src="https://d25zfm9zpd7gm5.cloudfront.net/0600x0600/2011/20110326_133327_ps.jpg" /></a></div>
</div>
<br />

Let's talk about the Panasonic DMC-LX5, my workflow, and what this means in terms of image quality.

All images apart from the biker in Vienna were taken yesterday, Saturday, the biker image is from Friday morning.

<a target="_blank" href="https://d25zfm9zpd7gm5.cloudfront.net/1200x1200/2011/20110325_082121_ps.jpg"><img style="margin: 0pt 10px 0pt 0px; float: left;" src="https://d25zfm9zpd7gm5.cloudfront.net/0150x0150/2011/20110325_082121_ps.jpg" alt="" border="0" /></a> Image quality of the LX5 is lower than that of the D300, that's clear and was expected, but now we need to look at how much lower it is, if it's still high enough to make the images usable right from the camera, what can be gained by switching to RAW, and if it's always necessary or not.

<a target="_blank" href="https://d25zfm9zpd7gm5.cloudfront.net/1200x1200/2011/20110326_131035_ps.jpg"><img style="margin: 0pt 0px 0pt 10px; float: right;" src="https://d25zfm9zpd7gm5.cloudfront.net/0150x0150/2011/20110326_131035_ps.jpg" alt="" border="0" /></a> In terms of color, I think the LX5 does an excellent job. I have not yet played around with "Film Modes" (things like "Standard", "Vibrant", "Natural", etc), but the standard colors really impress me. Of course my workflow influences colors as well, but all these images are near to what the camera delivered.

Just look at the red light of the semaphore in this image. Yes, I have boosted saturation a little, not much, but the interesting thing is, that on the D300, despite of the bright day, the red light would most likely not have been red, it would have burned out in the center. Not here. There is simply no highlight clipping in the red channel. Impressive.

In general I am not really pleased with the quality of the JPEG files. Even at base ISO 80 you see some grainy noise and artifacts of noise reduction.

No problem, I always use RAW, this camera can record RAW+JPEG, thus I have been using RAW right from the beginning.

<div class="container">
<div class="center"><img src="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/lx5_raw_flow/lx5-sharpness-01.jpg" /></div>
</div>
<br />

I am still on Photoshop CS3 (and currently see no reason to change), thus I'm on Adobe Camera RAW 4.6, and ACR 4.6 does not support any camera considerably newer than my Nikon D300. The LX5 is definitely unsupported.

ACR 5 and ACR 6 don't work with CS3, but fortunately Adobe's free DNG converter is a stand-alone utility and it can produce DNG files readable by ACR 4.6. The only drawback is, that DNG is a huge format, even when you don't embed the original RAW file. When the RAW file is around 10 MB per image, the DNG file is between 35 and 45 MB. Anyway. I convert without embedding the original, and then I throw the originals away.

<div class="container">
<div class="center"><img src="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/lx5_raw_flow/lx5-sharpness-02.jpg" /></div>
</div>
<br />

Thus the first step for me is always to convert the Panasonic's CR2 RAW files to DNG. Then I open the DNG files just like any other RAW file via ACR in Photoshop. In ACR I disable all sharpening and all noise reduction, even color noise. The first step in Photoshop is then to use <a target="_blank" href="http://www.topazlabs.com/denoise/">Topaz Denoise 5</a>. There I use the lowest value (preset "RAW lightest" for ISO 80) but increase color noise reduction considerably. For higher ISOs I may use a stronger preset, but in doubt I choose detail over smoothness.

<div class="container">
<div class="center"><img src="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/lx5_raw_flow/lx5-sharpness-03.jpg" /></div>
</div>
<br />

<a target="_blank" href="http://epaperpress.com/ptlens/">PTLens</a> already supports the LX5, so I may use that next, mostly for architecture, almost never for landscapes. If I need to correct perspective, straighten the image, etc, I might also do it in PTLens, or otherwise at least at that stage.

Whatever follows next is not different from what I might do with a D300 image. Even the last step, sharpening, is not different.

<div class="container">
<div class="center"><img src="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/lx5_raw_flow/sharpening.jpg" /></div>
</div>
<br />

I use a copy-merged layer, put it in "Luminosity" mode, sharpen it with "Filters / Sharpen / Unsharp Mask" with extreme values of amount 500, radius 0.3 and threshold 0, then double click the layer to open its "Blending Options". There I let the whites and the blacks of the sharpening layer fade out softly (hold Alt while clicking-dragging one half of the slider) and reduce the layer's opacity. Finally I may select parts of the image (like the sky) apply a layer mask and immediately invert it, effectively masking what I have selected. Grainy skies look really bad while grainy walls or streets look perfectly OK.

If you look at the three details from the bike above, you see that the lens of the LX5 easily out-resolves the sensor. Look at the roof patterns in the first example. The in-camera JPEG gives you two featureless, gray roofs, while the RAW version shows a clear roof pattern on the right roof and a weaker and seemingly random pattern on the left roof. The texture on the left roof is obviously way beyond this sensor's resolving power, and the only thing sharpening produces is sort of a noise pattern.

But look at the biker, his shoes and the asphalt, and also look at the construction lift in the background of the third example, and finally at the trees on the right side of the third example. There is clearly a lot of detail to be had from this camera.

Be careful though. This kind of over-sharpening works fine with architectural details, works with cars, generally on the street, even works well with twigs in front of a bright sky (like in the Image of the Day). Where it tends to fall apart is the kind of infinite detail that you see in nature. Distant forest (like in the background of the shopping center) consists of almost ONLY unresolvable detail, thus it is especially susceptible to random patterns, and the result may look weird. In general, this interference effect is called aliasing. Most digital cameras have a built-in blur filter to handle aliasing, and what we do by sharpening so strongly with such a small sub-pixel radius, is to cancel the effect of the anti-aliasing filter. Still, I prefer to mask away sharpening artifacts over smudging the whole image.

<div class="container">
<div class="center"><img src="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/lx5_raw_flow/lx5-iso800-01.jpg" /></div>
</div>
<br />

The next example shows our book shelves. The image was taken at 1/4s at f2 and ISO 800. This is the highest sensitivity that I can recommend. At ISO 1600 there is still a lot of detail, but the luminance noise is already unacceptable, and at ISO 3200 there is hardly any detail left at all. Look at the wood grain of the shelf. On the in-camera JPEG the grain is almost gone, on the RAW version it looks very good.

<div class="container">
<div class="center"><img src="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/lx5_raw_flow/lx5-iso800-02.jpg" /></div>
</div>
<br />

I have corrected white balance in the RAW version, and later, when I cooked up these comparison images, I have tried to use color filters in Photoshop to get the JPEG colors as near to the RAW version as possible. Look at the blotchy green/yellow spots that come up when I change colors in the JPEG. Of course the ability to freely set white balance is another big advantage of RAW.

For your reference you can download the whole <a target="_blank" href="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/lx5_raw_flow/lx5-iso800.jpg">original JPEG</a> and my <a target="_blank" href="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/lx5_raw_flow/lx5-iso800_ps.jpg">version from Photoshop</a>. Not too bad for ISO 800 on a compact camera.

 And that's it. With the D300 I routinely go up to ISO 3200, with the LX5 I try to stick to ISO 80 and raise ISO up to 800 if I must. Everything above is unusable and worse than ISO 6400 on the D300.

I'd say the LX5 is at least 2.5, probably 3 stops worse than the D300, has much less dynamic range, considerable noise even at base ISO, but on the other hand, its lens is excellent, it is one full stop faster than my main lens on the D300, and due to the excellent stabilization, I gain at least one stop, likely even two, and at that point the D300 mostly shines due to its higher base image quality.

The Song of the Day is "The Flow" from the 1992 "Love Symbol" album by the artist most of the time known as Prince. I have tried to upload it to YouTube, but the brothers Warner insist on blocking it worldwide. Sorry for that.
