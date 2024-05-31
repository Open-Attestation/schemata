import Ajv from "ajv";
import { cloneDeep, omit } from "lodash";
import schema from "./schema.json";
import { sampleDocument as sampleDoc } from "./sample-data";

const ajv = new Ajv({ allErrors: true });
const validator = ajv.compile(schema);
describe("schema", () => {
  it("should work with valid json", () => {
    expect(validator(sampleDoc)).toBe(true);
  });

  describe("recipient", () => {
    it("should return array of errors without recipient", () => {
      const badDoc = omit(cloneDeep(sampleDoc), "recipient");
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toStrictEqual([
        {
          keyword: "required",
          dataPath: "",
          schemaPath: "#/required",
          params: { missingProperty: "recipient" },
          message: "should have required property 'recipient'",
        },
      ]);
    });
    it("should return array of errors without recipient name", () => {
      const badDoc = omit(cloneDeep(sampleDoc), "recipient.name");
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toStrictEqual([
        {
          keyword: "required",
          dataPath: ".recipient",
          schemaPath: "#/properties/recipient/required",
          params: { missingProperty: "name" },
          message: "should have required property 'name'",
        },
      ]);
    });
  });

  describe("programme", () => {
    it("should return array of errors without programme", () => {
      const badDoc = omit(cloneDeep(sampleDoc), "programme");
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toStrictEqual([
        {
          keyword: "required",
          dataPath: "",
          schemaPath: "#/required",
          params: { missingProperty: "programme" },
          message: "should have required property 'programme'",
        },
      ]);
    });
    it("should return array of errors without programme name", () => {
      const badDoc = omit(cloneDeep(sampleDoc), "programme.name");
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toStrictEqual([
        {
          keyword: "required",
          dataPath: ".programme",
          schemaPath: "#/properties/programme/required",
          params: { missingProperty: "name" },
          message: "should have required property 'name'",
        },
      ]);
    });
    it("should return array of errors without programme startDate", () => {
      const badDoc = omit(cloneDeep(sampleDoc), "programme.startDate");
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toStrictEqual([
        {
          keyword: "required",
          dataPath: ".programme",
          schemaPath: "#/properties/programme/required",
          params: { missingProperty: "startDate" },
          message: "should have required property 'startDate'",
        },
      ]);
    });
    it("should return array of errors if programme startDate is not date format", () => {
      const badDoc = cloneDeep(sampleDoc);
      badDoc.programme.startDate = "2-2-2";
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toStrictEqual([
        {
          keyword: "format",
          dataPath: ".programme.startDate",
          schemaPath: "#/properties/programme/properties/startDate/format",
          params: { format: "date" },
          message: 'should match format "date"',
        },
      ]);
    });
    it("should return array of errors without programme endDate", () => {
      const badDoc = omit(cloneDeep(sampleDoc), "programme.endDate");
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toStrictEqual([
        {
          keyword: "required",
          dataPath: ".programme",
          schemaPath: "#/properties/programme/required",
          params: { missingProperty: "endDate" },
          message: "should have required property 'endDate'",
        },
      ]);
    });
    it("should return array of errors if endDate is not date format", () => {
      const badDoc = cloneDeep(sampleDoc);
      badDoc.programme.endDate = "2-2-2";
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toStrictEqual([
        {
          keyword: "format",
          dataPath: ".programme.endDate",
          schemaPath: "#/properties/programme/properties/endDate/format",
          params: { format: "date" },
          message: 'should match format "date"',
        },
      ]);
    });
  });

  describe("signatory", () => {
    it("should return array of errors without signatory", () => {
      const badDoc = omit(cloneDeep(sampleDoc), "signatory");
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toStrictEqual([
        {
          keyword: "required",
          dataPath: "",
          schemaPath: "#/required",
          params: { missingProperty: "signatory" },
          message: "should have required property 'signatory'",
        },
      ]);
    });
    it("should return array of errors without signatory name", () => {
      const badDoc = omit(cloneDeep(sampleDoc), "signatory.name");
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toStrictEqual([
        {
          keyword: "required",
          dataPath: ".signatory",
          schemaPath: "#/properties/signatory/required",
          params: { missingProperty: "name" },
          message: "should have required property 'name'",
        },
      ]);
    });
    it("should return array of errors without signatory position", () => {
      const badDoc = omit(cloneDeep(sampleDoc), "signatory.position");
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toStrictEqual([
        {
          keyword: "required",
          dataPath: ".signatory",
          schemaPath: "#/properties/signatory/required",
          params: { missingProperty: "position" },
          message: "should have required property 'position'",
        },
      ]);
    });
    it("should return array of errors without signatory organisation", () => {
      const badDoc = omit(cloneDeep(sampleDoc), "signatory.organisation");
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toStrictEqual([
        {
          keyword: "required",
          dataPath: ".signatory",
          schemaPath: "#/properties/signatory/required",
          params: { missingProperty: "organisation" },
          message: "should have required property 'organisation'",
        },
      ]);
    });
    it("should return array of errors without signatory signature", () => {
      const badDoc = omit(cloneDeep(sampleDoc), "signatory.signature");
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toStrictEqual([
        {
          keyword: "required",
          dataPath: ".signatory",
          schemaPath: "#/properties/signatory/required",
          params: { missingProperty: "signature" },
          message: "should have required property 'signature'",
        },
      ]);
    });
  });
});
