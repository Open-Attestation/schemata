import Ajv from "ajv";
import schema from "./interim-healthcert-schema.json";
import pdtHealthCert from "./interim-pdt-unwrapped-healthcert.json";
import vaccineHealthCert from "./interim-vaccine-unwrapped-healthcert.json";

const ajv = new Ajv({ allErrors: true });
const validator = ajv.compile(schema);

describe("interim pdt healthcert schema", () => {
  it("should work with valid pdt healthcert", () => {
    expect(validator(pdtHealthCert)).toBe(true);
  });
  it("should work with valid vaccine healthcert", () => {
    expect(validator(vaccineHealthCert)).toBe(true);
  });
});
