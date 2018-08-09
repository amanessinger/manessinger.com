---
title: "1635 - In Case You Wonder Why"
url: /2011/04/1635-in-case-you-wonder-why.html
publishDate: Sun, 10 Apr 2011 01:38:32 +0000
date: 2011-04-10 03:38:32
categories: 
  - "panasonic-dmc-lx5"
tags: 
  - "architecture"
  - "austria"
  - "carinthia"
  - "karnten"
  - "spam"
  - "square"
  - "villach"
---
<div class="container">
<div class="center"><a target="_blank" href="https://d25zfm9zpd7gm5.cloudfront.net/1200x1200/2011/20110409_134427_ps.jpg"><img src="https://d25zfm9zpd7gm5.cloudfront.net/0600x0600/2011/20110409_134427_ps.jpg" /></a></div>
</div>
<br />

Do you have a blog? Quite a lot of my readers do, and I thought I'd better relate something that I've found out today. Sort of a warning.

Do you get comment SPAM? Well, if you use WordPress, you most likely use Akismet to battle SPAM, and Akismet is really quite successful at it. Of course neither my reader counts (around 140 per day, around 200 page views on my photoblog, around 220 visits, around 320 page views on my programming blog) nor the number of comments are so high that I couldn't do without it, but Akismet has made my blogging life quite easy.

There are different kinds of comment SPAM and due to the different natures of email and blogs, they are slightly different from what you may encounter in your inbox. 

Some typical email SPAM types wouldn't work as blog comments. This is certainly true of all types of <a target="_blank" href="http://en.wikipedia.org/wiki/Advance-fee_fraud">advance-fee fraud</a>, but also the typical <a target="_blank" href="http://en.wikipedia.org/wiki/Phishing">phishing attacks</a> make no sense. Both need the illusion of private messages being sent to you. With comments being public by nature, that doesn't make sense.

A type that is common to email and comment SPAM is what I call the honest attempt to sell. Most of the time it's something that would enlarge body parts or lengthen durations of inter-personal links, but whatever the product, the presentation is direct and up-front. You get some key words, sometimes embedded in completely unrelated prose, and finally you get links to the sites selling the stuff. Honest and straight-forward.

A variant is SPAM that doesn't want to sell, but that wants to lure you to a page where your computer will get infected with <a target="_blank" href="http://en.wikipedia.org/wiki/Malware">malware</a>. It's less honest, less straight-forward, but it is a variant anyway, because both types want blog visitors to follow the links.

Then there is the other prototypical kind of comment SPAM, and that's a blog-only type. It's about building up links to the spammer's sites, it's about increasing one's Google page rank. Here the spammer is not interested in blog visitors following the links, the only visitor they care about is the Google bot. Therefore they place such comments preferably on older blog posts, they try to be the only commenter on the post, in short, they prefer their comment not being read by humans at all.

As a commenter you have typically two ways to place a link: directly in the body of the comment or as the commenter's home page. In trying to combat sales SPAM, blog software and anti-SPAM plugins typically limit the number of links allowed in a comment before it is flagged as SPAM, thus the link network builders tend to use the home page link, because as a blog owner you can't really block those links. You want to encourage people to comment, and one of the incentives is the link back to their site.

After this somewhat lengthy introduction, what would you make of this comment, one in a series of similar comments that I got yesterday?

<blockquote>
<code>Author : Bertie (IP: 193.90.12.26 , hist.multinet.no)
E-mail : 432@www.nak-nordhorn.de
URL    : http://www.yahoo.com/
Comment: edfGDT Kudos! What a neat way of thinking about it.</code>
</blockquote>

Interesting, huh? The email is only visible for the moderator and it is doubtlessly made up. The author's name is made up as well, the IP address may be from the actual connection and thus correct, but as SPAM is never sent from the spammer's computer, it can't be used to track him down. It won't be part of the comment on the blog either, thus it does not matter.

What remains are the URL and the body of the comment. In about ten comments to as many different older posts, the URL was either <a target="_blank" href="http://www.bing.com">http://www.bing.com</a>, or as in this case <a target="_blank" href="http://www.yahoo.com">http://www.yahoo.com</a>. I guess, even though Microsoft partners with Yahoo recently, we can take for granted that this is not an attempt of Microhoo to increase their Google page rank. Obviously the link is not used here, the field was only filled out because SPAM bots like to fill out form fields.

The message itself consists of two parts, one six character token at the beginning and then a rather generic compliment. The compliment is directed at the moderator, as an enticement to get the message approved, but also to just have any text at all. Thus obviously it is about the token.

Author name, Token and compliment were different in all comments, only the home page URL was mostly the same. Actually it was the URL that immediately caught my attention, not the token, that gave away the spammy nature. Of course after the second comment it was clear, but what was not clear, was the question: WHY???

It took me some time, in my research I found an "Ultimate Wordpress Comment Spammer" (google that phrase, it's interesting), but that all was about link building or selling, never about SPAM without links.

In the end I found the solution. It is not verified, but I am pretty convinced that I'm right.

The settings that I use on my blog, what is most convenient for visitors and what is fairly safe for the blog as well, these settings are a WordPress setup where I set comments to "moderated" in general, but allow unmoderated comments for a particular visitor, after the first comment of that visitor has been approved. I don't know how WordPress identifies visitors, I suppose it is just the private email address. The attack is directed at exactly this quite common and safe blog setup.

It's a two part attack. First you place a comment with a generated, unique email address and a generated unique token. You do this in parallel on many blogs and on many posts. You save the combination of blog, email address and token in a database, and then you wait for some days. 

We all know, Google is your friend, and that's why the spammer keeps quiet for some time. It's to let Google do its work. After a few days they just have to search Google for the unique tokens. Those that show up are on blogs where the moderators have approved the posts. If the blog setup is like on mine, the blog is now fair game. No further comments from that user will be subject to moderation, now the payload can be delivered, and that's again "normal" SPAM.

The attack is still easy to identify as SPAM, even though it needs some pondering to realize what's the purpose. I expect it to improve though.

One obvious improvement would be to use other URLs. I often don't have the time to follow a commenter's URL, thus it may go undetected.

The second thing is the token. It is easy to spot "edfGDT" or "xzaKRB" as synthetic tokens, but what about 

<blockquote>
<code>Author : Bernie (IP: 193.90.12.26 , hist.multinet.no)
E-mail : 432@www.nak-nordhorn.de
URL    : http://www.berniephoto.com/
Comment: Kudos! What a neat way of thikning about it.</code>
</blockquote>

Here is no obvious token, only a typo in "thinking". Sure, Google has 26,500 results for "thikning", but up to now, there was not a single occurrence on manessinger.com, and Google allows you to restrict searches to a certain domain. 

In the end I think we have lost another battle against the spammers. Carefully executed, this attack can't be blocked automatically, because there are no indicators left. Unfortunately there is also no easy way for the moderator to decide. Generic comments are common. I make them at times and so do my visitors. 

Take <a target="_blank" href="http://photomontana.net/">PJ</a>'s comment to "<a target="_blank" href="/2011/04/1630-some-excuse-to-use-mississippi-half-step-uptown-toodloo.html#comments">1630 - Some Excuse To Use "Mississippi Half-Step Uptown Toodloo"</a>". PJ writes 

<blockquote><em>I love this photo. The lines and angles are superb.</em></blockquote>

Sure, the comment refers to a photo, but from the tags on my blog, it is easy to automatically classify it as a photoblog. The comment is a compliment, but I often get compliments. It speaks about lines and angles, but lines and angles are quite common in photographs. In fact, there is no substantial difference between PJ's comment and the fictional Bernie's, apart from the fact that PJ's comment contains no spelling error or typo, but typos are common as well.

Sorry, PJ, for singling you out, hope you don't mind.


Once again, this is not verified, but I think, though the technical details may vary, the general attack scenario is correct. I can't think of anything else that would make sense.

So here's the warning: Just keep an eye on the messages that you moderate, and remember that it does not take a link to make a message SPAM.

The Image of the Day is rather unrelated. I made it today in Villach. The Song of the Day is "Pourquoi (Why)" from Vieux Diop's 2000 album "Afrika Wassa". I couldn't find this beautiful song on YouTube, thus I have <a href="http://www.youtube.com/watch?v=ULl0WDC2c7A">uploaded it myself</a>. Enjoy!
