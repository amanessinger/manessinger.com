---
title: "1303 - Pink Noise Waltz I"
url: /2010/05/1303-pink-noise-waltz-i.html
publishDate: Mon, 10 May 2010 00:25:02 +0000
date: 2010-05-10 02:25:02
categories: 
  - "nikon-501-8"
  - "sigma-201-8"
tags: 
  - "nikon-d200"
  - "nikon-d300"
  - "topaz-denoise-4-review"
---
<a target="_blank" rel="none" href="https://d25zfm9zpd7gm5.cloudfront.net/1200x1200/misc/d300-iso6400-night-final-topaz.jpg"><img src="https://d25zfm9zpd7gm5.cloudfront.net/0600x0600/misc/d300-iso6400-night-final-topaz.jpg" /></a>

It's Sunday night, I'm on the train to Vienna and I have not taken a single image all through the weekend. I've processed quite a few though.

In the last post I promised to tell you more about my experiences with <a target="_blank" href="http://www.topazlabs.com/denoise">Topaz Denoise 4</a>, the latest contender to the throne of "Best Noise Reduction Utility". Personally I own <a target="_blank" href="http://www.picturecode.com/">Noise Ninja</a> (latest version), and for a comprehensive comparison I also wanted to use the test versions of <a target="_blank" href="http://www.neatimage.com/">Neat Image</a> and <a target="_blank" href="http://www.niksoftware.com/">Nik Dfine 2.0</a>. Unfortunately the test version of Neat Image does not work on 16 bit images and the test version of Nik Dfine 2.0 immediately claimed that the 15 day demo period was over. I suppose the latter is connected to the fact that I installed the plugin as an admin user and then used it under my normal account. Whatever, the comparison is now limited to Noise Ninja, a plugin that I have used for years, and the new Topaz Denoise 4.

I have used Noise Ninja in the same way that I use it always. Basically I let it auto-profile the image, and then I use the defaults. If I feel that too many details are smudged, I lower the degree of luminance noise reduction from the default of 10 down to a minimum of 7. That's it. I never use their "Noise Brush", because I find it inconvenient, but in rare cases I may apply a mask to the denoise layer, probably based on luminance, probably based on color.

Thus what we compare here is Noise Ninja, used in that particular way, with the best I can get out of Topaz Denoise 4. Thus I arguably put more effort into Denoise than into Noise Ninja. That's right, but that is because I feel the controls in Denoise are more useful. Noise Ninja is much faster than Topaz Denoise, but when I begin to tune the output of Noise Ninja or optimize by blending two different versions, e.g. one for lighter tonal values and one for the darker values, things begin to be pretty awkward. Topaz has just that concept built in: you can vary the effect depending on tonal value.

Whatever. That's what I do. I use Noise Ninja in a pretty generic way because it couldn't inspire me in years to put more effort into optimization. I do more optimization with Topaz Denoise, because I can and because it is easy and intuitive.

Before we look at the first bunch of results (another post with more of that will follow), let's think about what we can realistically expect:

When we used film, "noise" was called "grain", and it was a physical property of the particular type of film used. High sensitivity meant big crystals and that meant coarse grain. If you wanted to take photographs at another sensitivity, you needed to use another film, or to a certain degree you could underexpose the film and vary chemical process, temperature and time. This was called "pushing" the film.

In digital photography there is no such thing as a film that you could change. You have a sensor, when the sensor is exposed to light, it produces a certain electric signal, and that's it. The different ISO settings are there for our convenience and because photographers expect them. In reality the digital ISO value specifies an amplification.

Digital noise is exactly the same as the noise you can hear on analog tape recordings. Analog? Yes, analog. The signal from the senor is analog, and only then it gets quantified and digitized. 

Remember a very noisy tape recording. Even with the best of ears you couldn't hear any fine details. The melody was recognizable, but dynamics and clarity were gone.

And exactly the same happens in digital images. The "real" pattern of tonal values is buried in noise, but because we don't know what part of the signal is "real" signal and what part is noise, they become indistinguishable. The dynamic range of a noisy image is diminished, the effective resolution goes down.

That's what we see in the Image of the Day. I took this image sometime last winter, using the Nikon D300, the Sigma 20/1.8, f3.2 at 1/80s and ISO 6400. The focus was on the white billows in the middle of the street. Like almost always when I have set the camera to ISO 6400, it was also set to B&W, but of course that affects the JPEGs only.

The full image was made with Topaz Denoise 4. In Adobe Camera RAW I have completely disabled noise reduction and I have set the exposure parameters so that the histogram fills the whole range. Then I have prepared four different details for you:

<div class="container">
<div class="center"><a title="Detail 1 - Adobe Camera RAW" href="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/topaz_denoise4_01/d300-iso6400-night-detail1-raw.jpg" rel=lightbox[1]><img style="margin: 10pt 10px 10pt 10px;" src="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/topaz_denoise4_01/thumbs/d300-iso6400-night-detail1-raw.jpg" alt="" border="0" /></a><a title="Detail 1 - Noise Ninja" href="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/topaz_denoise4_01/d300-iso6400-night-detail1-noiseninja.jpg" rel=lightbox[1]><img style="margin: 10pt 10px 10pt 10px;" src="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/topaz_denoise4_01/thumbs/d300-iso6400-night-detail1-noiseninja.jpg" alt="" border="0" /></a><a title="Detail 1 - Topaz Denoise 4" href="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/topaz_denoise4_01/d300-iso6400-night-detail1-topazdenoise.jpg" rel=lightbox[1]><img style="margin: 10pt 10px 10pt 10px;" src="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/topaz_denoise4_01/thumbs/d300-iso6400-night-detail1-topazdenoise.jpg" alt="" border="0" /></a></div>
</div>

This first detail shows an area where we have some sharpness and some soft transitions in the billows. The RAW image is completely unusable, Noise Ninja has eliminated much noise but also most of the texture, and while Denoise comes out smoothest and a pretty soft, it has more detail than Noise Ninja and none of that mottled look that comes from low frequency color noise. In my book Denoise wins easily.

<div class="container">
<div class="center"><a title="Detail 2 - Adobe Camera RAW" href="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/topaz_denoise4_01/d300-iso6400-night-detail2-raw.jpg" rel=lightbox[1]><img style="margin: 10pt 10px 10pt 10px;" src="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/topaz_denoise4_01/thumbs/d300-iso6400-night-detail2-raw.jpg" alt="" border="0" /></a><a title="Detail 2 - Noise Ninja" href="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/topaz_denoise4_01/d300-iso6400-night-detail2-noiseninja.jpg" rel=lightbox[1]><img style="margin: 10pt 10px 10pt 10px;" src="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/topaz_denoise4_01/thumbs/d300-iso6400-night-detail2-noiseninja.jpg" alt="" border="0" /></a><a title="Detail 2 - Topaz Denoise 4" href="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/topaz_denoise4_01/d300-iso6400-night-detail2-topazdenoise.jpg" rel=lightbox[1]><img style="margin: 10pt 10px 10pt 10px;" src="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/topaz_denoise4_01/thumbs/d300-iso6400-night-detail2-topazdenoise.jpg" alt="" border="0" /></a></div>
</div>

Noise Ninja always produces its own kind of fine noise. At print size, much of this noise will, if visible at all, be mistaken for detail. Denoise is cleaner here as well, but the difference is not that big. At print sizes or downsized for web, this is negligible. Actually this detail is sort of a best case: well-defined lines, good contrast, no delicate details. Both do fine, Denoise probably a little better.

<div class="container">
<div class="center"><a title="Detail 3 - Adobe Camera RAW" href="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/topaz_denoise4_01/d300-iso6400-night-detail3-raw.jpg" rel=lightbox[1]><img style="margin: 10pt 10px 10pt 10px;" src="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/topaz_denoise4_01/thumbs/d300-iso6400-night-detail3-raw.jpg" alt="" border="0" /></a><a title="Detail 3 - Noise Ninja" href="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/topaz_denoise4_01/d300-iso6400-night-detail3-noiseninja.jpg" rel=lightbox[1]><img style="margin: 10pt 10px 10pt 10px;" src="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/topaz_denoise4_01/thumbs/d300-iso6400-night-detail3-noiseninja.jpg" alt="" border="0" /></a><a title="Detail 3 - Topaz Denoise 4" href="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/topaz_denoise4_01/d300-iso6400-night-detail3-topazdenoise.jpg" rel=lightbox[1]><img style="margin: 10pt 10px 10pt 10px;" src="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/topaz_denoise4_01/thumbs/d300-iso6400-night-detail3-topazdenoise.jpg" alt="" border="0" /></a></div>
</div>

This is the downfall for Noise Ninja. Again we see the mottled look, awkwardly obvious because we know the street is more or less monochrome. Noise Ninja does away with fine, but preserves coarse detail, and here it gets visible in an unpleasant way.

<div class="container">
<div class="center"><a title="Detail 4 - Adobe Camera RAW" href="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/topaz_denoise4_01/d300-iso6400-night-detail4-raw.jpg" rel=lightbox[1]><img style="margin: 10pt 10px 10pt 10px;" src="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/topaz_denoise4_01/thumbs/d300-iso6400-night-detail4-raw.jpg" alt="" border="0" /></a><a title="Detail 4 - Noise Ninja" href="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/topaz_denoise4_01/d300-iso6400-night-detail4-noiseninja.jpg" rel=lightbox[1]><img style="margin: 10pt 10px 10pt 10px;" src="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/topaz_denoise4_01/thumbs/d300-iso6400-night-detail4-noiseninja.jpg" alt="" border="0" /></a><a title="Detail 4 - Topaz Denoise 4" href="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/topaz_denoise4_01/d300-iso6400-night-detail4-topazdenoise.jpg" rel=lightbox[1]><img style="margin: 10pt 10px 10pt 10px;" src="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/topaz_denoise4_01/thumbs/d300-iso6400-night-detail4-topazdenoise.jpg" alt="" border="0" /></a></div>
</div>

The last detail from this image shows more of the same. Low frequency color noise, the windows in the background are hardly recognizable in the Noise Ninja version, while they are clearly defined in the Topaz version. For this image, D300, ISO 6400, night scene, Topaz Denoise is definitely the better choice.

<a target="_blank" rel="none" href="https://d25zfm9zpd7gm5.cloudfront.net/1200x1200/misc/d200-iso0900-night-pushed-final-topaz.jpg"><img src="https://d25zfm9zpd7gm5.cloudfront.net/0600x0600/misc/d200-iso0900-night-pushed-final-topaz.jpg" /></a>

The next image, an old one, was taken with the Nikon D200, a Nikon 50/1.8 at f1.8, 1/30s, ISO 900 and -1EV, thus we're really looking at an equivalent of ISO 1800 here. The D200 has a much noisier sensor, thus we are in desperate need of noise reduction.

<div class="container">
<div class="center"><a title="Detail 1 - Adobe Camera RAW" href="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/topaz_denoise4_01/d200-iso0900-night-pushed-detail1-raw.jpg" rel=lightbox[1]><img style="margin: 10pt 10px 10pt 10px;" src="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/topaz_denoise4_01/thumbs/d200-iso0900-night-pushed-detail1-raw.jpg" alt="" border="0" /></a><a title="Detail 1 - Noise Ninja" href="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/topaz_denoise4_01/d200-iso0900-night-pushed-detail1-noiseninja.jpg" rel=lightbox[1]><img style="margin: 10pt 10px 10pt 10px;" src="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/topaz_denoise4_01/thumbs/d200-iso0900-night-pushed-detail1-noiseninja.jpg" alt="" border="0" /></a><a title="Detail 1 - Topaz Denoise 4" href="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/topaz_denoise4_01/d200-iso0900-night-pushed-detail1-topazdenoise.jpg" rel=lightbox[1]><img style="margin: 10pt 10px 10pt 10px;" src="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/topaz_denoise4_01/thumbs/d200-iso0900-night-pushed-detail1-topazdenoise.jpg" alt="" border="0" /></a></div>
</div>

The first detail is a spectacular win for Topaz Denoise. Just look at the shadow detail. Incredible.

<div class="container">
<div class="center"><a title="Detail 2 - Adobe Camera RAW" href="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/topaz_denoise4_01/d200-iso0900-night-pushed-detail2-raw.jpg" rel=lightbox[1]><img style="margin: 10pt 10px 10pt 10px;" src="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/topaz_denoise4_01/thumbs/d200-iso0900-night-pushed-detail2-raw.jpg" alt="" border="0" /></a><a title="Detail 2 - Noise Ninja" href="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/topaz_denoise4_01/d200-iso0900-night-pushed-detail2-noiseninja.jpg" rel=lightbox[1]><img style="margin: 10pt 10px 10pt 10px;" src="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/topaz_denoise4_01/thumbs/d200-iso0900-night-pushed-detail2-noiseninja.jpg" alt="" border="0" /></a><a title="Detail 2 - Topaz Denoise 4" href="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/topaz_denoise4_01/d200-iso0900-night-pushed-detail2-topazdenoise.jpg" rel=lightbox[1]><img style="margin: 10pt 10px 10pt 10px;" src="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/topaz_denoise4_01/thumbs/d200-iso0900-night-pushed-detail2-topazdenoise.jpg" alt="" border="0" /></a></div>
</div>

Now we finally get to an advantage of Noise Ninja. Both do quite well with the blue spot, but look at the digit "3" below the orange lever, look at the three letters right of it and look at the lines around them. They are clearly visible in RAW, Noise Ninja preserves some of it, but in Denoise almost all is gone.

<div class="container">
<div class="center"><a title="Detail 3 - Adobe Camera RAW" href="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/topaz_denoise4_01/d200-iso0900-night-pushed-detail3-raw.jpg" rel=lightbox[1]><img style="margin: 10pt 10px 10pt 10px;" src="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/topaz_denoise4_01/thumbs/d200-iso0900-night-pushed-detail3-raw.jpg" alt="" border="0" /></a><a title="Detail 3 - Noise Ninja" href="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/topaz_denoise4_01/d200-iso0900-night-pushed-detail3-noiseninja.jpg" rel=lightbox[1]><img style="margin: 10pt 10px 10pt 10px;" src="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/topaz_denoise4_01/thumbs/d200-iso0900-night-pushed-detail3-noiseninja.jpg" alt="" border="0" /></a><a title="Detail 3 - Topaz Denoise 4" href="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/topaz_denoise4_01/d200-iso0900-night-pushed-detail3-topazdenoise.jpg" rel=lightbox[1]><img style="margin: 10pt 10px 10pt 10px;" src="https://d25zfm9zpd7gm5.cloudfront.net/tutorials/topaz_denoise4_01/thumbs/d200-iso0900-night-pushed-detail3-topazdenoise.jpg" alt="" border="0" /></a></div>
</div>

We see the same thing in the final detail. Again the fine letters are gone in Topaz Denoise, while Noise Ninja preserves at least part of them.

That's it for today. I am one day behind and may be so for the rest of the week. I hope to catch up next weekend. In the next post, counting for Sunday, I will show you a few more interesting details.

 The Song of the Day is "<a target="_blank" href="http://www.lyricsmode.com/lyrics/d/diablo_swing_orchestra/pink_noise_waltz.html">Pink Noise Waltz</a>" from the Diablo Swing Orchestra's 2006 album "The Butcher's Ballroom". Fantastic music, hear it on <a target="_blank" href="http://www.youtube.com/watch?v=iwC4IFz512o">YouTube</a>.

