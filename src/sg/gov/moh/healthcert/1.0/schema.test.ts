import Ajv from "ajv";
import { cloneDeep, omit, set } from "lodash";
import schema from "./schema.json";
import sampleDocument from "./sample-document.json";
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
    expect(validator(sampleDocument)).toBe(true);
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

  it("should fail when name is missing", () => {
    const document = omit(cloneDeep(sampleDocument), "name");
    expect(validator(document)).toBe(false);
    expect(validator.errors).toMatchInlineSnapshot(`
      Array [
        Object {
          "dataPath": "",
          "keyword": "required",
          "message": "should have required property 'name'",
          "params": Object {
            "missingProperty": "name",
          },
          "schemaPath": "#/required",
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

  describe("fhirBundle", () => {
    it("should fail when resourceType is missing", () => {
      const document = omit(cloneDeep(sampleDocument), "fhirBundle.resourceType");
      expect(validator(document)).toBe(false);
      expect(validator.errors).toMatchInlineSnapshot(`
        Array [
          Object {
            "dataPath": ".fhirBundle",
            "keyword": "required",
            "message": "should have required property 'resourceType'",
            "params": Object {
              "missingProperty": "resourceType",
            },
            "schemaPath": "#/properties/fhirBundle/required",
          },
        ]
      `);
    });
    it.todo("it should fail when resourceType is not Bundle");

    it("should fail when type is missing", () => {
      const document = omit(cloneDeep(sampleDocument), "fhirBundle.type");
      expect(validator(document)).toBe(false);
      expect(validator.errors).toMatchInlineSnapshot(`
        Array [
          Object {
            "dataPath": ".fhirBundle",
            "keyword": "required",
            "message": "should have required property 'type'",
            "params": Object {
              "missingProperty": "type",
            },
            "schemaPath": "#/properties/fhirBundle/required",
          },
        ]
      `);
    });
    it.todo("it should fail when type is not collection");

    it("should fail when entry is missing", () => {
      const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry");
      expect(validator(document)).toBe(false);
      expect(validator.errors).toMatchInlineSnapshot(`
        Array [
          Object {
            "dataPath": ".fhirBundle",
            "keyword": "required",
            "message": "should have required property 'entry'",
            "params": Object {
              "missingProperty": "entry",
            },
            "schemaPath": "#/properties/fhirBundle/required",
          },
        ]
      `);
    });

    it("should fail when entry is an array with no items", () => {
      const document = {
        ...sampleDocument,
        fhirBundle: {
          ...sampleDocument.fhirBundle,
          entry: []
        }
      };
      expect(validator(document)).toBe(false);
      expect(validator.errors).toMatchInlineSnapshot(`
        Array [
          Object {
            "dataPath": ".fhirBundle.entry",
            "keyword": "minItems",
            "message": "should NOT have fewer than 4 items",
            "params": Object {
              "limit": 4,
            },
            "schemaPath": "#/properties/fhirBundle/properties/entry/minItems",
          },
        ]
      `);
    });
    it("should fail when entry is an array with 6 items", () => {
      const document = {
        ...sampleDocument,
        fhirBundle: {
          ...sampleDocument.fhirBundle,
          entry: [
            sampleDocument.fhirBundle.entry[0],
            sampleDocument.fhirBundle.entry[0],
            sampleDocument.fhirBundle.entry[0],
            sampleDocument.fhirBundle.entry[0],
            sampleDocument.fhirBundle.entry[0],
            sampleDocument.fhirBundle.entry[0]
          ]
        }
      };
      expect(validator(document)).toBe(false);
      expect(validator.errors).toMatchInlineSnapshot(`
        Array [
          Object {
            "dataPath": ".fhirBundle.entry",
            "keyword": "maxItems",
            "message": "should NOT have more than 5 items",
            "params": Object {
              "limit": 5,
            },
            "schemaPath": "#/properties/fhirBundle/properties/entry/maxItems",
          },
        ]
      `);
    });
    it("should fail when entry is missing a resourceType", () => {
      const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[0].resourceType");
      expect(validator(document)).toBe(false);
      // TODO add more contain equal :)
      expect(validator.errors).toContainEqual({
        dataPath: ".fhirBundle.entry[0]",
        keyword: "required",
        message: "should have required property 'resourceType'",
        params: {
          missingProperty: "resourceType"
        },
        schemaPath: "#/definitions/Patient/required"
      });
      expect(validator.errors).toContainEqual({
        dataPath: ".fhirBundle.entry[0]",
        keyword: "required",
        message: "should have required property 'resourceType'",
        params: {
          missingProperty: "resourceType"
        },
        schemaPath: "#/required"
      });
    });

    describe("Patient", () => {
      it("should fail when extension is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[0].extension");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[0]",
          keyword: "required",
          message: "should have required property 'extension'",
          params: {
            missingProperty: "extension"
          },
          schemaPath: "#/definitions/Patient/required"
        });
      });
      it.todo("should fail when extension has a wrong size ????");

      it("should fail when extension url is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[0].extension[0].url");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          keyword: "required",
          dataPath: ".fhirBundle.entry[0].extension[0]",
          schemaPath: "#/definitions/Patient/properties/extension/items/required",
          params: { missingProperty: "url" },
          message: "should have required property 'url'"
        });
      });
      it.todo("should fail when extension url is not http://hl7.org/fhir/StructureDefinition/patient-nationality");

      it("should fail when extension code is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[0].extension[0].code");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          keyword: "required",
          dataPath: ".fhirBundle.entry[0].extension[0]",
          schemaPath: "#/definitions/Patient/properties/extension/items/required",
          params: { missingProperty: "code" },
          message: "should have required property 'code'"
        });
      });
      it("should fail when extension code text is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[0].extension[0].code.text");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          keyword: "required",
          dataPath: ".fhirBundle.entry[0].extension[0].code",
          schemaPath: "#/definitions/Patient/properties/extension/items/properties/code/required",
          params: { missingProperty: "text" },
          message: "should have required property 'text'"
        });
      });

      it("should fail when identifier is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[0].identifier");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[0]",
          keyword: "required",
          message: "should have required property 'identifier'",
          params: {
            missingProperty: "identifier"
          },
          schemaPath: "#/definitions/Patient/required"
        });
      });
      it.todo("should fail when identifier has a wrong size ????");

      it("should fail when identifier type is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[0].identifier[0].type");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          keyword: "required",
          dataPath: ".fhirBundle.entry[0].identifier[0]",
          schemaPath: "#/definitions/Patient/properties/identifier/items/required",
          params: { missingProperty: "type" },
          message: "should have required property 'type'"
        });
      });
      it.todo("should fail when identifier type is not PPN");

      it("should fail when identifier type text is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[0].identifier[1].type.text");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          keyword: "required",
          dataPath: ".fhirBundle.entry[0].identifier[1].type",
          schemaPath: "#/definitions/Patient/properties/identifier/items/properties/type/oneOf/1/required",
          params: { missingProperty: "text" },
          message: "should have required property 'text'"
        });
      });
      it.todo("should fail when identifier type text is not NRIC");

      it("should fail when identifier value is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[0].identifier[0].value");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          keyword: "required",
          dataPath: ".fhirBundle.entry[0].identifier[0]",
          schemaPath: "#/definitions/Patient/properties/identifier/items/required",
          params: { missingProperty: "value" },
          message: "should have required property 'value'"
        });
      });

      it("should fail when name is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[0].name");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[0]",
          keyword: "required",
          message: "should have required property 'name'",
          params: {
            missingProperty: "name"
          },
          schemaPath: "#/definitions/Patient/required"
        });
      });
      it.todo("should fail when name is wrong size ?");

      it("should fail when name text is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[0].name[0].text");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[0].name[0]",
          keyword: "required",
          message: "should have required property 'text'",
          params: {
            missingProperty: "text"
          },
          schemaPath: "#/definitions/Patient/properties/name/items/required"
        });
      });
      it("should fail when gender is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[0].gender");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[0]",
          keyword: "required",
          message: "should have required property 'gender'",
          params: {
            missingProperty: "gender"
          },
          schemaPath: "#/definitions/Patient/required"
        });
      });
      it.todo("should fail when gender is not .. ?");

      it("should fail when birthDate is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[0].birthDate");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[0]",
          keyword: "required",
          message: "should have required property 'birthDate'",
          params: {
            missingProperty: "birthDate"
          },
          schemaPath: "#/definitions/Patient/required"
        });
      });
      it("should fail when birthDate is not a date", () => {
        const document = set(cloneDeep(sampleDocument), "fhirBundle.entry[0].birthDate", "FOO");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[0].birthDate",
          keyword: "format",
          message: 'should match format "date"',
          params: { format: "date" },
          schemaPath: "#/definitions/Patient/properties/birthDate/format"
        });
      });
    });

    describe("Specimen", () => {
      it("should fail when type is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[1].type");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[1]",
          keyword: "required",
          message: "should have required property 'type'",
          params: {
            missingProperty: "type"
          },
          schemaPath: "#/required"
        });
      });
      it("should fail when type coding is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[1].type.coding");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[1].type",
          keyword: "required",
          message: "should have required property 'coding'",
          params: {
            missingProperty: "coding"
          },
          schemaPath: "#/properties/type/required"
        });
      });
      it("should fail when type coding system is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[1].type.coding[0].system");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[1].type.coding[0]",
          keyword: "required",
          message: "should have required property 'system'",
          params: {
            missingProperty: "system"
          },
          schemaPath: "#/definitions/Coding/items/required"
        });
      });
      it("should fail when type coding code is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[1].type.coding[0].code");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[1].type.coding[0]",
          keyword: "required",
          message: "should have required property 'code'",
          params: {
            missingProperty: "code"
          },
          schemaPath: "#/definitions/Coding/items/required"
        });
      });
      it("should fail when type coding display is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[1].type.coding[0].display");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[1].type.coding[0]",
          keyword: "required",
          message: "should have required property 'display'",
          params: {
            missingProperty: "display"
          },
          schemaPath: "#/definitions/Coding/items/required"
        });
      });
      it.todo("should fail when coding is wrong size ??");

      it("should fail when collection is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[1].collection");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[1]",
          keyword: "required",
          message: "should have required property 'collection'",
          params: {
            missingProperty: "collection"
          },
          schemaPath: "#/required"
        });
      });
      it("should fail when collection collectedDateTime is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[1].collection.collectedDateTime");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[1].collection",
          keyword: "required",
          message: "should have required property 'collectedDateTime'",
          params: {
            missingProperty: "collectedDateTime"
          },
          schemaPath: "#/properties/collection/required"
        });
      });
      it("should fail when collection collectedDateTime is not a date", () => {
        const document = set(cloneDeep(sampleDocument), "fhirBundle.entry[1].collection.collectedDateTime", "FOO");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[1].collection.collectedDateTime",
          keyword: "format",
          message: 'should match format "date-time"',
          params: { format: "date-time" },
          schemaPath: "#/properties/collection/properties/collectedDateTime/format"
        });
      });
    });

    describe("Observation", () => {
      it("should fail when identifier is missing", () => {
        // TODO is this like patient identifier ?
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[2].identifier");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[2]",
          keyword: "required",
          message: "should have required property 'identifier'",
          params: {
            missingProperty: "identifier"
          },
          schemaPath: "#/required"
        });
      });
      it.todo("should fail when identifier has wrong size ??");
      it("should fail when identifier value is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[2].identifier[0].value");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[2].identifier[0]",
          keyword: "required",
          message: "should have required property 'value'",
          params: {
            missingProperty: "value"
          },
          schemaPath: "#/properties/identifier/items/required"
        });
      });
      it("should fail when identifier type is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[2].identifier[0].type");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[2].identifier[0]",
          keyword: "required",
          message: "should have required property 'type'",
          params: {
            missingProperty: "type"
          },
          schemaPath: "#/properties/identifier/items/required"
        });
      });
      it.todo("should fail when identifier type is not ACSN");

      it("should fail when code is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[2].code");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[2]",
          keyword: "required",
          message: "should have required property 'code'",
          params: {
            missingProperty: "code"
          },
          schemaPath: "#/required"
        });
      });
      it("should fail when code coding is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[2].code.coding");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[2].code",
          keyword: "required",
          message: "should have required property 'coding'",
          params: {
            missingProperty: "coding"
          },
          schemaPath: "#/properties/code/required"
        });
      });
      it("should fail when code coding system is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[2].code.coding[0].system");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[2].code.coding[0]",
          keyword: "required",
          message: "should have required property 'system'",
          params: {
            missingProperty: "system"
          },
          schemaPath: "#/definitions/Coding/items/required"
        });
      });
      it("should fail when code coding code is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[2].code.coding[0].code");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[2].code.coding[0]",
          keyword: "required",
          message: "should have required property 'code'",
          params: {
            missingProperty: "code"
          },
          schemaPath: "#/definitions/Coding/items/required"
        });
      });
      it("should fail when code coding display is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[2].code.coding[0].display");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[2].code.coding[0]",
          keyword: "required",
          message: "should have required property 'display'",
          params: {
            missingProperty: "display"
          },
          schemaPath: "#/definitions/Coding/items/required"
        });
      });
      it.todo("should fail when code coding is wrong size ??");

      it("should fail when valueCodeableConcept is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[2].valueCodeableConcept");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[2]",
          keyword: "required",
          message: "should have required property 'valueCodeableConcept'",
          params: {
            missingProperty: "valueCodeableConcept"
          },
          schemaPath: "#/required"
        });
      });
      it("should fail when valueCodeableConcept coding is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[2].valueCodeableConcept.coding");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[2].valueCodeableConcept",
          keyword: "required",
          message: "should have required property 'coding'",
          params: {
            missingProperty: "coding"
          },
          schemaPath: "#/properties/valueCodeableConcept/required"
        });
      });
      it("should fail when valueCodeableConcept coding system is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[2].valueCodeableConcept.coding[0].system");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[2].valueCodeableConcept.coding[0]",
          keyword: "required",
          message: "should have required property 'system'",
          params: {
            missingProperty: "system"
          },
          schemaPath: "#/definitions/Coding/items/required"
        });
      });
      it("should fail when valueCodeableConcept coding code is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[2].valueCodeableConcept.coding[0].code");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[2].valueCodeableConcept.coding[0]",
          keyword: "required",
          message: "should have required property 'code'",
          params: {
            missingProperty: "code"
          },
          schemaPath: "#/definitions/Coding/items/required"
        });
      });
      it("should fail when valueCodeableConcept coding display is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[2].valueCodeableConcept.coding[0].display");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[2].valueCodeableConcept.coding[0]",
          keyword: "required",
          message: "should have required property 'display'",
          params: {
            missingProperty: "display"
          },
          schemaPath: "#/definitions/Coding/items/required"
        });
      });
      it.todo("should fail when valueCodeableConcept coding is wrong size ??");

      it("should fail when effectiveDateTime is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[2].effectiveDateTime");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[2]",
          keyword: "required",
          message: "should have required property 'effectiveDateTime'",
          params: {
            missingProperty: "effectiveDateTime"
          },
          schemaPath: "#/required"
        });
      });
      it("should fail when effectiveDateTime is not a date", () => {
        const document = set(cloneDeep(sampleDocument), "fhirBundle.entry[2].effectiveDateTime", "FOO");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[2].effectiveDateTime",
          keyword: "format",
          message: 'should match format "date-time"',
          params: { format: "date-time" },
          schemaPath: "#/properties/effectiveDateTime/format"
        });
      });

      it("should fail when status is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[2].status");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[2]",
          keyword: "required",
          message: "should have required property 'status'",
          params: {
            missingProperty: "status"
          },
          schemaPath: "#/required"
        });
      });
      it.todo("should fail when statis is not final");

      it("should fail when performer is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[2].performer");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[2]",
          keyword: "required",
          message: "should have required property 'performer'",
          params: {
            missingProperty: "performer"
          },
          schemaPath: "#/required"
        });
      });
      it("should fail when performer name is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[2].performer.name");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[2].performer",
          keyword: "required",
          message: "should have required property 'name'",
          params: {
            missingProperty: "name"
          },
          schemaPath: "#/properties/performer/required"
        });
      });
      it.todo("should fail when performer name is wrong size");
      it("should fail when performer name text is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[2].performer.name[0].text");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[2].performer.name[0]",
          keyword: "required",
          message: "should have required property 'text'",
          params: { missingProperty: "text" },
          schemaPath: "#/properties/performer/properties/name/items/required"
        });
      });

      it("should fail when qualification is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[2].qualification");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[2]",
          keyword: "required",
          message: "should have required property 'qualification'",
          params: {
            missingProperty: "qualification"
          },
          schemaPath: "#/required"
        });
      });
      it.todo("should fail when qualification is wrong size");
      it("should fail when qualification identifier is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[2].qualification[0].identifier");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[2].qualification[0]",
          keyword: "required",
          message: "should have required property 'identifier'",
          params: { missingProperty: "identifier" },
          schemaPath: "#/properties/qualification/items/required"
        });
      });
      it("should fail when qualification issuer is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[2].qualification[0].issuer");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[2].qualification[0]",
          keyword: "required",
          message: "should have required property 'issuer'",
          params: { missingProperty: "issuer" },
          schemaPath: "#/properties/qualification/items/required"
        });
      });
    });

    describe("Organization", () => {
      it("should fail when name is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[3].name");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[3]",
          keyword: "required",
          message: "should have required property 'name'",
          params: {
            missingProperty: "name"
          },
          schemaPath: "#/definitions/Organization/required"
        });
      });
      it("should fail when type is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[3].type");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[3]",
          keyword: "required",
          message: "should have required property 'type'",
          params: {
            missingProperty: "type"
          },
          schemaPath: "#/definitions/Organization/required"
        });
      });
      it("should fail when endpoint address is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[3].endpoint.address");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[3].endpoint",
          keyword: "required",
          message: "should have required property 'address'",
          params: {
            missingProperty: "address"
          },
          schemaPath: "#/definitions/Organization/properties/endpoint/required"
        });
      });
      it("should fail when endpoint address is not a URI", () => {
        const document = set(cloneDeep(sampleDocument), "fhirBundle.entry[3].endpoint.address", "FOO");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[3].endpoint.address",
          keyword: "format",
          message: 'should match format "uri"',
          params: { format: "uri" },
          schemaPath: "#/definitions/Organization/properties/endpoint/properties/address/format"
        });
      });

      it("should fail when contact is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[3].contact");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[3]",
          keyword: "required",
          message: "should have required property 'contact'",
          params: {
            missingProperty: "contact"
          },
          schemaPath: "#/definitions/Organization/required"
        });
      });

      it("should fail when contact telecom is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[3].contact.telecom");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[3].contact",
          keyword: "required",
          message: "should have required property 'telecom'",
          params: {
            missingProperty: "telecom"
          },
          schemaPath: "#/definitions/Organization/properties/contact/required"
        });
      });
      it.todo("should fail when contact telecom is wrong size");
      it("should fail when contact telecom system is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[3].contact.telecom[0].system");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[3].contact.telecom[0]",
          keyword: "required",
          message: "should have required property 'system'",
          params: {
            missingProperty: "system"
          },
          schemaPath: "#/definitions/Organization/properties/contact/properties/telecom/items/required"
        });
      });
      it.todo("shoud fail when contact telecom system is not phone");
      it("should fail when contact telecom value is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[3].contact.telecom[0].value");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[3].contact.telecom[0]",
          keyword: "required",
          message: "should have required property 'value'",
          params: {
            missingProperty: "value"
          },
          schemaPath: "#/definitions/Organization/properties/contact/properties/telecom/items/required"
        });
      });

      it("should fail when contact address is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[3].contact.address");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[3].contact",
          keyword: "required",
          message: "should have required property 'address'",
          params: {
            missingProperty: "address"
          },
          schemaPath: "#/definitions/Organization/properties/contact/required"
        });
      });
      it("should fail when contact address type is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[3].contact.address.type");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[3].contact.address",
          keyword: "required",
          message: "should have required property 'type'",
          params: {
            missingProperty: "type"
          },
          schemaPath: "#/definitions/Organization/properties/contact/properties/address/required"
        });
      });
      it("should fail when contact address use is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[3].contact.address.use");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[3].contact.address",
          keyword: "required",
          message: "should have required property 'use'",
          params: {
            missingProperty: "use"
          },
          schemaPath: "#/definitions/Organization/properties/contact/properties/address/required"
        });
      });
      it("should fail when contact address text is missing", () => {
        const document = omit(cloneDeep(sampleDocument), "fhirBundle.entry[3].contact.address.text");
        expect(validator(document)).toBe(false);
        expect(validator.errors).toContainEqual({
          dataPath: ".fhirBundle.entry[3].contact.address",
          keyword: "required",
          message: "should have required property 'text'",
          params: {
            missingProperty: "text"
          },
          schemaPath: "#/definitions/Organization/properties/contact/properties/address/required"
        });
      });
      it.todo("should fail when contact address type is not work");
      it.todo("should fail when contact address use is not physical");
    });
  });
});
