import Ajv from "ajv";
import axios from "axios";
import schema from "./schema.json";
import vaccineHealthCert from "./interim-vaccination-healthcert-unwrapped.json";

function loadSchema(uri: string) {
  return axios.get(uri).then((res) => {
    return res.data;
  });
}
const ajv = new Ajv({ allErrors: true, loadSchema });
let validator: Ajv.ValidateFunction;

describe("interim vaccination healthcert schema", () => {
  beforeAll(async () => {
    validator = await ajv.compileAsync(schema);
  });

  it("should work with valid vaccine healthcert", () => {
    expect(validator(vaccineHealthCert)).toBe(true);
  });
});
