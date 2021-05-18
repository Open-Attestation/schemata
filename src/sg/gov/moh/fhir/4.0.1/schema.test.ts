import Ajv from "ajv";
import schema from "./schema.json";
import draft06 from "../../../../../draft-06-schema.json";
import covidcert from "./covidcert.json";
import healthcert from "./healthcert.json";
import axios from "axios";

function loadSchema(uri: string) {
  return axios.get(uri).then(res => {
    return res.data;
  });
}
const ajv = new Ajv({ allErrors: true, loadSchema: loadSchema });
ajv.addMetaSchema(draft06, draft06.$schema);
let validator: Ajv.ValidateFunction;

describe("schema", () => {
  beforeAll(async () => {
    // shut up ajv ... really
    jest.spyOn(console, "warn").mockImplementation(() => jest.fn());
    validator = await ajv.compileAsync(schema);
  });
  it("should work with valid json", () => {
    expect(validator(covidcert)).toBe(true);
  });
  it("should work with valid json containing references", () => {
    expect(validator(healthcert)).toBe(true);
  });
});
