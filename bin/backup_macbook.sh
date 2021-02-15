#!/usr/bin/env bash

cd ~/Pictures/Lightroom || exit 1
mkdir -p /Volumes/Photos/Lightroom/

for d in 20* ; do
  rsync -rv --size-only --delete "$d" "/Volumes/Photos/Lightroom/$d"
done

cd ~/Music || exit 1
mkdir -p /Volumes/Photos/Music/

for d in Classic Misc other ; do
  rsync -rv --size-only --delete "$d" "/Volumes/Photos/Music/$d"
done
