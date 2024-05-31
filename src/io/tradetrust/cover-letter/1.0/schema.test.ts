import Ajv from "ajv";
import schema from "./schema.json";
import { cloneDeep, omit } from "lodash";
import { sampleDocument } from "./sample-data";

const ajv = new Ajv({ allErrors: true });
const validator = ajv.compile(schema);

describe("cover letter schema", () => {
  it("should work with valid cover letter", () => {
    expect(validator(sampleDocument)).toBe(true);
  });

  it("should fail when document does not have cover letter title", () => {
    const document = omit(cloneDeep(sampleDocument), "title");

    expect(validator(document)).toBe(false);
    expect(validator.errors).toMatchInlineSnapshot(`
      Array [
        Object {
          "dataPath": "",
          "keyword": "required",
          "message": "should have required property 'title'",
          "params": Object {
            "missingProperty": "title",
          },
          "schemaPath": "#/required",
        },
      ]
    `);
  });
});
