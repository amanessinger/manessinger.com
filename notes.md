# Random notes for my own use

Create a yml file with posts and lead images:

```
( 
  cd content
  grep -r '/0600x0600/' post | \
      perl -ne '/^([^:]+):/ && print "$1: "; \
                /(https:\/\/d25zfm9zpd7gm5.cloudfront.net\/0600x0600\/[^"]+)/ && print "$1\n"' | \
      sed -e 's/0600x0600/0150x0150/'
)  > data/lead_images.yml
```