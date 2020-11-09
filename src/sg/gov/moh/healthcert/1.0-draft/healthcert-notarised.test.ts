import Ajv from "ajv";
import schema from "./healthcert-notarised-schema.json";
import sampleDocJson from "./healthcert-notarised-document.json";
import axios from "axios";

function loadSchema(uri: string) {
  return axios.get(uri).then(res => {
    return res.data;
  });
}
const ajv = new Ajv({ allErrors: true, loadSchema: loadSchema });
let validator: Ajv.ValidateFunction;

// eslint-disable-next-line jest/no-disabled-tests
describe("schema", () => {
  beforeAll(async () => {
    validator = await ajv.compileAsync(schema);
  });
  it("should work with valid json", () => {
    expect(validator(sampleDocJson)).toBe(true);
  });
});
