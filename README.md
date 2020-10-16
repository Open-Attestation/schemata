## Adding a new schema

1. Add a file named `schema.json` in the `src` directory. The file must contain the newly added JSON schema and must be placed under a reversed domain name structure. For instance if your schema is related to `tech.gov.sg`, then place the file in `src/sg/gov/tech/<name>/<version>/schema.json`. In that example `<name>` and `<version>` must be replaced by real values.

   - The schema file name must strictly be `schema.json`. It will be automatically published.
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

> Feel free to refer to previously created schemata for help.
