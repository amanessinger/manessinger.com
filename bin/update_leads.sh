#!/usr/bin/env bash

cd $(dirname $(dirname $0))

if [ ! -d data -o ! -d content ] ; then
    echo "Dirctories 'data' and/or 'content' not found. Not in Hugo project dir?"
    exit 1
fi

(
  cd content
  grep -r '/0600x0600/' post | \
      perl -ne '/^([^:]+):/ && print "$1: "; \
                /(https:\/\/d25zfm9zpd7gm5.cloudfront.net\/0600x0600\/[^"]+)/ && print "$1\n"' | \
      sed -e 's/0600x0600/0150x0150/'
)  > data/lead_images.yml

exit 0
