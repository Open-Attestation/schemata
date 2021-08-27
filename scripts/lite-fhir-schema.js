/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const fhir = require("../src/sg/gov/moh/fhir/4.0.1/schema.json");

const filename = "src/sg/gov/moh/fhir/4.0.1/lite-schema.json";

const resources = ["Bundle", "Device", "Observation", "Organization", "Patient", "Practitioner", "Specimen"];
const resourceQueue = [...resources];
const resourcesFetched = new Set(["ResourceList"]); // Skip ResourceList

const schemaHeader = {
  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://schemata.openattestation.com/sg/gov/moh/fhir/4.0.1/lite-schema.json#",
  // id: "http://hl7.org/fhir/json-schema/4.0",
  title: "Lite FHIR schema for Notarise.gov.sg HealthCerts",
  description: "see http://hl7.org/fhir/json.html#schema for information about the FHIR Json Schemas",
  $ref: "#/definitions/Bundle"
};

/** ====== Helper Functions ====== **/

function sanitiseRef(ref = "") {
  return ref.replace("#/definitions/", "");
}

function findUniqueNestedReferences(obj = {}, results = []) {
  const searchKey = "$ref";
  const references = results;

  for (const [key, value] of Object.entries(obj)) {
    if (key === searchKey && typeof value !== "object") {
      references.push(sanitiseRef(value));
    } else if (typeof value === "object") {
      findUniqueNestedReferences(value, references);
    }
  }

  return [...new Set(references)];
}

/** ====== Main Script ====== **/
const definitionEntries = [];

while (resourceQueue.length > 0) {
  const resource = resourceQueue.shift();

  // 1. Extract resource definition
  const definition = fhir.definitions[resource];
  const properties = definition.properties
    ? Object.keys(definition.properties)
        // Filter out properties that start with "_" (since they are not needed)
        .filter(key => !key.startsWith("_"))
        .reduce((obj, key) => ({ ...obj, [key]: definition.properties[key] }), {})
    : undefined;
  definitionEntries.push([resource, { ...definition, properties }]);

  // 2. Find nested references
  const nestedReferences = findUniqueNestedReferences(definition.properties).filter(
    // Filter out definitions that have already been fetched
    r => !resourcesFetched.has(r)
  );
  resourceQueue.push(...nestedReferences);
  resourcesFetched.add(...nestedReferences, resource);
}

// 3. Custom ResourceList: To limit the type of resources that can exist in Bundle_Entry and .contained
const resourceList = {
  oneOf: resources
    .map(r => ({
      $ref: `#/definitions/${r}`
    }))
    .sort()
};

/** ====== Export! ====== **/

const liteSchema = {
  ...schemaHeader,
  definitions: {
    ResourceList: resourceList,
    ...Object.fromEntries(
      definitionEntries
        // Sort definitions alphabetically
        .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))
    )
  }
};
fs.writeFile(filename, JSON.stringify(liteSchema, null, 2), err => {
  if (err) console.error(err);
  else console.log(`Exported to ${filename} with ${Object.keys(liteSchema.definitions).length} definitions.`);
});
