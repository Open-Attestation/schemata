import Ajv from "ajv";
import schema from "./schema.json";
import vaccineHealthCert from "./interim-vaccination-healthcert-unwrapped.json";

const ajv = new Ajv({ allErrors: true });
const validator = ajv.compile(schema);

describe("interim vaccination healthcert schema", () => {
  it("should work with valid vaccine healthcert", () => {
    expect(validator(vaccineHealthCert)).toBe(true);
  });
});
