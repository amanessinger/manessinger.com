#!/usr/bin/env bash

##########################################################################
#
# Configuration variables
#
# Input base directory, for me a VirtualBox shared folder
#
IN_BASE_DIR=~/Website
if [[ -d /mnt/c/Users/micro/Website ]] ; then
    IN_BASE_DIR=/mnt/c/Users/micro/Website
fi

#
# Base directory where we convert
#
BASEDIR=${HOME}/convert
#
# Name of the AWS S3 target bucket
#
BUCKET=manessingercomimages
#
##########################################################################

#
# Make sure the input directory exists and has input
#
if [[ ! -d ${IN_BASE_DIR}/tmp ]] ; then
    sudo mount ${IN_BASE_DIR}
fi
if [[ ! -d ${IN_BASE_DIR}/tmp ]] ; then
    echo "$0: ${IN_BASE_DIR}/tmp does not exist, mount may have failed"
    exit 1
fi
files=`echo ${IN_BASE_DIR}/tmp/*`
if [[ "$files" = "${IN_BASE_DIR}/tmp/*" ]] ; then
    echo "$0: input directory ${IN_BASE_DIR}/tmp exists but is empty"
    exit 1
fi

#
# Make sure the conversion directory exists and we are there
#
if [[ ! -d ${BASEDIR} ]] ; then
    mkdir -p ${BASEDIR}
fi
cd ${BASEDIR}

#
# Setup structure and copy input files
#
rm -rf out
rm -rf tmp
mkdir tmp
cp ${IN_BASE_DIR}/tmp/*.jpg tmp/
cp ${IN_BASE_DIR}/tmp/*.JPG tmp/

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
		    convert \
			-filter Lanczos \
			-resize "${size}>" \
			-unsharp 1x1+0.2+0.05 \
			${img} out/${size}/${year}/${imgbase}
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
