import Ajv from "ajv";
import schema from "./schema.json";
import { cloneDeep, omit } from "lodash";

const sampleDocument = {
  name: "TradeTrust Bill of Lading v3",
  scac: "SGPU",
  blNumber: "SGCNM21566325",
  vessel: "vessel",
  voyageNo: "voyageNo",
  portOfLoading: "Singapore",
  portOfDischarge: "Paris",
  carrierName: "A.P. Moller",
  placeOfReceipt: "Beijing",
  placeOfDelivery: "Singapore",
  packages: [
    {
      description: "description",
      weight: "10",
      measurement: "20",
    },
  ],
  shipper: {
    name: "Shipper Name",
    address: {
      street: "101 ORCHARD ROAD",
      country: "SINGAPORE",
    },
  },
  consignee: {
    name: "Consignee name",
  },
  notifyParty: {
    name: "Notify Party Name",
  },
};

const ajv = new Ajv({ allErrors: true });
const validator = ajv.compile(schema);

describe("bill of lading schema", () => {
  it("should work with valid bill of lading", () => {
    expect(validator(sampleDocument)).toBe(true);
  });

  it("should fail when document does not have scac", () => {
    const document = omit(cloneDeep(sampleDocument), "scac");

    expect(validator(document)).toBe(false);
    expect(validator.errors).toMatchInlineSnapshot(`
      Array [
        Object {
          "dataPath": "",
          "keyword": "required",
          "message": "should have required property 'scac'",
          "params": Object {
            "missingProperty": "scac",
          },
          "schemaPath": "#/required",
        },
      ]
    `);
  });

  it("should fail when document does not have blNumber", () => {
    const document = omit(cloneDeep(sampleDocument), "blNumber");

    expect(validator(document)).toBe(false);
    expect(validator.errors).toMatchInlineSnapshot(`
      Array [
        Object {
          "dataPath": "",
          "keyword": "required",
          "message": "should have required property 'blNumber'",
          "params": Object {
            "missingProperty": "blNumber",
          },
          "schemaPath": "#/required",
        },
      ]
    `);
  });
});
