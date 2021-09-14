import Ajv from "ajv";
import schema from "./schema.json";
import sampleDocument from "./invoice-data.json";
import { cloneDeep, omit } from "lodash";

const ajv = new Ajv({ allErrors: true });
const validator = ajv.compile(schema);

describe("invoice schema", () => {
  it("should work with valid invoice", () => {
    expect(validator(sampleDocument)).toBe(true);
  });

  it("should fail when document does not have invoice id", () => {
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
});
