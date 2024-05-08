import Ajv from "ajv";
import { omit, cloneDeep, set } from "lodash";
import schema from "./notarise-open-attestation-schema.json";
import axios from "axios";

const sampleDocJson = {
  issuers: [
    {
      name: "GovTech",
      documentStore: "0x8Fc57204c35fb9317D91285eF52D6b892EC08cD3",
      identityProof: {
        type: "DNS-TXT",
        location: "example.openattestation.com",
      },
    },
  ],
  $template: {
    name: "GEEK_OUT_2020",
    type: "EMBEDDED_RENDERER",
    url: "https://path-to-renderer",
  },
  notarisationMetadata: {
    reference: "967857",
    notarisedOn: "2020-09-27T06:15:00Z",
    passportNumber: "DT173NV",
    url: "https://example.com",
  },
};

function loadSchema(uri: string) {
  return axios.get(uri).then((res) => {
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

  it("should fail when issuers is missing", () => {
    const isValid = validator(omit(cloneDeep(sampleDocJson), "issuers"));
    expect(isValid).toBe(false);
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

  it("should fail when notarisationMetadata is missing", () => {
    const isValid = validator(omit(cloneDeep(sampleDocJson), "notarisationMetadata"));
    expect(isValid).toBe(false);
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
  it("should fail when notarisationMetadata reference is missing", () => {
    const isValid = validator(omit(cloneDeep(sampleDocJson), "notarisationMetadata.reference"));
    expect(isValid).toBe(false);
    expect(validator.errors).toMatchInlineSnapshot(`
      Array [
        Object {
          "dataPath": ".notarisationMetadata",
          "keyword": "required",
          "message": "should have required property 'reference'",
          "params": Object {
            "missingProperty": "reference",
          },
          "schemaPath": "https://schemata.openattestation.com/sg/gov/tech/notarise/1.0/schema.json/properties/notarisationMetadata/required",
        },
      ]
    `);
  });
  it("should fail when notarisationMetadata passportNumber is missing", () => {
    const isValid = validator(omit(cloneDeep(sampleDocJson), "notarisationMetadata.passportNumber"));
    expect(isValid).toBe(false);
    expect(validator.errors).toMatchInlineSnapshot(`
      Array [
        Object {
          "dataPath": ".notarisationMetadata",
          "keyword": "required",
          "message": "should have required property 'passportNumber'",
          "params": Object {
            "missingProperty": "passportNumber",
          },
          "schemaPath": "https://schemata.openattestation.com/sg/gov/tech/notarise/1.0/schema.json/properties/notarisationMetadata/required",
        },
      ]
    `);
  });
  it("should fail when notarisationMetadata notarisedOn is missing", () => {
    const isValid = validator(omit(cloneDeep(sampleDocJson), "notarisationMetadata.notarisedOn"));
    expect(isValid).toBe(false);
    expect(validator.errors).toMatchInlineSnapshot(`
      Array [
        Object {
          "dataPath": ".notarisationMetadata",
          "keyword": "required",
          "message": "should have required property 'notarisedOn'",
          "params": Object {
            "missingProperty": "notarisedOn",
          },
          "schemaPath": "https://schemata.openattestation.com/sg/gov/tech/notarise/1.0/schema.json/properties/notarisationMetadata/required",
        },
      ]
    `);
  });
  it("should fail when notarisationMetadata notarisedOn is not a valid date", () => {
    const isValid = validator(set(cloneDeep(sampleDocJson), "notarisationMetadata.notarisedOn", "FOO"));
    expect(isValid).toBe(false);
    expect(validator.errors).toMatchInlineSnapshot(`
      Array [
        Object {
          "dataPath": ".notarisationMetadata.notarisedOn",
          "keyword": "format",
          "message": "should match format \\"date-time\\"",
          "params": Object {
            "format": "date-time",
          },
          "schemaPath": "https://schemata.openattestation.com/sg/gov/tech/notarise/1.0/schema.json/properties/notarisationMetadata/properties/notarisedOn/format",
        },
      ]
    `);
  });
});
