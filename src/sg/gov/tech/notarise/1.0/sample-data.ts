// Samples are exported in a TS file so that it won't be hosted on the frontend

export const samplePdt = {
  notarisationMetadata: {
    reference: "967857",
    notarisedOn: "2020-09-27T06:15:00Z",
    passportNumber: "DT173NV",
    url: "https://example.com",
    signedEuHealthCerts: [
      {
        type: "PCR",
        expiryDateTime: "2022-12-09T20:20:50+08:00",
        qr: "HC1:ABCDE...",
        appleCovidCardUrl: "https://redirect.health.apple.com/EU-DCC/#...",
      },
    ],
  },
};

export const sampleVac = {
  notarisationMetadata: {
    reference: "967857",
    notarisedOn: "2020-09-27T06:15:00Z",
    passportNumber: "DT173NV",
    url: "https://example.com",
    signedEuHealthCerts: [
      {
        type: "VAC",
        expiryDateTime: "2022-12-09T20:20:50+08:00",
        vaccineCode: "3339641000133109",
        dose: 1,
        qr: "HC1:ABCDE...",
        appleCovidCardUrl: "https://redirect.health.apple.com/EU-DCC/#...",
      },
      {
        type: "VAC",
        expiryDateTime: "2022-12-09T20:20:50+08:00",
        vaccineCode: "3339641000133109",
        dose: 2,
        qr: "HC1:FGHIJ...",
        appleCovidCardUrl: "https://redirect.health.apple.com/EU-DCC/#...",
      },
    ],
  },
};

export const sampleDocWithNotarisationMetadata = {
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
    url: "https://path-to-renderer",
  },
  notarisationMetadata: {
    reference: "967857",
    notarisedOn: "2020-09-27T06:15:00Z",
    passportNumber: "DT173NV",
    url: "https://example.com",
  },
};
