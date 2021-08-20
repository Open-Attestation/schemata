const fs = require("fs");
const fhir = require("../src/sg/gov/moh/fhir/4.0.1/schema.json");

const filename = "src/sg/gov/moh/fhir/4.0.1/lite-schema.json";

/**
 * Queue of resources to fetch
 */
const resources = ["Bundle", "Device", "Observation", "Organization", "Patient", "Practitioner", "Specimen"];
const resourceQueue = [...resources];

const liteSchema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://schemata.openattestation.com/sg/gov/moh/fhir/4.0.1/lite-schema.json#",
  // id: "http://hl7.org/fhir/json-schema/4.0",
  title: "Lite FHIR schema for Notarise.gov.sg HealthCerts",
  description: "see http://hl7.org/fhir/json.html#schema for information about the FHIR Json Schemas",
  definitions: {}
};

/** ====== Main Script ====== **/

while (resourceQueue.length > 0) {
  const resource = resourceQueue.shift();

  // 1. Extract resource definition
  liteSchema.definitions[resource] = fhir.definitions[resource];

  // 2. Remove properties that start with "_" (since they are not needed)
  Object.keys(liteSchema.definitions[resource].properties || {}).forEach(key => {
    if (key.startsWith("_")) {
      delete liteSchema.definitions[resource].properties[key];
    }
  });

  // 3. Find nested references
  const nestedReferences = findUniqueNestedReferences(liteSchema.definitions[resource].properties).filter(
    // Filter out definitions that are not already in liteSchema and not already been queued (prevent re-fetch)
    r => !Object.keys(liteSchema.definitions).includes(r) && !resourceQueue.includes(r)
  );
  resourceQueue.push(...nestedReferences);
}

// 4. Custom ResourceList: Only include resources that are needed
const resourceListLength = liteSchema.definitions.ResourceList.oneOf.length;
for (let i = 0; i < resourceListLength; i++) {
  const item = liteSchema.definitions.ResourceList.oneOf.shift();
  const ref = stringToRef(item.$ref);

  if (resources.includes(ref)) {
    liteSchema.definitions.ResourceList.oneOf.push(item);
  }
}

/** ====== Export! ====== **/

const sortedLiteschema = {
  ...liteSchema,
  definitions: Object.fromEntries(Object.entries(liteSchema.definitions).sort())
};
fs.writeFile(filename, JSON.stringify(sortedLiteschema, null, 2), err => {
  if (err) console.error(err);
  else console.log(`Exported to ${filename} with ${Object.keys(liteSchema.definitions).length} definitions.`);
});

/** ====== Helper Functions ====== **/

function findUniqueNestedReferences(obj = {}, searchKey = "$ref", results = []) {
  const keys = Object.keys(obj);
  const references = results;

  for (let key of keys) {
    const value = obj[key];
    if (key === searchKey && typeof value !== "object") {
      references.push(stringToRef(value));
    } else if (typeof value === "object") {
      findUniqueNestedReferences(value, searchKey, references);
    }
  }

  return [...new Set(references)];
}

function stringToRef(ref = "") {
  return ref.replace("#/definitions/", "");
}
