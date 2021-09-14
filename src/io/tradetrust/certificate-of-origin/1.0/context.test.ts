import context from "./CertificateOfOrigin.v3.json";
import sampleDocument from "./certificate-of-origin-data.json";
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

describe("certificate of origin context", () => {
  it("should work with valid certificate of origin", async () => {
    const mergedDocument = {
      ...context,
      ...sampleDocument
    } as JsonLdDocument;
    expect(await expandDocument(mergedDocument)).toBeTruthy();
  });

  it("should throw error when unknown context or properties found", () => {
    const modifiedData = {
      ...sampleDocument,
      invalidCOOProperties: "Random String"
    };

    const mergedDocument = {
      ...context,
      ...modifiedData
    } as JsonLdDocument;

    return expect(expandDocument(mergedDocument)).rejects.toThrowError(
      "The property invalidCOOProperties in the input was not defined in the context"
    );
  });
});
