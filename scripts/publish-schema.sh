#!/usr/bin/env sh

# Remove previously published schema
rm -rf ./public
mkdir public

# copy from src to preserve the structure
cd src || exit 10
find . -name "*.json" -exec rsync -R {} ../public \; # https://stackoverflow.com/questions/11246070/cp-parents-option-on-mac/13855290#13855290
cd ..

# No longer using the following files as we migrated out of netlify
# cp _redirects ./public
# cp _headers ./public

# Build app
cd app
npm i && npm run build
cd ..
cp -r app/public/* ./public

# Move 2.0 schema.json for the URL: schema.openattestation.com/2.0/schema.json
mkdir -p ./public/2.0
mv ./public/com/openattestation/2.0/schema.json ./public/2.0/schema.json
rmdir ./public/com/openattestation/2.0

# Move 2.0 schema.json for the URL: schema.openattestation.com/3.0/schema.json
mkdir -p ./public/3.0
mv ./public/com/openattestation/3.0/schema.json ./public/3.0/schema.json

# Copy 3.0 json files for the redirection from
# schemata.openattestation.com/com/openattestation/1.0/*.json to schemata.openattestation.com/com/openattestation/3.0/*.json
mkdir -p ./public/com/openattestation/1.0
cp ./public/com/openattestation/3.0/CustomContext.json ./public/com/openattestation/1.0/CustomContext.json 
cp ./public/com/openattestation/3.0/DrivingLicenceCredential.json ./public/com/openattestation/1.0/DrivingLicenceCredential.json 
cp ./public/com/openattestation/3.0/OpenAttestation.v3.json ./public/com/openattestation/1.0/OpenAttestation.v3.json
