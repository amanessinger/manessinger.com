# The personal blog of Andreas Manessinger

This blog has been ported from WordPress using 
[a Go based converter](https://github.com/amanessinger/wordpress-xml-to-hugo). Almost 12 years 
of content and the whole comment history have been preserved.

The blog is now implemented in [Hugo](https://gohugo.io/). Sources 
are stored in 
[this GitHub repo](https://github.com/amanessinger/manessinger.com), 
and the blog is published on 
[Netlify.com](https://netlify.com/). Its images are stored in an
AWS S3 bucket and delivered via AWS Cloudfront.

There are three companion projects:

* [manessinger-comment](https://github.com/amanessinger/manessinger-comment) 
  is a web component implemented using 
  [Stencil](https://stenciljs.com/). It delivers comments via 
  AWS API Gateway to an AWS Lambda function, that does some
  basic checks and pushes incoming comments to an AWS SQS 
  FIFO message queue.
* [manessingercomment-receiver](https://github.com/amanessinger/manessingercomment-receiver)
  is the implementation of the Lambda function.
* [manessingercomment-harvester](https://github.com/amanessinger/manessingercomment-harvester)
  is a Go based program, that collects comments from the AWS SQS 
  queue and stores them in the local clone of 
  [this repo](https://github.com/amanessinger/manessinger.com)
  on my laptop. It also notifies me about new comments.