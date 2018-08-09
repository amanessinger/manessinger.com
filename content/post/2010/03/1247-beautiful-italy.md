---
title: "1247 - Beautiful Italy"
url: /2010/03/1247-beautiful-italy.html
publishDate: Sun, 14 Mar 2010 20:52:22 +0000
date: 2010-03-14 21:52:22
categories: 
  - "tamron-17-502-8-vc"
tags: 
  - "friuli"
  - "italy"
  - "landscape"
  - "nikon-d300"
---
<a target="_blank" href="https://d25zfm9zpd7gm5.cloudfront.net/1200x1200/2010/20100313_160255_ps.jpg"><img src="https://d25zfm9zpd7gm5.cloudfront.net/0600x0600/2010/20100313_160255_ps.jpg" /></a>

See the flowers? Oh, that's only an hour by car from Villach. We took the highway straight down to Italy, left just south of Udine, and there it was: an approximation of spring 🙂

<a target="_blank" href="https://d25zfm9zpd7gm5.cloudfront.net/1200x1200/2010/20100313_164215_ps.jpg"><img style="margin: 0pt 10px 0pt 0px; float: left;" src="https://d25zfm9zpd7gm5.cloudfront.net/0150x0150/2010/20100313_164215_ps.jpg" alt="" border="0" /></a> Of course for Italians this is still winter, but as soon as you leave the Alps behind, the climate gets mild.

We didn't search for anything special, just a little bit of cruising around in the sun, enjoying the afternoon warmth of around 15 degreen Celsius.

Other than that, my mind is full of plans at the moment. Software. If you are only interested in photography, I suggest you stop reading now 🙂

<a target="_blank" href="https://d25zfm9zpd7gm5.cloudfront.net/1200x1200/2010/20100313_162817_photomatix_ps.jpg"><img style="margin: 0pt 0px 0pt 10px; float: right;" src="https://d25zfm9zpd7gm5.cloudfront.net/0150x0150/2010/20100313_162817_photomatix_ps.jpg" alt="" border="0" /></a> Every once in a while I make a big project, that then occupies me for a few years. It's always about software engineering tools. The first big one was a tool for specifying remote procedure call interfaces, and then to generate code for all the glue, i.e. a server main program that had only to be linked with the implementations of the remote procedures, and a client library for calling such remote procedures, without having to know where the servers are, without any initialization mumbo jumbo. The tools produced server stubs for C and Cobol, and client stubs for C and Visual Basic. The project was implemented in C and Tcl/Tk.

<a target="_blank" href="https://d25zfm9zpd7gm5.cloudfront.net/1200x1200/2010/20100313_164531_ps.jpg"><img style="margin: 0pt 10px 0pt 0px; float: left;" src="https://d25zfm9zpd7gm5.cloudfront.net/0150x0150/2010/20100313_164531_ps.jpg" alt="" border="0" /></a> The second big project was a tool and method for what we now call Model Driven Design. About ten years ago I had to construct a relatively big web application. I had six months of time, and I knew that it was damn short, given my lack of tools. For political reasons I had to use a primitive Perl CGI framework, and I spent five months to develop a development method and a code generation tool on top. Then I used the framework to make the whole application in the remaining month.

Basically you defined an application as a set of pages, available to a number of roles. Every role has at least one start page, events bring you from page to page, an event normally a button press. Think of it as graphs. For every page transition you have to write a piece of code that processes the input from the last page and fills in the blanks for the next page. If you don't write the processing code for such a transition, nothing gets processed and the next page is initialized with default values or blanks. Thus the system was perfectly suited for prototyping as well.

It's a little more elaborate than that, but the principle was to specifdy as much as possible in XML, and then to generate everything but the actual application logic. Of course if you know that much about an application, you can automatically generate all sorts of useful documentation. This one was implemented in Perl.

 Since then I have worked shortly in Python (the reason for my profound hate of that language) and now for years in Java. I like Java, I like Eclipse, but I miss my Model Driven Design framework. With Eclipse and Java, the tools have become better, but the category of problems that I solve now, is actually more primitive. I write more glue code, things have not improved. Thus I think it's time to do it once more, to go and make a big software project.

Of course I am not the only one, there are lots and lots of MDD projects, a lot of clever people working in that arena, but I guess I have a sound understanding of the field, tons of experience, a strong vision, and, building upon two big projects based on specification and code generation, I should be able to come up with some very useful things. Whatever, I'll try.

The Song of the Day is "Beautiful Italy" from Franz Lehar's Paganini, sung by the great Richard Tauber in 1937. Hear it on <a target="_blank" href="http://www.youtube.com/watch?v=HoBSwYUp9P8">YouTube</a>.

