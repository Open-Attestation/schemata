import context from "./invoice-context.json";
import { expand, JsonLdDocument } from "jsonld";
import { sampleDocument } from "./sample-data";

const expandDocument = async (mergedDocument: JsonLdDocument) => {
  return await expand(mergedDocument, {
    expansionMap: function (info) {
      if (info.unmappedProperty) {
        throw new Error(
          '"The property ' +
            (info.activeProperty ? info.activeProperty + "." : "") +
            info.unmappedProperty +
            ' in the input was not defined in the context"',
        );
      }
    },
  });
};

describe("invoice context", () => {
  it("should work with valid invoice", async () => {
    const mergedDocument = {
      "@context": context["@context"],
      ...sampleDocument,
    } as JsonLdDocument;

    expect(await expandDocument(mergedDocument)).toBeTruthy();
  });

  it("should throw error when property not defined in context", async () => {
    const modifiedSampleDocument = {
      ...sampleDocument,
      invalidInvoiceProperties: "Random String",
    };

    const mergedDocument = {
      "@context": context["@context"],
      ...modifiedSampleDocument,
    } as JsonLdDocument;

    return expect(expandDocument(mergedDocument)).rejects.toThrow(
      "The property invalidInvoiceProperties in the input was not defined in the context",
    );
  });
});
