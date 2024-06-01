#!/usr/bin/env bash

##########################################################################
#
# Configuration variables
#
IN_BASE_DIR=$(dirname $(dirname $0))

#
# Base directory where we convert
#
BASEDIR=${IN_BASE_DIR}/convert
[ ! -d $BASEDIR ] && mkdir -p $BASEDIR

#
# Directory where we expect the input
#
INDIR=${IN_BASE_DIR}/tmp
[ ! -d $INDIR ] && mkdir -p $INDIR

#
# Name of the AWS S3 target bucket
#
BUCKET=manessingercomimages
#
##########################################################################

#
# Make sure the input directory has input
#
files=$(echo "${INDIR}"/*)
if [[ "$files" = "${INDIR}/*" ]] ; then
    echo "$0: input directory ${INDIR} exists but is empty"
    exit 1
fi

cd ${BASEDIR}

#
# Setup structure and copy input files
#
rm -rf out
rm -rf tmp
mkdir tmp
cp ${INDIR}/*.jpg tmp/
cp ${INDIR}/*.JPG tmp/

#
# Do the conversions
#
(
	for img in tmp/* ; do
	    for size in \
			0150x0150 0600x0600 1200x1200
		    do
		    imgbase=$(basename ${img})
		    year=$(echo ${imgbase} | sed -e 's/^\(....\).*/\1/')
		    expr "x${year}" : "x2[0-9][0-9][0-9]" > /dev/null
		    if [[ $? != 0 ]] ; then
			    year=misc
		    fi
		    echo "Converting ${img} to size ${size}"
		    mkdir -p out/${size}/${year}
		    magick \
          ${img} \
          -filter Lanczos \
          -resize "${size}>" \
          -unsharp 1x1+0.2+0.05 \
          out/${size}/${year}/${imgbase}
		    echo "  done."
		    echo ""
		done
    done
)

#
# Transfer results to server
#
(
    cd out
	echo "Uploading files to AWS S3"
	for d in * ; do
        aws s3 cp --acl public-read ${d} s3://${BUCKET}/${d} --recursive
    done
    echo "Done!"
)

#
# Clean up
#
rm -rf out
rm -f tmp/*

exit 0
