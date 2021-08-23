import Ajv from "ajv";
import schema from "./schema.json";
import sampleDocument from "./certificate-of-origin-wrapped.json";
import { cloneDeep, omit } from "lodash";

const ajv = new Ajv({ allErrors: true });
const validator = ajv.compile(schema);

describe("certificate of origin schema", () => {
  it("should work with valid certificate of origin", () => {
    expect(validator(sampleDocument)).toBe(true);
  });

  it("should fail when document does not have supplyChainConsignment", () => {
    const document = omit(cloneDeep(sampleDocument), "supplyChainConsignment");

    expect(validator(document)).toBe(false);
    expect(validator.errors).toMatchInlineSnapshot(`
      Array [
        Object {
          "dataPath": "",
          "keyword": "required",
          "message": "should have required property 'supplyChainConsignment'",
          "params": Object {
            "missingProperty": "supplyChainConsignment",
          },
          "schemaPath": "#/required",
        },
      ]
    `);
  });

  it("should fail when document does not have exporter", () => {
    const document = omit(cloneDeep(sampleDocument), "supplyChainConsignment.exporter");

    expect(validator(document)).toBe(false);
    expect(validator.errors).toMatchInlineSnapshot(`
      Array [
        Object {
          "dataPath": ".supplyChainConsignment",
          "keyword": "required",
          "message": "should have required property 'exporter'",
          "params": Object {
            "missingProperty": "exporter",
          },
          "schemaPath": "#/properties/supplyChainConsignment/required",
        },
      ]
    `);
  });

  it("should fail when document does not have exporter's iD, name, postalAddress", () => {
    const document = {
      ...sampleDocument,
      supplyChainConsignment: {
        ...sampleDocument.supplyChainConsignment,
        exporter: {}
      }
    };
    expect(validator(document)).toBe(false);
    expect(validator.errors).toMatchInlineSnapshot(`
      Array [
        Object {
          "dataPath": ".supplyChainConsignment.exporter",
          "keyword": "required",
          "message": "should have required property 'iD'",
          "params": Object {
            "missingProperty": "iD",
          },
          "schemaPath": "#/allOf/1/required",
        },
        Object {
          "dataPath": ".supplyChainConsignment.exporter",
          "keyword": "required",
          "message": "should have required property 'name'",
          "params": Object {
            "missingProperty": "name",
          },
          "schemaPath": "#/allOf/1/required",
        },
        Object {
          "dataPath": ".supplyChainConsignment.exporter",
          "keyword": "required",
          "message": "should have required property 'postalAddress'",
          "params": Object {
            "missingProperty": "postalAddress",
          },
          "schemaPath": "#/allOf/1/required",
        },
      ]
    `);
  });

  it("should fail when document does not have importer", () => {
    const document = omit(cloneDeep(sampleDocument), "supplyChainConsignment.importer");

    expect(validator(document)).toBe(false);
    expect(validator.errors).toMatchInlineSnapshot(`
      Array [
        Object {
          "dataPath": ".supplyChainConsignment",
          "keyword": "required",
          "message": "should have required property 'importer'",
          "params": Object {
            "missingProperty": "importer",
          },
          "schemaPath": "#/properties/supplyChainConsignment/required",
        },
      ]
    `);
  });

  it("should fail when document does not have importer's iD, name, postalAddress", () => {
    const document = {
      ...sampleDocument,
      supplyChainConsignment: {
        ...sampleDocument.supplyChainConsignment,
        importer: {}
      }
    };
    expect(validator(document)).toBe(false);
    expect(validator.errors).toMatchInlineSnapshot(`
      Array [
        Object {
          "dataPath": ".supplyChainConsignment.importer",
          "keyword": "required",
          "message": "should have required property 'iD'",
          "params": Object {
            "missingProperty": "iD",
          },
          "schemaPath": "#/allOf/1/required",
        },
        Object {
          "dataPath": ".supplyChainConsignment.importer",
          "keyword": "required",
          "message": "should have required property 'name'",
          "params": Object {
            "missingProperty": "name",
          },
          "schemaPath": "#/allOf/1/required",
        },
        Object {
          "dataPath": ".supplyChainConsignment.importer",
          "keyword": "required",
          "message": "should have required property 'postalAddress'",
          "params": Object {
            "missingProperty": "postalAddress",
          },
          "schemaPath": "#/allOf/1/required",
        },
      ]
    `);
  });

  it("should fail when document does not have certificate id", () => {
    const document = omit(cloneDeep(sampleDocument), "iD");
    expect(validator(document)).toBe(false);
    expect(validator.errors).toMatchInlineSnapshot(`
      Array [
        Object {
          "dataPath": "",
          "keyword": "required",
          "message": "should have required property 'iD'",
          "params": Object {
            "missingProperty": "iD",
          },
          "schemaPath": "#/required",
        },
      ]
    `);
  });
});
