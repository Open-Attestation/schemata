import context from "./invoice-context.json";
import { expand, JsonLdDocument } from "jsonld";

const sampleDocument = {
  name: "TradeTrust Invoice v3",
  billFrom: {
    name: "User 1",
    streetAddress: "Street 1",
    city: "City 1 ",
    postalCode: "Postal 1",
    phoneNumber: "Number 1",
  },
  billTo: {
    company: {
      name: "Company 1",
      streetAddress: "Company Addr 1",
      city: "Company City 1",
      postalCode: "Company Postal 1",
      phoneNumber: "Company Number 1",
    },
    name: "BillTo 1",
    email: "Email",
  },
  id: "Invoice 1",
  date: "12 Jan",
  customerId: "321",
  terms: "Terms",
  subtotal: "Billable 1",
  tax: "Billable Tax 1",
  taxTotal: "Billable Tax Total 1",
  total: "Billable Total 1",
  billableItems: [
    {
      description: "Billable 1",
      quantity: "Billable Tax 1",
      unitPrice: "Billable Tax Total 1",
      amount: "Billable Total 1",
    },
    {
      description: "Billable 2",
      quantity: "Billable Tax 2",
      unitPrice: "Billable Tax Total 2",
      amount: "Billable Total 2",
    },
  ],
};

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
