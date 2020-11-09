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

>_If you are uncertain of the structure of an Open Attestation document, you can refer to [this](https://openattestation.com/docs/verifiable-document/raw-document) and append your existing sample document with the required fields.
```
