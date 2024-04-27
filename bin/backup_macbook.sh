#!/usr/bin/env bash

if [[ "/Volumes/$1" != "/Volumes/" ]]; then
  if [[ ! -d "/Volumes/$1" ]] ; then
    echo "Backup target '/Volumes/$1' is invalid"
    exit 1
  fi
  TARGET="/Volumes/$1"
elif [ -d /Volumes/Photos ] ; then
  TARGET=/Volumes/Photos
elif [ -d /Volumes/Speedy ]; then
  TARGET=/Volumes/Speedy
else
  echo "No backup device" && exit 1
fi

echo "TARGET=$TARGET ... sleeping 5 seconds"
sleep 5

## PICS #############################################################

cd ~/Pictures/Lightroom || exit 1
mkdir -p $TARGET/Lightroom/

for d in 20* ; do
  rsync -rv --size-only --delete "$d" "$TARGET/Lightroom/"
done

## Images in manessinger.com ########################################

cd ~/Pictures/images_in_manessinger.com || exit 1
mkdir -p $TARGET/images_in_manessinger.com/

for d in 20* ; do
  rsync -rv --size-only --delete "$d" "$TARGET/images_in_manessinger.com/"
done

## Images in Pictures ###############################################

cd ~/Pictures || exit 1


for d in susi ; do
  rsync -rv --size-only --delete "$d" "$TARGET/"
done

## MUSIC ############################################################

cd ~/Music || exit 1
mkdir -p $TARGET/Music/

for d in Classic Misc other ; do
  rsync -rv --size-only --delete "$d" "$TARGET/Music/"
done

## SRC ##############################################################

cd ~/src || exit 1
mkdir -p $TARGET/src/

for d in * ; do
  rsync -rv --size-only --exclude=node_modules --delete "$d" "$TARGET/src/"
done

## GOOGLE DRIVE #####################################################

rsync -rv --size-only --delete ~/My\ Drive $TARGET/

## DONE #############################################################

## THUNDERBIRD MAIL #################################################

rsync -rv --size-only --delete ~/Library/Thunderbird/Profiles $TARGET/Thunderbird_Profiles

## DONE #############################################################

exit 0
