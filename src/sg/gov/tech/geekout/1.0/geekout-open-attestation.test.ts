import Ajv from "ajv";
import { cloneDeep, omit } from "lodash";
import schema from "./geekout-open-attestation.json";
import axios from "axios";

const sampleDocJson = {
  recipient: {
    name: "Matthea Loo",
  },
  programme: {
    name: "GeekOut 2020",
    startDate: "2020-10-12",
    endDate: "2020-10-14",
  },
  signatory: {
    name: "Alice",
    position: "Boss",
    organisation: "ABC",
    signature: "signature",
  },
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
    url: "https://stoic-lumiere-531096.netlify.app",
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

  //To test if geekout schema is correctly merged
  it("should return array of errors without recipient name", () => {
    const badDoc = omit(cloneDeep(sampleDocJson), "recipient.name");
    expect(validator(badDoc)).toBe(false);
    expect(validator.errors).toStrictEqual([
      {
        keyword: "required",
        dataPath: ".recipient",
        schemaPath:
          "https://schemata.openattestation.com/sg/gov/tech/geekout/1.0/schema.json/properties/recipient/required",
        params: { missingProperty: "name" },
        message: "should have required property 'name'",
      },
    ]);
  });

  //To test if oa schema is correctly merged
  it("should return array of errors without issuer name", () => {
    const badDoc = omit(cloneDeep(sampleDocJson), "issuers[0].name");
    expect(validator(badDoc)).toBe(false);
    expect(validator.errors).toContainEqual({
      keyword: "required",
      dataPath: ".issuers[0]",
      schemaPath: "#/required",
      params: { missingProperty: "name" },
      message: "should have required property 'name'",
    });
  });
});
