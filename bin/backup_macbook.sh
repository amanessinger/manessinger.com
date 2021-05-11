#!/usr/bin/env bash

## PICS #############################################################

cd ~/Pictures/Lightroom || exit 1
mkdir -p /Volumes/Photos/Lightroom/

for d in 20* ; do
  rsync -rv --size-only --delete "$d" "/Volumes/Photos/Lightroom/$d"
done

## Images in manessinger.com ########################################

cd ~/Pictures/images_in_manessinger.com || exit 1
mkdir -p /Volumes/Photos/images_in_manessinger.com/

for d in 20* ; do
  rsync -rv --size-only --delete "$d" "/Volumes/Photos/images_in_manessinger.com/$d"
done

## MUSIC ############################################################

cd ~/Music || exit 1
mkdir -p /Volumes/Photos/Music/

for d in Classic Misc other ; do
  rsync -rv --size-only --delete "$d" "/Volumes/Photos/Music/$d"
done

## SRC ##############################################################

cd ~/src || exit 1
mkdir -p /Volumes/Photos/src/

for d in * ; do
  rsync -rv --size-only --delete "$d" "/Volumes/Photos/Music/$d"
done

## GOOGLE DRIVE #####################################################

rsync -rv --size-only --delete ~/Google\ Drive /Volumes/Photos/Google\ Drive

## DONE #############################################################

exit 0
