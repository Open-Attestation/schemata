// Samples are exported in a TS file so that it won't be hosted on the frontend

export const sampleDocument = {
  recipient: {
    name: "Matthea Loo",
  },
  programme: {
    name: "GeekOut 2020",
    startDate: "2020-10-12",
    endDate: "2020-10-14",
  },
  signatory: {
    name: "Alice",
    position: "Boss",
    organisation: "ABC",
    signature: "signature",
  },
};

export const sampleDocumentWithIssuerAndTemplate = {
  ...sampleDocument,
  issuers: [
    {
      name: "GovTech",
      documentStore: "0x8Fc57204c35fb9317D91285eF52D6b892EC08cD3",
      identityProof: {
        type: "DNS-TXT",
        location: "example.openattestation.com",
      },
    },
  ],
  $template: {
    name: "GEEK_OUT_2020",
    type: "EMBEDDED_RENDERER",
    url: "https://stoic-lumiere-531096.netlify.app",
  },
};
