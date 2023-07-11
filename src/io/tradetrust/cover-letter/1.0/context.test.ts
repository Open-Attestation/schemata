import context from "./cover-letter-context.json";
import sampleDocument from "./cover-letter-data.json";
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

describe("cover letter context", () => {
  it("should work with valid cover letter", async () => {
    const mergedDocument = {
      "@context": context["@context"],
      ...sampleDocument
    } as JsonLdDocument;

    expect(await expandDocument(mergedDocument)).toBeTruthy();
  });

  it("should throw error when property not defined in context", async () => {
    const modifiedSampleDocument = {
      ...sampleDocument,
      invalidCoverLetterProperties: "Random String"
    };

    const mergedDocument = {
      "@context": context["@context"],
      ...modifiedSampleDocument
    } as JsonLdDocument;

    return expect(expandDocument(mergedDocument)).rejects.toThrowError(
      "The property invalidCoverLetterProperties in the input was not defined in the context"
    );
  });
});
