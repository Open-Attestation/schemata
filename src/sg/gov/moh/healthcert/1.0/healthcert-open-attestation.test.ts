import Ajv from "ajv";
import { cloneDeep, omit } from "lodash";
import schema from "./healthcert-open-attestation.json";
import sampleDocJson from "./healthcert-open-attestation-document.json";
import axios from "axios";

function loadSchema(uri: string) {
  return axios.get(uri).then(res => {
    return res.data;
  });
}
const ajv = new Ajv({ allErrors: true, loadSchema: loadSchema });
let validator: Ajv.ValidateFunction;

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
});
