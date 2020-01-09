#!/usr/bin/env bash

cd ~/Pictures/Lightroom || exit 1

for d in 20* ; do
  rsync -rv --size-only --delete "$d" "/Volumes/Photos/Lightroom/$d"
done
