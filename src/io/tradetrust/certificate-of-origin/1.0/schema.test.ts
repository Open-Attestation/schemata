import Ajv from "ajv";
import schema from "./schema.json";
import sampleDocument from "./certificate-of-origin-wrapped.json";

const ajv = new Ajv({ allErrors: true });
const validator = ajv.compile(schema);

describe("certificate of origin schema", () => {
  it("should work with valid certificate of origin", () => {
    expect(validator(sampleDocument)).toBe(true);
  });
});
