---
title: "1091 - Missing You"
url: /2009/10/1091-missing-you.html
publishDate: Sun, 11 Oct 2009 00:14:02 +0000
date: 2009-10-11 02:14:02
categories: 
  - "sigma-281-8"
tags: 
  - "architecture"
  - "austria"
  - "bicycle"
  - "nikon-d300"
  - "programming"
  - "scooter"
  - "topaz-adjust"
  - "topaz-detail"
  - "vienna"
  - "wien"
---
<a target="_blank" href="https://d25zfm9zpd7gm5.cloudfront.net/1200x1200/2009/20091008_083428_ps.jpg"><img src="https://d25zfm9zpd7gm5.cloudfront.net/0600x0600/2009/20091008_083428_ps.jpg" /></a>

Here's another bunch of images made last week in Vienna. The bicycle with the poisonous red is from Tuesday morning, I just couldn't pass it, the others are from Thursday. It is Saturday night now, it's raining outside, I am uploading 340 images, six sizes each, to my website and have done so for nine hours. ADSL is a bitch 🙂

<a target="_blank" href="https://d25zfm9zpd7gm5.cloudfront.net/1200x1200/2009/20091006_171108_ps.jpg"><img style="margin: 0pt 0px 0pt 10px; float: right;" src="https://d25zfm9zpd7gm5.cloudfront.net/0150x0150/2009/20091006_171108_ps.jpg" alt="" border="0" /></a>  Uploading again? Why that? Oh, in the morning, after I had processed these four images, I found some images missing from some posts, sometimes thumbnails, sometimes the main image. With the current layout this seems to be a problem in certain cases. I don't use "width" attributes on my images (which I should, I know) and on certain posts the browser simply hung indefinitely, seemingly refusing to carry on without an actual image and its width. That's obviously pretty bad 🙂

I made a check: from an export file of my blog I extracted the image "SRC" attributes pointing to "manessinger.com". The result was a file with 1887 URLs, one URL per line.

<pre class="codeexample">#!/bin/sh
XMLFILE=$1
if [ "x$XMLFILE" = x ] ; then
   echo "usage: $0 &lt;xmlfile&gt;"
   exit 1
fi
cat $XMLFILE | sed -e 's/ /\n/g' | \
    egrep 'src="https://d25zfm9zpd7gm5.cloudfront.net/' | cut -d'"' -f2</pre>

I'm printing the code here without explanation, those for whom it may be useful, will understand it anyway.

The next step was to check if all of these URLs are present and which are not. The result was a file with the file names (tail of the URL) of the files that were missing. Again here's the code, a Perl script expecting an input file with one URL per line, producing an output file with one filename per missing image.

<pre class="codeexample">#!/usr/bin/perl                                             

use strict;
use warnings;
use LWP::UserAgent;
use HTTP::Request;
use File::Basename;
use Time::HiRes qw(usleep);

# arguments checking
if (($#ARGV != 0) || (! -f $ARGV[0])) {
    print "usage: $0 &lt;url-per-line-file&gt;\n";
    exit(1);
}

# construct a user agent
my $ua = LWP::UserAgent-&gt;new();
$ua-&gt;agent("");
$ua-&gt;timeout(10);

open(URLS, "&lt;".$ARGV[0]);
while (&lt;URLS&gt😉 {
    chomp;
    my $url = $_;
    my $new_url = grab_image($ua, $url);
}
exit(0);

sub grab_image {
    my $ua  = shift;
    my $url = shift;

    my $request = HTTP::Request-&gt;new(HEAD=&gt;$url);
    my $response = $ua-&gt;request($request);

    my $base = basename($url);
    if ($response-&gt;is_success) {
        print STDERR ("$base\n");
    } else {
        print "ERROR\@$url\n\t".$response-&gt;status_line."\n\n";
        print STDERR ("$base MISSING\n");
        open(MISSING, "&gt;&gt;missing.txt");
        print MISSING "$base\n";
        close(MISSING);
    }
    usleep(100);
}</pre>

Yes, I could have given the file reference as a parameter 🙂 Anyway. This is slightly more convenient than checking 1887 URLs manually, isn't it? The result were a whopping 340 URLs of missing images. Oops!

<a target="_blank" href="https://d25zfm9zpd7gm5.cloudfront.net/1200x1200/2009/20091008_083933_ps.jpg"><img style="margin: 0pt 10px 0pt 0px; float: left;" src="https://d25zfm9zpd7gm5.cloudfront.net/0150x0150/2009/20091008_083933_ps.jpg" alt="" border="0" /></a> Then it dawned on me: I had simply uploaded all images from my image database that were tagged "smugmug". I have mostly given up tagging images. It's convenient to know exactly where you've taken a certain images, find all images with a sundown taken in Italy, find all images showing a certain person, etc, but when I tag images that thoroughly, it takes me 15 minutes per day. Well, maybe I should do it again, mostly ignoring the backlog.

Anyway. While I had believed that the tag "smugmug" was the one that I had always given, I must have been much more lazy than I had thought. Indeed, some checks in <a target="_blank" href="http://www.photools.com/">IMatch</a>, my image database, revealed that the missing images were not tagged and thus had not been uploaded.

Now what? Manually finding 340 images, tagging them and copying them to my conversion directory? Possible but tedious. Thankfully IMatch can be programmed. I had to learn it, but learning it and writing a program was still faster than doing it manually.

<pre class="codeexample">Sub Main
	' We need an active database to run this script
	Dim db As Database
	Set db = Application.ActiveDatabase
	If db Is Nothing Then
		MsgBox "Please open a database first"
		Exit Sub
	ElseIf db.ReadOnly Then
		MsgBox "The database is read-only!"
		Exit Sub
	End If

	' Check if the result category exists
	Dim rescat As Category
	Set rescat = db.Categories("UNTAGGED")
	If rescat Is Nothing Then
		MsgBox "Please create a category 'UNTAGGED'"
		Exit Sub
	End If

	If Not rescat.Images.Count = 0 Then
		If MsgBox("Clear the category?",vbYesNo) = vbYes Then
			' Avoid flicker when updating the category!
			db.Redraw = False
			Dim rci As Image
			For Each rci In rescat.Images
				rescat.RemoveImage rci
			Next rci
			db.Redraw = True
		End If
	End If

	Dim names(339) As String
        names(0) = "20061017_161745.jpg"
        names(1) = "20061020_173954.jpg"
        ' ... and so on until
        names(338) = "20090919_173043_ps.jpg"
        names(339) = "20090925_154035.jpg"

	Dim i As Long
	For i = LBound(names) To UBound(names)
		' Find the file in the database
        Set img = Nothing
        Set iset = db.GetImages(names(i))
        If Not iset Is Nothing Then
            If iset.Count > 0 Then
                Set img = iset(1)
            End If
        End If
        If Not img Is Nothing Then
			rescat.AddImage(img)
		End If
	Next
End Sub</pre>

Believe it or not, this was my first Basic program. Hmm ... well, not really. Now that I think of it, 12 years ago I have written a code generator that allowed Visual Basic programmers on PCs to call C and Cobol subroutines on UNIX and VMS servers via RPC. The tool had generated client- and server-side stubs, thus I already have written Basic, at least indirectly via a program 🙂

<a target="_blank" href="https://d25zfm9zpd7gm5.cloudfront.net/1200x1200/2009/20091008_170058_ps.jpg"><img style="margin: 0pt 0px 0pt 10px; float: right;" src="https://d25zfm9zpd7gm5.cloudfront.net/0150x0150/2009/20091008_170058_ps.jpg" alt="" border="0" /></a> Now I had all missing images tagged "UNTAGGED" and could export them to my conversion directory, ready for the resize-and-upload script to process them. And that's what this script still does. It's not the resizing, it's the uploading. On the other hand, I don't care. It runs in the background and I'm free to do whatever I want.

In the afternoon, after I had started the uploader, I drove to the lake. Weather was fine, and really, the water was still ... well ... tolerable. It's quite cool now, but it was in no way uncomfortable.


Here we are. I will post more code examples during the next week. If you don't care about code, just ignore it. One or the other fragment may be valuable for someone though.

The Song of the Day is "<a target="_blank" href="http://www.lyricsmode.com/lyrics/t/the_mavericks/missing_you.html">Missing You</a>" from the 1995 Mavericks album "Music for All Occasions". When I first heard the Mavericks, I was not sure if this is a joke or if they really mean it. It sounded so fifties retro-style, so much like "<a href="http://www.youtube.com/watch?v=YpsLPGIKHXo">Kottan's Kapelle</a>" (a satirical Autrian TV series about Vienna's police), that I was not sure what to make of it. I liked it though and have bought one more Mavericks CD. See a video on <a target="_blank" href="http://www.youtube.com/watch?v=33auXehRQUc">YouTube</a>.
