#!/usr/bin/env bash

if [ -d /Volumes/Photos ] ; then
  TARGET=/Volumes/Photos
elif [ -d /Volumes/Speedy ]; then
  TARGET=/Volumes/Speedy
else
  echo "No backup device" && exit 1
fi


## PICS #############################################################

cd ~/Pictures/Lightroom || exit 1
mkdir -p $TARGET/Lightroom/

for d in 20* ; do
  rsync -rv --size-only --delete "$d" "$TARGET/Lightroom/$d"
done

## Images in manessinger.com ########################################

cd ~/Pictures/images_in_manessinger.com || exit 1
mkdir -p $TARGET/images_in_manessinger.com/

for d in 20* ; do
  rsync -rv --size-only --delete "$d" "$TARGET/images_in_manessinger.com/$d"
done

## MUSIC ############################################################

cd ~/Music || exit 1
mkdir -p $TARGET/Music/

for d in Classic Misc other ; do
  rsync -rv --size-only --delete "$d" "$TARGET/Music/$d"
done

## SRC ##############################################################

cd ~/src || exit 1
mkdir -p $TARGET/src/

for d in * ; do
  rsync -rv --size-only --delete "$d" "$TARGET/Music/$d"
done

## GOOGLE DRIVE #####################################################

rsync -rv --size-only --delete ~/My\ Drive $TARGET/

## DONE #############################################################

## THUNDERBIRD MAIL #################################################

rsync -rv --size-only --delete ~/Library/Thunderbird/Profiles $TARGET/Thunderbird_Profiles

## DONE #############################################################

exit 0
