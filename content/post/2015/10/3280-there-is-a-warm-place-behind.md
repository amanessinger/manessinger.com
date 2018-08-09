---
title: "3280 - There Is A Warm Place Behind"
url: /2015/10/3280-there-is-a-warm-place-behind.html
publishDate: Sun, 11 Oct 2015 18:00:37 +0000
date: 2015-10-11 20:00:37
categories: 
  - "olympus-m-zuiko-digital-ed-40-150mm-f2-8-pro"
tags: 
  - "austria"
  - "gansehaufel"
  - "olympus-om-d-e-m1"
  - "vienna"
  - "wall"
  - "wien"
---
<div class="container">
<div class="center"><a target="_blank" href="https://d25zfm9zpd7gm5.cloudfront.net/1200x1200/2015/20150830_165321_lr.jpg"><img class="webfeedsFeaturedVisual" src="https://d25zfm9zpd7gm5.cloudfront.net/0600x0600/2015/20150830_165321_lr.jpg" /></a></div>
</div>
<br />

Today we had elections in Vienna. FPÖ, the former party of Jörg Haider, now the party of his imitator Heinz Christian Strache, had used the refugee crisis to transport their xenophobic messages. In the end it went quite well. Red/Green was the government for the last years, the Greens more or less have held their position, Red has lost much less than the forecasts had said. All in all it could have been much worse. I'm quite happy with the result.

<a href="/2015/10/3274-complications.html" target="_blank">Six days ago</a> I told you about my problems with the El Capitan upgrade. Well, it turned out to be much, much worse.

At almost the same time Adobe updated Lightroom CC to version 2015-2. It was a disaster. Nothing worked any more. At least for me the program was completely unusable.

On <a href="http://blogs.adobe.com/lightroomjournal/2015/10/update-on-lightroom-2015-2-lightroom-6-2-release.html" target="_blank">Lightroom Journal</a> Adobe quickly posted a hint for how to temporarily "fix" the program crashes by unchecking a certain new option in the preferences. This was not my problem though.

I posted the following angry comment as response to Adobe's article:

<blockquote><em>Well, at least for me on a Macbook Pro Retina, Mid 1025, i7@2.5GHz, 16GB Memory, 512GB SSD, Lightroom has become completely unusable. It is so unusable that I’ve not even seen the new import dialog yet.

The program behaves completely erratic:

Scrollbars in the side panels stop reacting to the scroll wheel of my Logitech USB mouse but still reacht on scrolling via the touchpad or via grabbing and dragging the scrllbar. Or sometimes not.

I open an image from the grid, click into it to bring it to 1:1, click again out, repeat a few times, and suddenly clicking into the image to zoom to 1:1 does not center the image around the click any more, the navigator does not work any more and I can’t drag the image around. Once in that state, clicking throuch images in the grid updates the image highlight in the grid and the image on the secondary display, but it does not update the panels (Navigator, image data like Title or Filename on the right panel, …)

Close LR CC 2015.2, open it again, repeat. It’s completely impossible to do any work. I guess I’ll have to revert to 2015.1.

On the feature side: I see that you’re looking for new customers and want to please them, but forget about taking features away from your professional or serious amateur users. There is no way to drive people away faster, no way to destory the biggest customer base more securely.

Forget about the changes to import. People rely on the way things used to work. Their workflows rely on it, their productivity relies on it and for many their income depends on productivity. Every feature you’ve removed is relied upon by someone. You can’t take that away. That’s a big, big no-go. Bigger companies than Adobe have failed for their long-shown disregard for their customers.

If you really, really want the new dialog, make it an alternative and support the old one ad infinitum.

All in all this upgrade was my first since Lightroom 3 that caused any problems at all. I’ve always praised Adobe as a company that knows how to create stable work environments. At least on the CS side. Flash is another thing 🙂

Anyway. This time it was devastating. Probably the worst upgrade I’ve ever seen for any kind of software. It reduced a stable workhorse to complete garbage. Please fix it. Soon. I rely on it and I pay for it.</em></blockquote>

It got censored away.

On Friday night Adobe finally announced LR CC 2015-2.1, and a few hours later they officially apologized to their customers. My CC desktop gadget didn't show any updates though, and on Saturday afternoon I couldn't wait any longer. I wiped Lightroom (along with the old standalone Lightroom 5, that I had kept as a backup. I also wiped everything under /Library/Preferences, that was connected to Lightroom, for instance com.adobe.Lightroom6.plist. Those are user preferences files containing information about panel layout and such things. I figured that my user interface problems (panels not updating, etc.) might be connected to damaged or badly migrated preferences files.

Then I just installed Lightroom again via the CC Desktop app. This was presented as an "Upgrade", because in the meantime CC Desktop had found 2015-2.1 on Adobe's servers.

What can I say? It worked. I am not sure what the fix really was, but as I had had completely different problems than everyoen else (a garbled and disfunctional user interface vs crashes), I strongly suppose uninstalling first and then installing from scratch may have been needed.

Whatever it was, it points to a fragile architecture as the root cause. Let me guess: code or at least configuration parameters in preferences files blindly evaluated, likely migration scripts running during a program upgrade, that may damage the preferences files and leave them in random unsupported states.

Of course I don't know, but I think, I am pretty sure indeed, that I have upgraded OS X and Lightroom exactly as I was instructed to do. After all, there were not many choices anyway.

That's scary. As a user you do nothing wrong. You go the default path, the one path that should always work. And then it fails. 

Anyway. This problem is solved, now I just have to get my modem working again. This is not that badly needed, because the train form Vienna to Villach has WiFi, and for the other direction, a train coming from Italy that has not, I can always use my phone as WiFi hotspot.
