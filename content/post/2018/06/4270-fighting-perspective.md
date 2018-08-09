---
title: "4270 - Fighting Perspective"
url: /2018/06/4270-fighting-perspective.html
publishDate: Thu, 28 Jun 2018 18:00:23 +0000
date: 2018-06-28 20:00:23
categories: 
  - "olympus-m-zuiko-digital-ed-12-40mm-f2-8-pro"
tags: 
  - "architecture"
  - "germany"
  - "nuremberg"
  - "olympus-om-d-e-m1-mk-ii"
---
<div class="container">
<div class="center"><a target="_blank" href="https://d25zfm9zpd7gm5.cloudfront.net/1200x1200/2017/20170620_165536_lr.jpg"><img class="webfeedsFeaturedVisual" src="https://d25zfm9zpd7gm5.cloudfront.net/0600x0600/2017/20170620_165536_lr.jpg" /></a></div>
</div>
<br />

You may wonder what became of my blog project.

Well, I've tried <a href="https://hexo.io/" rel="noopener" target="_blank">Hexo</a> and it did convert the blog. Around 4300 files were converted to <a href="https://en.wikipedia.org/wiki/Markdown" rel="noopener" target="_blank">Markdown</a> in less more than a few minutes. I did it in a virtual machine in <a href="https://www.virtualbox.org/" rel="noopener" target="_blank">VirtualBox</a>, because I hate it to install test software directly on my Mac.

Then I wanted to use Hexo for conversion of the Markdown files to static HTML.

Oh my! After slightly more than one hour Hexo crashed, running out of memory. This was while still loading the files. Not a single HTML file had yet been produced.

<div style="background-color:#DDDDDD; color:black;
padding:20px; border:solid black 1px;"><code>devop@localhost ~/hexo_migration $ hexo generate
INFO  Start processing
INFO  Files loaded in 6.88 min

&lt;--- Last few GCs ---&gt;

[4351:0x3310b00]  5092349 ms: Mark-sweep 993.1 (1673.5) -&gt; 993.1 (1673.5) MB, 943.4 / 0.1 ms  allocation failure GC in old space requested
[4351:0x3310b00]  5093467 ms: Mark-sweep 993.1 (1673.5) -&gt; 993.1 (1626.5) MB, 1043.3 / 0.1 ms  last resort GC in old space requested
[4351:0x3310b00]  5094518 ms: Mark-sweep 993.1 (1626.5) -&gt; 993.1 (1609.5) MB, 1049.8 / 0.1 ms  last resort GC in old space requested


&lt;--- JS stacktrace ---&gt;

==== JS stack trace =========================================

Security context: 0x2e6737ba5879 &lt;JSObject&gt;
    1: /* anonymous */ [/home/devop/hexo_migration/node_modules/lodash/lodash.js:~12637] [pc=0x2da8b25db474](this=0x1927fa58c209 &lt;JSGlobal Object&gt;,object=0x2b86843ba4e1 &lt;Object map = 0x1642cec1f899&gt;,source=0x2b86843b9721 &lt;Object map = 0x1642cec1f899&gt😉
    2: arguments adaptor frame: 4-&gt;2
    3: /* anonymous */ [/home/devop/hexo_migration/node_modules/lodash/lodash.js:~4855] [pc=0x2da8b25ba7fb](t...

FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory
 1: node::Abort() [hexo]
 2: 0x8c20ec [hexo]
 3: v8::Utils::ReportOOMFailure(char const*, bool) [hexo]
 4: v8::internal::V8::FatalProcessOutOfMemory(char const*, bool) [hexo]
 5: v8::internal::Factory::NewCode(v8::internal::CodeDesc const&, unsigned int, v8::internal::Handle&lt;v8::internal::Object&gt;, bool, int) [hexo]
 6: v8::internal::CodeGenerator::MakeCodeEpilogue(v8::internal::TurboAssembler*, v8::internal::EhFrameWriter*, v8::internal::CompilationInfo*, v8::internal::Handle&lt;v8::internal::Object&gt😉 [hexo]
 7: v8::internal::compiler::CodeGenerator::FinalizeCode() [hexo]
 8: v8::internal::compiler:😛ipelineImpl::FinalizeCode() [hexo]
 9: v8::internal::compiler:😛ipelineCompilationJob::FinalizeJobImpl() [hexo]
10: v8::internal::Compiler::FinalizeCompilationJob(v8::internal::CompilationJob*) [hexo]
11: v8::internal::OptimizingCompileDispatcher::InstallOptimizedFunctions() [hexo]
12: v8::internal::StackGuard::HandleInterrupts() [hexo]
13: v8::internal::Runtime_StackGuard(int, v8::internal::Object**, v8::internal::Isolate*) [hexo]
14: 0x2da8b1f042fd
Aborted (core dumped)
devop@localhost ~/hexo_migration $</code></div><br />

I'm pretty sure that I would have had a better result natively on my 16GB Macbook Pro. The virtual machine had only 2GB of memory and that is seemingly not enough to load my blog when converted to Javascript objects.

I've made no further inquiries, I didn't try to give the machine more memory, I just gave up on Hexo. It may be unfair, but trust can be damaged very quickly 🙂
