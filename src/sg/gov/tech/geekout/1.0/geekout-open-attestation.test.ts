import Ajv from "ajv";
import { cloneDeep, omit } from "lodash";
import schema from "./geekout-open-attestation.json";
import sampleDocJson from "./geekout-open-attestation-document.json";
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

  //To test if geekout schema is correctly merged
  it("should return array of errors without recipient name", () => {
    const badDoc = omit(cloneDeep(sampleDocJson), "recipient.name");
    expect(validator(badDoc)).toBe(false);
    expect(validator.errors).toStrictEqual([
      {
        keyword: "required",
        dataPath: ".recipient",
        schemaPath: "schema.json/properties/recipient/required",
        params: { missingProperty: "name" },
        message: "should have required property 'name'"
      }
    ]);
  });

  //To test if oa schema is correctly merged
  it("should return array of errors without issuer name", () => {
    const badDoc = omit(cloneDeep(sampleDocJson), "issuers[0].name");
    expect(validator(badDoc)).toBe(false);
    expect(validator.errors).toStrictEqual([
      {
        keyword: "required",
        dataPath: ".issuers[0]",
        schemaPath: "#/required",
        params: { missingProperty: "name" },
        message: "should have required property 'name'"
      },
      {
        keyword: "required",
        dataPath: ".issuers[0]",
        schemaPath: "#/allOf/1/required",
        params: { missingProperty: "tokenRegistry" },
        message: "should have required property 'tokenRegistry'"
      },
      {
        keyword: "required",
        dataPath: ".issuers[0]",
        schemaPath: "#/required",
        params: { missingProperty: "name" },
        message: "should have required property 'name'"
      },
      {
        keyword: "required",
        dataPath: ".issuers[0]",
        schemaPath: "#/definitions/certificateStore/required",
        params: { missingProperty: "name" },
        message: "should have required property 'name'"
      },
      {
        keyword: "required",
        dataPath: ".issuers[0]",
        schemaPath: "#/definitions/certificateStore/required",
        params: { missingProperty: "certificateStore" },
        message: "should have required property 'certificateStore'"
      },
      {
        keyword: "required",
        dataPath: ".issuers[0]",
        schemaPath: "#/required",
        params: { missingProperty: "name" },
        message: "should have required property 'name'"
      },
      {
        keyword: "required",
        dataPath: ".issuers[0]",
        schemaPath: "#/allOf/1/required",
        params: { missingProperty: "revocationStore" },
        message: "should have required property 'revocationStore'"
      },
      {
        keyword: "required",
        dataPath: ".issuers[0]",
        schemaPath: "#/required",
        params: { missingProperty: "name" },
        message: "should have required property 'name'"
      },
      {
        keyword: "not",
        dataPath: ".issuers[0]",
        schemaPath: "#/properties/issuers/items/oneOf/4/allOf/1/not",
        params: {},
        message: "should NOT be valid"
      },
      {
        keyword: "oneOf",
        dataPath: ".issuers[0]",
        schemaPath: "#/properties/issuers/items/oneOf",
        params: { passingSchemas: null },
        message: "should match exactly one schema in oneOf"
      }
    ]);
  });
});
