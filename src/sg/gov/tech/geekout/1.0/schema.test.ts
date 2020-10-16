import Ajv from "ajv";
import { cloneDeep, omit } from "lodash";
import schema from "./schema.json";
import sampleDocJson from "./sample-document.json";

const ajv = new Ajv({ allErrors: true });
const validator = ajv.compile(schema);
const doc = sampleDocJson;
describe("schema", () => {
  it("should work with valid json", () => {
    expect(validator(doc)).toBe(true);
  });

  describe("recipient", () => {
    it("should return array of errors without recipient", () => {
      const badDoc = omit(cloneDeep(doc), "recipient");
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toEqual([
        {
          keyword: "required",
          dataPath: "",
          schemaPath: "#/required",
          params: { missingProperty: "recipient" },
          message: "should have required property 'recipient'"
        }
      ]);
    });
    it("should return array of errors without name", () => {
      const badDoc = omit(cloneDeep(doc), "recipient.name");
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toEqual([
        {
          keyword: "required",
          dataPath: ".recipient",
          schemaPath: "#/properties/recipient/required",
          params: { missingProperty: "name" },
          message: "should have required property 'name'"
        }
      ]);
    });
  });

  describe("programme", () => {
    it("should return array of errors without programme", () => {
      const badDoc = omit(cloneDeep(doc), "programme");
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toEqual([
        {
          keyword: "required",
          dataPath: "",
          schemaPath: "#/required",
          params: { missingProperty: "programme" },
          message: "should have required property 'programme'"
        }
      ]);
    });
    it("should return array of errors without name", () => {
      const badDoc = omit(cloneDeep(doc), "programme.name");
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toEqual([
        {
          keyword: "required",
          dataPath: ".programme",
          schemaPath: "#/properties/programme/required",
          params: { missingProperty: "name" },
          message: "should have required property 'name'"
        }
      ]);
    });
    it("should return array of errors without startDate", () => {
      const badDoc = omit(cloneDeep(doc), "programme.startDate");
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toEqual([
        {
          keyword: "required",
          dataPath: ".programme",
          schemaPath: "#/properties/programme/required",
          params: { missingProperty: "startDate" },
          message: "should have required property 'startDate'"
        }
      ]);
    });
    it("should return array of errors without endDate", () => {
      const badDoc = omit(cloneDeep(doc), "programme.endDate");
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toEqual([
        {
          keyword: "required",
          dataPath: ".programme",
          schemaPath: "#/properties/programme/required",
          params: { missingProperty: "endDate" },
          message: "should have required property 'endDate'"
        }
      ]);
    });
  });

  describe("signatory", () => {
    it("should return array of errors without signatory", () => {
      const badDoc = omit(cloneDeep(doc), "signatory");
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toEqual([
        {
          keyword: "required",
          dataPath: "",
          schemaPath: "#/required",
          params: { missingProperty: "signatory" },
          message: "should have required property 'signatory'"
        }
      ]);
    });
    it("should return array of errors without name", () => {
      const badDoc = omit(cloneDeep(doc), "signatory.name");
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toEqual([
        {
          keyword: "required",
          dataPath: ".signatory",
          schemaPath: "#/properties/signatory/required",
          params: { missingProperty: "name" },
          message: "should have required property 'name'"
        }
      ]);
    });
    it("should return array of errors without position", () => {
      const badDoc = omit(cloneDeep(doc), "signatory.position");
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toEqual([
        {
          keyword: "required",
          dataPath: ".signatory",
          schemaPath: "#/properties/signatory/required",
          params: { missingProperty: "position" },
          message: "should have required property 'position'"
        }
      ]);
    });
    it("should return array of errors without organisation", () => {
      const badDoc = omit(cloneDeep(doc), "signatory.organisation");
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toEqual([
        {
          keyword: "required",
          dataPath: ".signatory",
          schemaPath: "#/properties/signatory/required",
          params: { missingProperty: "organisation" },
          message: "should have required property 'organisation'"
        }
      ]);
    });
    it("should return array of errors without signature", () => {
      const badDoc = omit(cloneDeep(doc), "signatory.signature");
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toEqual([
        {
          keyword: "required",
          dataPath: ".signatory",
          schemaPath: "#/properties/signatory/required",
          params: { missingProperty: "signature" },
          message: "should have required property 'signature'"
        }
      ]);
    });
  });
});
