import Ajv from "ajv";
import { omit, cloneDeep, set } from "lodash";
import schema from "./schema.json";
import samplePdt from "./sample-document-pdt.json";
import sampleVac from "./sample-document-vac.json";

const ajv = new Ajv({ allErrors: true });
const validator = ajv.compile(schema);
describe("schema", () => {
  it("should work with valid pre-departure test healthcert", () => {
    expect(validator(samplePdt)).toBe(true);
  });

  it("should work with valid vaccination healthcert", () => {
    expect(validator(sampleVac)).toBe(true);
  });

  it("should fail when notarisationMetadata is missing", () => {
    const isValid = validator(omit(cloneDeep(sampleVac), "notarisationMetadata"));
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
    const isValid = validator(omit(cloneDeep(sampleVac), "notarisationMetadata.reference"));
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
    const isValid = validator(omit(cloneDeep(sampleVac), "notarisationMetadata.passportNumber"));
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
    const isValid = validator(omit(cloneDeep(sampleVac), "notarisationMetadata.notarisedOn"));
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
    const isValid = validator(set(cloneDeep(sampleVac), "notarisationMetadata.notarisedOn", "FOO"));
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
  it("should fail when notarisationMetadata url is missing", () => {
    const isValid = validator(omit(cloneDeep(sampleVac), "notarisationMetadata.url"));
    expect(isValid).toBe(false);
    expect(validator.errors).toMatchInlineSnapshot(`
      Array [
        Object {
          "dataPath": ".notarisationMetadata",
          "keyword": "required",
          "message": "should have required property 'url'",
          "params": Object {
            "missingProperty": "url",
          },
          "schemaPath": "#/properties/notarisationMetadata/required",
        },
      ]
    `);
  });
  it("should fail when notarisationMetadata url is not a URI", () => {
    const isValid = validator(set(cloneDeep(sampleVac), "notarisationMetadata.url", "FOO"));
    expect(isValid).toBe(false);
    expect(validator.errors).toMatchInlineSnapshot(`
      Array [
        Object {
          "dataPath": ".notarisationMetadata.url",
          "keyword": "format",
          "message": "should match format \\"uri\\"",
          "params": Object {
            "format": "uri",
          },
          "schemaPath": "#/properties/notarisationMetadata/properties/url/format",
        },
      ]
    `);
  });
  it("should fail when notarisationMetadata signedEuHealthCerts is not an array", () => {
    const isValid = validator(set(cloneDeep(sampleVac), "notarisationMetadata.signedEuHealthCerts", "FOO"));
    expect(isValid).toBe(false);
    expect(validator.errors).toMatchInlineSnapshot(`
      Array [
        Object {
          "dataPath": ".notarisationMetadata.signedEuHealthCerts",
          "keyword": "type",
          "message": "should be array",
          "params": Object {
            "type": "array",
          },
          "schemaPath": "#/properties/notarisationMetadata/properties/signedEuHealthCerts/type",
        },
      ]
    `);
  });
  it("should fail when notarisationMetadata signedEuHealthCerts[0] is missing required fields", () => {
    const isValid = validator(
      omit(cloneDeep(sampleVac), [
        "notarisationMetadata.signedEuHealthCerts[0].type",
        "notarisationMetadata.signedEuHealthCerts[0].vaccineCode",
        "notarisationMetadata.signedEuHealthCerts[0].dose",
        "notarisationMetadata.signedEuHealthCerts[0].qr"
      ])
    );
    expect(isValid).toBe(false);
    expect(validator.errors).toMatchInlineSnapshot(`
      Array [
        Object {
          "dataPath": ".notarisationMetadata.signedEuHealthCerts[0]",
          "keyword": "required",
          "message": "should have required property 'type'",
          "params": Object {
            "missingProperty": "type",
          },
          "schemaPath": "#/properties/notarisationMetadata/properties/signedEuHealthCerts/items/anyOf/0/required",
        },
        Object {
          "dataPath": ".notarisationMetadata.signedEuHealthCerts[0]",
          "keyword": "required",
          "message": "should have required property 'vaccineCode'",
          "params": Object {
            "missingProperty": "vaccineCode",
          },
          "schemaPath": "#/properties/notarisationMetadata/properties/signedEuHealthCerts/items/anyOf/0/required",
        },
        Object {
          "dataPath": ".notarisationMetadata.signedEuHealthCerts[0]",
          "keyword": "required",
          "message": "should have required property 'dose'",
          "params": Object {
            "missingProperty": "dose",
          },
          "schemaPath": "#/properties/notarisationMetadata/properties/signedEuHealthCerts/items/anyOf/0/required",
        },
        Object {
          "dataPath": ".notarisationMetadata.signedEuHealthCerts[0]",
          "keyword": "required",
          "message": "should have required property 'qr'",
          "params": Object {
            "missingProperty": "qr",
          },
          "schemaPath": "#/properties/notarisationMetadata/properties/signedEuHealthCerts/items/anyOf/0/required",
        },
        Object {
          "dataPath": ".notarisationMetadata.signedEuHealthCerts[0]",
          "keyword": "required",
          "message": "should have required property 'type'",
          "params": Object {
            "missingProperty": "type",
          },
          "schemaPath": "#/properties/notarisationMetadata/properties/signedEuHealthCerts/items/anyOf/1/required",
        },
        Object {
          "dataPath": ".notarisationMetadata.signedEuHealthCerts[0]",
          "keyword": "required",
          "message": "should have required property 'qr'",
          "params": Object {
            "missingProperty": "qr",
          },
          "schemaPath": "#/properties/notarisationMetadata/properties/signedEuHealthCerts/items/anyOf/1/required",
        },
        Object {
          "dataPath": ".notarisationMetadata.signedEuHealthCerts[0]",
          "keyword": "anyOf",
          "message": "should match some schema in anyOf",
          "params": Object {},
          "schemaPath": "#/properties/notarisationMetadata/properties/signedEuHealthCerts/items/anyOf",
        },
      ]
    `);
  });
  it("should fail when notarisationMetadata signedEuHealthCerts[0] is not a valid type", () => {
    const isValid = validator(set(cloneDeep(sampleVac), "notarisationMetadata.signedEuHealthCerts[0].type", "FOO"));
    expect(isValid).toBe(false);
    expect(validator.errors).toMatchInlineSnapshot(`
      Array [
        Object {
          "dataPath": ".notarisationMetadata.signedEuHealthCerts[0].type",
          "keyword": "const",
          "message": "should be equal to constant",
          "params": Object {
            "allowedValue": "VAC",
          },
          "schemaPath": "#/properties/notarisationMetadata/properties/signedEuHealthCerts/items/anyOf/0/properties/type/const",
        },
        Object {
          "dataPath": ".notarisationMetadata.signedEuHealthCerts[0].type",
          "keyword": "enum",
          "message": "should be equal to one of the allowed values",
          "params": Object {
            "allowedValues": Array [
              "PCR",
              "ART",
              "SER",
            ],
          },
          "schemaPath": "#/properties/notarisationMetadata/properties/signedEuHealthCerts/items/anyOf/1/properties/type/enum",
        },
        Object {
          "dataPath": ".notarisationMetadata.signedEuHealthCerts[0]",
          "keyword": "anyOf",
          "message": "should match some schema in anyOf",
          "params": Object {},
          "schemaPath": "#/properties/notarisationMetadata/properties/signedEuHealthCerts/items/anyOf",
        },
      ]
    `);
  });
  it("should fail when notarisationMetadata signedEuHealthCerts[0] is not a valid dose", () => {
    const isValid = validator(set(cloneDeep(sampleVac), "notarisationMetadata.signedEuHealthCerts[0].dose", "FOO"));
    expect(isValid).toBe(false);
    expect(validator.errors).toMatchInlineSnapshot(`
      Array [
        Object {
          "dataPath": ".notarisationMetadata.signedEuHealthCerts[0].dose",
          "keyword": "type",
          "message": "should be number",
          "params": Object {
            "type": "number",
          },
          "schemaPath": "#/properties/notarisationMetadata/properties/signedEuHealthCerts/items/anyOf/0/properties/dose/type",
        },
        Object {
          "dataPath": ".notarisationMetadata.signedEuHealthCerts[0].type",
          "keyword": "enum",
          "message": "should be equal to one of the allowed values",
          "params": Object {
            "allowedValues": Array [
              "PCR",
              "ART",
              "SER",
            ],
          },
          "schemaPath": "#/properties/notarisationMetadata/properties/signedEuHealthCerts/items/anyOf/1/properties/type/enum",
        },
        Object {
          "dataPath": ".notarisationMetadata.signedEuHealthCerts[0]",
          "keyword": "anyOf",
          "message": "should match some schema in anyOf",
          "params": Object {},
          "schemaPath": "#/properties/notarisationMetadata/properties/signedEuHealthCerts/items/anyOf",
        },
      ]
    `);
  });
});
