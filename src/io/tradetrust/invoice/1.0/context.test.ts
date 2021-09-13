import InvoiceSchema from "./Invoice.v3.json";
import InvoiceSampleData from "./invoice-data.json";
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

describe("invoice schema", () => {
  it("should work with valid invoice", async () => {
    const mergedDocument = {
      ...InvoiceSchema,
      ...InvoiceSampleData
    } as JsonLdDocument;
    expect(await expandDocument(mergedDocument)).toBeTruthy();
  });

  it("should throw error when unknown context or properties found", async () => {
    const modifiedData = {
      ...InvoiceSampleData,
      invalidInvoiceProperties: "Random String"
    };

    const mergedDocument = {
      ...InvoiceSchema,
      ...modifiedData
    } as JsonLdDocument;

    return expandDocument(mergedDocument).catch(e => {
      expect(e.message).toMatchInlineSnapshot(
        `"\\"The property invalidInvoiceProperties in the input was not defined in the context\\""`
      );
    });
  });
});
