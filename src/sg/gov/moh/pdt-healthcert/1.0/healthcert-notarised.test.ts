import Ajv from "ajv";
import schema from "./healthcert-notarised-schema.json";
import sampleDocJson from "./healthcert-notarised-document.json";
import axios from "axios";
import { cloneDeep, omit } from "lodash";

function loadSchema(uri: string) {
  return axios.get(uri).then(res => {
    return res.data;
  });
}
const ajv = new Ajv({ allErrors: true, loadSchema: loadSchema });
let validator: Ajv.ValidateFunction;

// eslint-disable-next-line jest/no-disabled-tests
describe("schema", () => {
  beforeAll(async () => {
    validator = await ajv.compileAsync(schema);
  });
  it("should work with valid json", () => {
    expect(validator(sampleDocJson)).toBe(true);
  });

  //To test if healthcert schema is correctly merged
  it("should return array of errors without fhirVersion", () => {
    const badDoc = omit(cloneDeep(sampleDocJson), "fhirVersion");
    expect(validator(badDoc)).toBe(false);
    expect(validator.errors).toMatchInlineSnapshot(`
      Array [
        Object {
          "dataPath": "",
          "keyword": "required",
          "message": "should have required property 'fhirVersion'",
          "params": Object {
            "missingProperty": "fhirVersion",
          },
          "schemaPath": "#/required",
        },
      ]
    `);
  });

  //To test if oa schema is correctly merged
  it("should return array of errors without issuers", () => {
    const badDoc = omit(cloneDeep(sampleDocJson), "issuers");
    expect(validator(badDoc)).toBe(false);
    expect(validator.errors).toMatchInlineSnapshot(`
      Array [
        Object {
          "dataPath": "",
          "keyword": "required",
          "message": "should have required property 'issuers'",
          "params": Object {
            "missingProperty": "issuers",
          },
          "schemaPath": "#/required",
        },
      ]
    `);
  });

  //To test if notarized schema is correctly merged
  it("should return array of errors without notarisationMetadata", () => {
    const badDoc = omit(cloneDeep(sampleDocJson), "notarisationMetadata");
    expect(validator(badDoc)).toBe(false);
    expect(validator.errors).toMatchInlineSnapshot(`
      Array [
        Object {
          "dataPath": "",
          "keyword": "required",
          "message": "should have required property 'notarisationMetadata'",
          "params": Object {
            "missingProperty": "notarisationMetadata",
          },
          "schemaPath": "https://schemata.openattestation.com/sg/gov/tech/notarise/1.0/schema.json/required",
        },
      ]
    `);
  });
});
