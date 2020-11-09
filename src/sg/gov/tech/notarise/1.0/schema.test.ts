import Ajv from "ajv";
import { omit, cloneDeep, set } from "lodash";
import schema from "./schema.json";
import sampleDocJson from "./sample-document.json";

const ajv = new Ajv({ allErrors: true });
const validator = ajv.compile(schema);
describe("schema", () => {
  it("should work with valid json", () => {
    expect(validator(sampleDocJson)).toBe(true);
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
          "schemaPath": "#/required",
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
          "schemaPath": "#/properties/notarisationMetadata/required",
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
          "schemaPath": "#/properties/notarisationMetadata/required",
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
          "schemaPath": "#/properties/notarisationMetadata/required",
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
          "schemaPath": "#/properties/notarisationMetadata/properties/notarisedOn/format",
        },
      ]
    `);
  });
});
