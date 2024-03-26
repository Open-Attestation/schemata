import Ajv from "ajv";
import { cloneDeep, omit, set } from "lodash";
import axios from "axios";

import liteFhirSchema from "../../fhir/4.0.1/lite-schema.json";

import schema from "./schema.json";
import sampleDocument from "./sample-document.json";

function loadSchema(uri: string) {
  return axios.get(uri).then((res) => {
    return res.data;
  });
}

let validator: Ajv.ValidateFunction;

describe("schema", () => {
  beforeAll(async () => {
    const ajv = new Ajv({ allErrors: true, loadSchema: loadSchema });
    ajv.addSchema(liteFhirSchema);
    validator = await ajv.compileAsync(schema);
  });

  it("should work with valid json", () => {
    expect(validator(sampleDocument)).toBe(true);
  });

  it("should work with valid single type", () => {
    expect(validator(set(cloneDeep(sampleDocument), "type", "PCR"))).toBe(true);
    expect(validator(set(cloneDeep(sampleDocument), "type", "ART"))).toBe(true);
    expect(validator(set(cloneDeep(sampleDocument), "type", "SER"))).toBe(true);
  });

  it("should fail when type is missing", () => {
    const document = omit(cloneDeep(sampleDocument), "type");
    expect(validator(document)).toBe(false);
    expect(validator.errors).toMatchInlineSnapshot(`
      Array [
        Object {
          "dataPath": "",
          "keyword": "required",
          "message": "should have required property 'type'",
          "params": Object {
            "missingProperty": "type",
          },
          "schemaPath": "#/required",
        },
      ]
    `);
  });

  it("should fail when type is not part of enum", () => {
    const document = set(cloneDeep(sampleDocument), "type", "foo");
    expect(validator(document)).toBe(false);
    expect(validator.errors).toMatchInlineSnapshot(`
      Array [
        Object {
          "dataPath": ".type",
          "keyword": "enum",
          "message": "should be equal to one of the allowed values",
          "params": Object {
            "allowedValues": Array [
              "PCR",
              "ART",
              "SER",
            ],
          },
          "schemaPath": "#/definitions/RecTypes/enum",
        },
      ]
    `);
  });

  it("should fail when type is multi an array", () => {
    expect(validator(set(cloneDeep(sampleDocument), "type", ["PCR", "SER"]))).toBe(false);
  });

  it("should fail when id is missing", () => {
    const document = omit(cloneDeep(sampleDocument), "id");
    expect(validator(document)).toBe(false);
    expect(validator.errors).toMatchInlineSnapshot(`
      Array [
        Object {
          "dataPath": "",
          "keyword": "required",
          "message": "should have required property 'id'",
          "params": Object {
            "missingProperty": "id",
          },
          "schemaPath": "#/required",
        },
      ]
    `);
  });

  it("should fail when version is missing", () => {
    const document = omit(cloneDeep(sampleDocument), "version");
    expect(validator(document)).toBe(false);
    expect(validator.errors).toMatchInlineSnapshot(`
      Array [
        Object {
          "dataPath": "",
          "keyword": "required",
          "message": "should have required property 'version'",
          "params": Object {
            "missingProperty": "version",
          },
          "schemaPath": "#/required",
        },
      ]
    `);
  });

  it("should fail when validFrom is missing", () => {
    const document = omit(cloneDeep(sampleDocument), "validFrom");
    expect(validator(document)).toBe(false);
    expect(validator.errors).toMatchInlineSnapshot(`
      Array [
        Object {
          "dataPath": "",
          "keyword": "required",
          "message": "should have required property 'validFrom'",
          "params": Object {
            "missingProperty": "validFrom",
          },
          "schemaPath": "#/required",
        },
      ]
    `);
  });

  it("should fail when validFrom is not a date-time", () => {
    const document = set(cloneDeep(sampleDocument), "validFrom", "FOO");
    expect(validator(document)).toBe(false);
    expect(validator.errors).toMatchInlineSnapshot(`
      Array [
        Object {
          "dataPath": ".validFrom",
          "keyword": "format",
          "message": "should match format \\"date-time\\"",
          "params": Object {
            "format": "date-time",
          },
          "schemaPath": "#/properties/validFrom/format",
        },
      ]
    `);
  });

  it("should fail when validUntil is missing", () => {
    const document = omit(cloneDeep(sampleDocument), "validUntil");
    expect(validator(document)).toBe(false);
    expect(validator.errors).toMatchInlineSnapshot(`
      Array [
        Object {
          "dataPath": "",
          "keyword": "required",
          "message": "should have required property 'validUntil'",
          "params": Object {
            "missingProperty": "validUntil",
          },
          "schemaPath": "#/required",
        },
      ]
    `);
  });

  it("should fail when validUntil is not a date-time", () => {
    const document = set(cloneDeep(sampleDocument), "validUntil", "FOO");
    expect(validator(document)).toBe(false);
    expect(validator.errors).toMatchInlineSnapshot(`
      Array [
        Object {
          "dataPath": ".validUntil",
          "keyword": "format",
          "message": "should match format \\"date-time\\"",
          "params": Object {
            "format": "date-time",
          },
          "schemaPath": "#/properties/validUntil/format",
        },
      ]
    `);
  });

  it("should fail when fhirVersion is missing", () => {
    const document = omit(cloneDeep(sampleDocument), "fhirVersion");
    expect(validator(document)).toBe(false);
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

  it("should fail when fhirBundle is missing", () => {
    const document = omit(cloneDeep(sampleDocument), "fhirBundle");
    expect(validator(document)).toBe(false);
    expect(validator.errors).toMatchInlineSnapshot(`
      Array [
        Object {
          "dataPath": "",
          "keyword": "required",
          "message": "should have required property 'fhirBundle'",
          "params": Object {
            "missingProperty": "fhirBundle",
          },
          "schemaPath": "#/required",
        },
      ]
    `);
  });
});
