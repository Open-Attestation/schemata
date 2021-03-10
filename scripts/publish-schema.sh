#!/usr/bin/env sh

# Remove previously published schema
rm -rf ./public
mkdir public

# copy from src to preserve the structure
cd src || exit 10
find . -name "*.json" -exec rsync -R {} ../public \; # https://stackoverflow.com/questions/11246070/cp-parents-option-on-mac/13855290#13855290
cd ..
