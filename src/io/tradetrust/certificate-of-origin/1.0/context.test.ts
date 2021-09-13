import CertificateOfOriginSchema from "./CertificateOfOrigin.v3.json";
import CertificateOfOriginSampleData from "./certificate-of-origin-data.json";
import { expand, JsonLdDocument } from "jsonld";

const expandDocument = async (mergedDocument: JsonLdDocument) => {
  return await expand(mergedDocument, {
    expansionMap: function(info) {
      if (info.unmappedProperty) {
        throw new Error(
          '"The property ' +
            (info.activeProperty ? info.activeProperty + "." : "") +
            info.unmappedProperty +
            ' in the input was not defined in the context"'
        );
      }
    }
  });
};

describe("certificate of origin schema", () => {
  it("should work with valid certificate of origin", async () => {
    const mergedDocument = {
      ...CertificateOfOriginSchema,
      ...CertificateOfOriginSampleData
    } as JsonLdDocument;
    expect(await expandDocument(mergedDocument)).toBeTruthy();
  });

  it("should throw error when unknown context or properties found", async () => {
    const modifiedData = {
      ...CertificateOfOriginSampleData,
      invalidCOOProperties: "Random String"
    };

    const mergedDocument = {
      ...CertificateOfOriginSchema,
      ...modifiedData
    } as JsonLdDocument;

    return expandDocument(mergedDocument).catch(e => {
      expect(e.message).toMatchInlineSnapshot(
        `"\\"The property invalidCOOProperties in the input was not defined in the context\\""`
      );
    });
  });
});
