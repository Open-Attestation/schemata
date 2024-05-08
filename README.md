## Installation

```sh
npm i @govtechsg/oa-schemata
```

Types are automatically generated when publishing the package. You can directly access to the exported types:

```ts
import {healthcert} from "@govtechsg/oa-schemata"
```

## Adding a new schema

1. Create a file named `schema.json`: the file must contain the newly added JSON schema and must be placed under a reversed domain name structure. For instance if your schema is related to `tech.gov.sg`, then place the file in `src/sg/gov/tech/<name>/<version>/schema.json`. In that example `<name>` and `<version>` must be replaced by real values.

   - The schema file name must strictly be `schema.json`. It will be automatically published.

   > _All json files in the src folder will be published._

   - The schema will be published at the URL following the structure of the `src` folder. For instance, if your schema is in `src/sg/gov/tech/<name>/<version>/schema.json` then it will be available from `https://domain/sg/gov/tech/<name>/<version>`.
   - Always use `1.0` version for new schemata.

1. Make sure the `$id` of your schema is the URL from which the schema will be available at.
1. Add tests for your schema.
1. Generate Typescript types:
   - Update `scripts/post-install.js` and call the `generate` function by providing the following named arguments:
     - `path` to indicate where your schema is located. Do not provide the `src` folder.
     - `rootTypeName` to specify the name of the default exported object.
   - Run `npm run postinstall` to generate the types.
   - Update `src/index.ts` to export the generated types. In order to prevent name collision, use the `import *` notation to import all the types related to your new schema under a specific name. Then re-export that name.
2. Note : there is a symlink inside `app/public` that points to respective subfolders under `src` , so do not create a new subfolder e.g `src/xyz`, all jsons must be placed on either `src/io` , `src/sg` or `src/com`

> _Feel free to refer to previously created schemata for help._

---

## Including Open Attestation schema requirements into existing schema

1. In the same folder as your `schema.json`, create a json file labelled `<name>-open-attestation.json` with the following attributes:

   ```json
   {
     "$id": "...",
     "$schema": "http://json-schema.org/draft-07/schema#",
     "type": "object",
     "allOf": [
       {
         "$ref": "https://schema.openattestation.com/2.0/schema.json"
       },
       {
         "$ref": "..."
       }
     ]
   }
   ```

   In the example above:

   - `"$id"` field is the URL from which the schema will be available at.

   - `"$ref"` field is a reference to the URL where your existing schema is published. The first `"$ref"` field refers to the URL where the Open Attestation schema is at.

1. Add tests for your schema.

> If you are uncertain of the structure of an Open Attestation document, you can refer to [this](https://www.openattestation.com/docs/did-section/raw-document-did) and append your existing sample document with the required fields.

## Merging of schema.openattenstation.com and schemata.openattestation.com

To simplify the management of schema hosting across Open Attestation, the team decided to merge the schema.openattestation.com into this repo.

However, there are URL redirection from schemata.openattestation.com to schema.openattestation.com. Therefore, there is a need to maintain the redirection to support existing issued certs.

To achieve this, we decided to use 1 CloudFront to handle both URLs. Furthermore, we perform post build processing to copy/move the necessary JSON files to the different context paths, so as to achieve "redirection". Refer to script in path `scripts/publish-schema.sh`

Also, to achieve redirection involving appending URLs, we make use of CloudFront function. Refer to trustdocs ops-aws-dlt repo, cloudfront functions.

### URI redirection

#### The following list are the redirection between the 2 website (Method: copy/move - refer to `scripts/publish-schema.sh`)

- schemata.openattestation.com/2.0/schema.json -> schema.openattestation.com/2.0/schema.json
- (Deprecated) schemata.openattestation.com/sg/gov/open-attestation/* -> schema.openattestation.com/:splat

#### The following list are self redirection within schemata.openattestation.com (Method: copy/move - refer to `scripts/publish-schema.sh`)

- schemata.openattestation.com/com/openattestation/1.0/CustomContext.json -> schemata.openattestation.com/com/openattestation/3.0/CustomContext.json
- schemata.openattestation.com/com/openattestation/1.0/DrivingLicenceCredential.json -> schemata.openattestation.com/com/openattestation/3.0/DrivingLicenceCredential.json
- schemata.openattestation.com/com/openattestation/1.0/OpenAttestation.v3.json -> schemata.openattestation.com/com/openattestation/3.0/OpenAttestation.v3.json

#### The following list are special redirection which append `/schema.json` to the end of the URL (Method: CF Function - refer to trustdocs ops-aws-dlt repo, cloudfront functions)

- schemata.openattestation.com/sg/gov/tech/geekout/1.0
- schemata.openattestation.com/io/tradetrust/cover-letter/1.0
- schemata.openattestation.com/io/tradetrust/bill-of-lading/1.0
- schemata.openattestation.com/io/tradetrust/invoice/1.0
- schemata.openattestation.com/io/tradetrust/certificate-of-origin/1.0
- schemata.openattestation.com/sg/gov/tech/notarise/1.0
