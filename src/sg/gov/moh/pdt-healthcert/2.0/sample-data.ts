// Samples are exported in a TS file so that it won't be hosted on the frontend

export const sampleDocument = {
  id: "76caf3f9-5591-4ef1-b756-1cb47a76dede",
  version: "pdt-healthcert-v2.0",
  type: "PCR",
  validFrom: "2021-08-24T04:22:36.062Z",
  fhirVersion: "4.0.1",
  fhirBundle: {
    resourceType: "Bundle",
    type: "collection",
    entry: [
      {
        fullUrl: "urn:uuid:ba7b7c8d-c509-4d9d-be4e-f99b6de29e23",
        resource: {
          resourceType: "Patient",
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/patient-nationality",
              extension: [
                {
                  url: "code",
                  valueCodeableConcept: {
                    text: "Patient Nationality",
                    coding: [{ system: "urn:iso:std:iso:3166", code: "SG" }],
                  },
                },
              ],
            },
          ],
          identifier: [
            {
              id: "PPN",
              type: {
                coding: [
                  {
                    system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                    code: "PPN",
                    display: "Passport Number",
                  },
                ],
              },
              value: "E7831177G",
            },
            { id: "NRIC-FIN", value: "S9098989Z" },
          ],
          name: [{ text: "Tan Chen Chen" }],
          gender: "female",
          birthDate: "1990-01-15",
        },
      },
      {
        fullUrl: "urn:uuid:7729970e-ab26-469f-b3e5-36a42ec24146",
        resource: {
          resourceType: "Observation",
          specimen: {
            type: "Specimen",
            reference: "urn:uuid:0275bfaf-48fb-44e0-80cd-9c504f80e6ae",
          },
          performer: [
            {
              type: "Practitioner",
              reference: "urn:uuid:3dbff0de-d4a4-4e1d-98bf-af7428b8a04b",
            },
            {
              id: "LHP",
              type: "Organization",
              reference: "urn:uuid:fa2328af-4882-4eaa-8c28-66dab46950f1",
            },
            {
              id: "AL",
              type: "Organization",
              reference: "urn:uuid:839a7c54-6b40-41cb-b10d-9295d7e75f77",
            },
          ],
          identifier: [
            {
              id: "ACSN",
              type: {
                coding: [
                  {
                    system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                    code: "ACSN",
                    display: "Accession ID",
                  },
                ],
              },
              value: "123456789",
            },
          ],
          category: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "840539006",
                  display: "COVID-19",
                },
              ],
            },
          ],
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "94531-1",
                display: "SARS-CoV-2 (COVID-19) RNA panel - Respiratory specimen by NAA with probe detection",
              },
            ],
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "260385009",
                display: "Negative",
              },
            ],
          },
          effectiveDateTime: "2020-09-28T06:15:00Z",
          status: "final",
        },
      },
      {
        fullUrl: "urn:uuid:0275bfaf-48fb-44e0-80cd-9c504f80e6ae",
        resource: {
          resourceType: "Specimen",
          type: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "258500001",
                display: "Nasopharyngeal swab",
              },
            ],
          },
          collection: { collectedDateTime: "2020-09-27T06:15:00Z" },
        },
      },
      {
        fullUrl: "urn:uuid:3dbff0de-d4a4-4e1d-98bf-af7428b8a04b",
        resource: {
          resourceType: "Practitioner",
          name: [{ text: "Dr Michael Lim" }],
          qualification: [
            {
              code: {
                coding: [
                  {
                    system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                    code: "MCR",
                    display: "Practitioner Medicare number",
                  },
                ],
              },
              identifier: [{ id: "MCR", value: "123456" }],
              issuer: {
                type: "Organization",
                reference: "urn:uuid:bc7065ee-42aa-473a-a614-afd8a7b30b1e",
              },
            },
          ],
        },
      },
      {
        fullUrl: "urn:uuid:bc7065ee-42aa-473a-a614-afd8a7b30b1e",
        resource: {
          resourceType: "Organization",
          name: "Ministry of Health (MOH)",
          type: [
            {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/organization-type",
                  code: "govt",
                  display: "Government",
                },
              ],
            },
          ],
          contact: [
            {
              telecom: [
                { system: "url", value: "https://www.moh.gov.sg" },
                { system: "phone", value: "+6563259220" },
              ],
              address: {
                type: "physical",
                use: "work",
                text: "Ministry of Health, 16 College Road, College of Medicine Building, Singapore 169854",
              },
            },
          ],
        },
      },
      {
        fullUrl: "urn:uuid:fa2328af-4882-4eaa-8c28-66dab46950f1",
        resource: {
          resourceType: "Organization",
          name: "MacRitchie Medical Clinic",
          type: [
            {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/organization-type",
                  code: "prov",
                  display: "Healthcare Provider",
                },
              ],
              text: "Licensed Healthcare Provider",
            },
          ],
          contact: [
            {
              telecom: [
                {
                  system: "url",
                  value: "https://www.macritchieclinic.com.sg",
                },
                { system: "phone", value: "+6561234567" },
              ],
              address: {
                type: "physical",
                use: "work",
                text: "MacRitchie Hospital, Thomson Road, Singapore 123000",
              },
            },
          ],
        },
      },
      {
        fullUrl: "urn:uuid:839a7c54-6b40-41cb-b10d-9295d7e75f77",
        resource: {
          resourceType: "Organization",
          name: "MacRitchie Laboratory",
          type: [
            {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/organization-type",
                  code: "prov",
                  display: "Healthcare Provider",
                },
              ],
              text: "Accredited Laboratory",
            },
          ],
          contact: [
            {
              telecom: [
                {
                  system: "url",
                  value: "https://www.macritchielaboratory.com.sg",
                },
                { system: "phone", value: "+6567654321" },
              ],
              address: {
                type: "physical",
                use: "work",
                text: "2 Thomson Avenue 4, Singapore 098888",
              },
            },
          ],
        },
      },
    ],
  },
  logo: "data:image/png;base64,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",
};

export const sampleClinicDocument = {
  id: "76caf3f9-5591-4ef1-b756-1cb47a76dede",
  version: "pdt-healthcert-v2.0",
  type: "PCR",
  validFrom: "2021-08-24T04:22:36.062Z",
  fhirVersion: "4.0.1",
  fhirBundle: {
    resourceType: "Bundle",
    type: "collection",
    entry: [
      {
        fullUrl: "urn:uuid:ba7b7c8d-c509-4d9d-be4e-f99b6de29e23",
        resource: {
          resourceType: "Patient",
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/patient-nationality",
              extension: [
                {
                  url: "code",
                  valueCodeableConcept: {
                    text: "Patient Nationality",
                    coding: [{ system: "urn:iso:std:iso:3166", code: "SG" }],
                  },
                },
              ],
            },
          ],
          identifier: [
            {
              id: "PPN",
              type: {
                coding: [
                  {
                    system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                    code: "PPN",
                    display: "Passport Number",
                  },
                ],
              },
              value: "E7831177G",
            },
            { id: "NRIC-FIN", value: "S9098989Z" },
          ],
          name: [{ text: "Tan Chen Chen" }],
          gender: "female",
          birthDate: "1990-01-15",
        },
      },
      {
        fullUrl: "urn:uuid:7729970e-ab26-469f-b3e5-36a42ec24146",
        resource: {
          resourceType: "Observation",
          specimen: {
            type: "Specimen",
            reference: "urn:uuid:0275bfaf-48fb-44e0-80cd-9c504f80e6ae",
          },
          performer: [
            {
              type: "Practitioner",
              reference: "urn:uuid:3dbff0de-d4a4-4e1d-98bf-af7428b8a04b",
            },
            {
              id: "LHP",
              type: "Organization",
              reference: "urn:uuid:fa2328af-4882-4eaa-8c28-66dab46950f1",
            },
            {
              id: "AL",
              type: "Organization",
              reference: "urn:uuid:839a7c54-6b40-41cb-b10d-9295d7e75f77",
            },
          ],
          identifier: [
            {
              id: "ACSN",
              type: {
                coding: [
                  {
                    system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                    code: "ACSN",
                    display: "Accession ID",
                  },
                ],
              },
              value: "123456789",
            },
          ],
          category: [
            {
              coding: [
                {
                  system: "http://snomed.info/sct",
                  code: "840539006",
                  display: "COVID-19",
                },
              ],
            },
          ],
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "94531-1",
                display: "SARS-CoV-2 (COVID-19) RNA panel - Respiratory specimen by NAA with probe detection",
              },
            ],
          },
          valueCodeableConcept: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "260385009",
                display: "Negative",
              },
            ],
          },
          effectiveDateTime: "2020-09-28T06:15:00Z",
          status: "final",
        },
      },
      {
        fullUrl: "urn:uuid:0275bfaf-48fb-44e0-80cd-9c504f80e6ae",
        resource: {
          resourceType: "Specimen",
          type: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "258500001",
                display: "Nasopharyngeal swab",
              },
            ],
          },
          collection: { collectedDateTime: "2020-09-27T06:15:00Z" },
        },
      },
      {
        fullUrl: "urn:uuid:3dbff0de-d4a4-4e1d-98bf-af7428b8a04b",
        resource: {
          resourceType: "Practitioner",
          name: [{ text: "Dr Michael Lim" }],
          qualification: [
            {
              code: {
                coding: [
                  {
                    system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                    code: "MCR",
                    display: "Practitioner Medicare number",
                  },
                ],
              },
              identifier: [{ id: "MCR", value: "123456" }],
              issuer: {
                type: "Organization",
                reference: "urn:uuid:bc7065ee-42aa-473a-a614-afd8a7b30b1e",
              },
            },
          ],
        },
      },
      {
        fullUrl: "urn:uuid:bc7065ee-42aa-473a-a614-afd8a7b30b1e",
        resource: {
          resourceType: "Organization",
          name: "Ministry of Health (MOH)",
          type: [
            {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/organization-type",
                  code: "govt",
                  display: "Government",
                },
              ],
            },
          ],
          contact: [
            {
              telecom: [
                { system: "url", value: "https://www.moh.gov.sg" },
                { system: "phone", value: "+6563259220" },
              ],
              address: {
                type: "physical",
                use: "work",
                text: "Ministry of Health, 16 College Road, College of Medicine Building, Singapore 169854",
              },
            },
          ],
        },
      },
      {
        fullUrl: "urn:uuid:fa2328af-4882-4eaa-8c28-66dab46950f1",
        resource: {
          resourceType: "Organization",
          name: "MacRitchie Medical Clinic",
          type: [
            {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/organization-type",
                  code: "prov",
                  display: "Healthcare Provider",
                },
              ],
              text: "Licensed Healthcare Provider",
            },
          ],
          contact: [
            {
              telecom: [
                {
                  system: "url",
                  value: "https://www.macritchieclinic.com.sg",
                },
                { system: "phone", value: "+6561234567" },
              ],
              address: {
                type: "physical",
                use: "work",
                text: "MacRitchie Hospital, Thomson Road, Singapore 123000",
              },
            },
          ],
        },
      },
      {
        fullUrl: "urn:uuid:839a7c54-6b40-41cb-b10d-9295d7e75f77",
        resource: {
          resourceType: "Organization",
          name: "MacRitchie Laboratory",
          type: [
            {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/organization-type",
                  code: "prov",
                  display: "Healthcare Provider",
                },
              ],
              text: "Accredited Laboratory",
            },
          ],
          contact: [
            {
              telecom: [
                {
                  system: "url",
                  value: "https://www.macritchielaboratory.com.sg",
                },
                { system: "phone", value: "+6567654321" },
              ],
              address: {
                type: "physical",
                use: "work",
                text: "2 Thomson Avenue 4, Singapore 098888",
              },
            },
          ],
        },
      },
    ],
  },
  logo: "data:image/png;base64,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",
  issuers: [
    {
      id: "did:ethr:0xE39479928Cc4EfFE50774488780B9f616bd4B830",
      revocation: { type: "NONE" },
      name: "SAMPLE CLINIC",
      identityProof: {
        type: "DNS-DID",
        location: "donotverify.testing.verify.gov.sg",
        key: "did:ethr:0xE39479928Cc4EfFE50774488780B9f616bd4B830#controller",
      },
    },
  ],
  $template: {
    name: "HEALTH_CERT",
    type: "EMBEDDED_RENDERER",
    url: "https://healthcert.renderer.moh.gov.sg/",
  },
};

export const sampleEndorsedDocument = {
  id: "61505721-c386-4322-ae5e-2b2614e45fe3",
  version: "pdt-healthcert-v2.0",
  type: "PCR",
  validFrom: "2021-08-24T04:22:36.062Z",
  fhirVersion: "4.0.1",
  fhirBundle: {
    resourceType: "Bundle",
    type: "collection",
    entry: [
      {
        fullUrl: "urn:uuid:ba7b7c8d-c509-4d9d-be4e-f99b6de29e23",
        resource: {
          resourceType: "Patient",
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/patient-nationality",
              extension: [
                {
                  url: "code",
                  valueCodeableConcept: {
                    text: "Patient Nationality",
                    coding: [{ system: "urn:iso:std:iso:3166", code: "SG" }],
                  },
                },
              ],
            },
          ],
          identifier: [
            {
              id: "PPN",
              type: {
                coding: [
                  {
                    system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                    code: "PPN",
                    display: "Passport Number",
                  },
                ],
              },
              value: "E7831177G",
            },
            { id: "NRIC-FIN", value: "S****989Z" },
          ],
          name: [{ text: "Tan Chen Chen" }],
          gender: "female",
          birthDate: "1990-01-15",
        },
      },
      {
        fullUrl: "urn:uuid:7729970e-ab26-469f-b3e5-36a42ec24146",
        resource: {
          resourceType: "Observation",
          specimen: { type: "Specimen", reference: "urn:uuid:0275bfaf-48fb-44e0-80cd-9c504f80e6ae" },
          performer: [
            { type: "Practitioner", reference: "urn:uuid:3dbff0de-d4a4-4e1d-98bf-af7428b8a04b" },
            { id: "LHP", type: "Organization", reference: "urn:uuid:fa2328af-4882-4eaa-8c28-66dab46950f1" },
            { id: "AL", type: "Organization", reference: "urn:uuid:839a7c54-6b40-41cb-b10d-9295d7e75f77" },
          ],
          identifier: [
            {
              id: "ACSN",
              type: {
                coding: [
                  {
                    system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                    code: "ACSN",
                    display: "Accession ID",
                  },
                ],
              },
              value: "123456789",
            },
          ],
          category: [{ coding: [{ system: "http://snomed.info/sct", code: "840539006", display: "COVID-19" }] }],
          code: {
            coding: [
              {
                system: "http://loinc.org",
                code: "94531-1",
                display: "SARS-CoV-2 (COVID-19) RNA panel - Respiratory specimen by NAA with probe detection",
              },
            ],
          },
          valueCodeableConcept: {
            coding: [{ system: "http://snomed.info/sct", code: "260385009", display: "Negative" }],
          },
          effectiveDateTime: "2020-09-28T06:15:00Z",
          status: "final",
        },
      },
      {
        fullUrl: "urn:uuid:0275bfaf-48fb-44e0-80cd-9c504f80e6ae",
        resource: {
          resourceType: "Specimen",
          type: {
            coding: [{ system: "http://snomed.info/sct", code: "258500001", display: "Nasopharyngeal swab" }],
          },
          collection: { collectedDateTime: "2020-09-27T06:15:00Z" },
        },
      },
      {
        fullUrl: "urn:uuid:3dbff0de-d4a4-4e1d-98bf-af7428b8a04b",
        resource: {
          resourceType: "Practitioner",
          name: [{ text: "Dr Michael Lim" }],
          qualification: [
            {
              code: {
                coding: [
                  {
                    system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                    code: "MCR",
                    display: "Practitioner Medicare number",
                  },
                ],
              },
              identifier: [{ id: "MCR", value: "123456" }],
              issuer: { type: "Organization", reference: "urn:uuid:bc7065ee-42aa-473a-a614-afd8a7b30b1e" },
            },
          ],
        },
      },
      {
        fullUrl: "urn:uuid:bc7065ee-42aa-473a-a614-afd8a7b30b1e",
        resource: {
          resourceType: "Organization",
          name: "Ministry of Health (MOH)",
          type: [
            {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/organization-type",
                  code: "govt",
                  display: "Government",
                },
              ],
            },
          ],
          contact: [
            {
              telecom: [
                { system: "url", value: "https://www.moh.gov.sg" },
                { system: "phone", value: "+6563259220" },
              ],
              address: {
                type: "physical",
                use: "work",
                text: "Ministry of Health, 16 College Road, College of Medicine Building, Singapore 169854",
              },
            },
          ],
        },
      },
      {
        fullUrl: "urn:uuid:fa2328af-4882-4eaa-8c28-66dab46950f1",
        resource: {
          resourceType: "Organization",
          name: "MacRitchie Medical Clinic",
          type: [
            {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/organization-type",
                  code: "prov",
                  display: "Healthcare Provider",
                },
              ],
              text: "Licensed Healthcare Provider",
            },
          ],
          contact: [
            {
              telecom: [
                { system: "url", value: "https://www.macritchieclinic.com.sg" },
                { system: "phone", value: "+6561234567" },
              ],
              address: {
                type: "physical",
                use: "work",
                text: "MacRitchie Hospital, Thomson Road, Singapore 123000",
              },
            },
          ],
        },
      },
      {
        fullUrl: "urn:uuid:839a7c54-6b40-41cb-b10d-9295d7e75f77",
        resource: {
          resourceType: "Organization",
          name: "MacRitchie Laboratory",
          type: [
            {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/organization-type",
                  code: "prov",
                  display: "Healthcare Provider",
                },
              ],
              text: "Accredited Laboratory",
            },
          ],
          contact: [
            {
              telecom: [
                { system: "url", value: "https://www.macritchielaboratory.com.sg" },
                { system: "phone", value: "+6567654321" },
              ],
              address: { type: "physical", use: "work", text: "2 Thomson Avenue 4, Singapore 098888" },
            },
          ],
        },
      },
    ],
  },
  issuers: [
    {
      name: "SAMPLE ISSUER (DO NOT VERIFY)",
      id: "did:ethr:0xE39479928Cc4EfFE50774488780B9f616bd4B830",
      revocation: { type: "NONE" },
      identityProof: {
        type: "DNS-DID",
        location: "donotverify.testing.verify.gov.sg",
        key: "did:ethr:0xE39479928Cc4EfFE50774488780B9f616bd4B830#controller",
      },
    },
  ],
  $template: { name: "HEALTH_CERT", type: "EMBEDDED_RENDERER", url: "https://healthcert.renderer.moh.gov.sg/" },
  notarisationMetadata: {
    reference: "61505721-c386-4322-ae5e-2b2614e45fe3",
    notarisedOn: "2022-03-18T10:07:14.066Z",
    passportNumber: "E7831177G",
    url: "https://www.verify.gov.sg/verify?q=%7B%22type%22%3A%22DOCUMENT%22%2C%22payload%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fapi-vaccine.storage.staging.notarise.io%2Fdocument%2F34004f6c-95cb-49e9-b8f7-6467580a6944%22%7D%7D#%7B%22key%22%3A%2201e474d5b0effbb7f2e61da417b4e61db081c402513e23eb4987c018069864e4%22%7D",
    signedEuHealthCerts: [
      {
        type: "PCR",
        expiryDateTime: "2022-03-25T10:07:13.953Z",
        qr: "HC1:6BFK%G29OGP2GS2491TD4IPQYQGWS6YHR-/KELFY1FM8RGS2QET GCZ7U%YR/HHA58DWM0CTXXNA$C:5Q7L5TFI884C+KQLH748EE0UH1SV6TK8DNGPC5P:3B%4%YKAO2G+PIGHV K4FVUZH937 1Q52OY27*5IHOEXAQDGWG-UZ3DYS7$ 7YR7G 3OJ7+HPVTJ-BPGKJ3NFASU5GRS7MOR1PID10M4X7LBO.V0L-DMTD.:N9.IVW0C1FBECL5H RHX648F6Q4APFT.3IW 68:6U1CW7Q+RF$:8+O9OX1QWQYW9RC1SBSQKQ585XAB8I4-+O.03F4J9QMK0UHVCIWPKP1AECC7ATH1HP6 24F9H M1DMFGH5EVPYV8K KXJOYQCDZCX8MZ6CXPNDWC14OB/5A832LH5/PD2DCIC+6J*XTS41*/D-8IWDCQRBJHA$O5%SHXUIX*O$WM*CN001G2NYN1+BVNDSW47-WTI/PC$LNW9K56NZ6X5C:-6EWRK6LL:NE%96M6 U1OI3S:0OV5UBTR045XR/:6OKQLM6BVD74Q/H46J8-976S9JY31VCTAW4A5.:K+A3YVFKF2JSQBX8XS4STOXDSB PA6O3Y1Q:OGKS5BPSX7NX3OBI2188GBSKLQA25SHQ2GZ8HLEE1UCQ75 AJD274POO721FPEWC-D6L94464WFI3CM+63HZ7AQ89E8ZAVQ0OC:N:LL9KSBMA+KTU8DT+7M 1BND5TSP%3L43TX2T%VOTN8R24H27ZDK-P$%VKISN$4LL3:FM+1D$8JHFGTWUQ94%ZN56RHZNJY2SKIOZM3Q4*W3A5TJ*4TN6OQM..OILU4LSG%5PRMR TF9R+OJS%EGST/ULQ4V.+QS.21N46H04:5+S0Y32IY4X6BWI59POO/5CQJ80HWKOLWM3LM5UDN2GH*U7W1MKQ6Q1I802QKSUCCX6GU2XI6N*KUQ0LE19D3D66CIDQVCBOPSBHKE2.KPK8QDBU.TA6LVTRPJ9RX8KI9O39VTVU1LT63G:QVP UM:5C.NAG70NN+3WCGW2OEI8VE1466WQSNAVSTXBYQJ0%V6UNL5R+1UC5HL5MD-FSIPO$GD83",
        appleCovidCardUrl:
          "https://redirect.health.apple.com/EU-DCC/#6BFK%25G29OGP2GS2491TD4IPQYQGWS6YHR-%2FKELFY1FM8RGS2QET%20GCZ7U%25YR%2FHHA58DWM0CTXXNA%24C%3A5Q7L5TFI884C%2BKQLH748EE0UH1SV6TK8DNGPC5P%3A3B%254%25YKAO2G%2BPIGHV%20K4FVUZH937%201Q52OY27*5IHOEXAQDGWG-UZ3DYS7%24%207YR7G%203OJ7%2BHPVTJ-BPGKJ3NFASU5GRS7MOR1PID10M4X7LBO.V0L-DMTD.%3AN9.IVW0C1FBECL5H%20RHX648F6Q4APFT.3IW%2068%3A6U1CW7Q%2BRF%24%3A8%2BO9OX1QWQYW9RC1SBSQKQ585XAB8I4-%2BO.03F4J9QMK0UHVCIWPKP1AECC7ATH1HP6%2024F9H%20M1DMFGH5EVPYV8K%20KXJOYQCDZCX8MZ6CXPNDWC14OB%2F5A832LH5%2FPD2DCIC%2B6J*XTS41*%2FD-8IWDCQRBJHA%24O5%25SHXUIX*O%24WM*CN001G2NYN1%2BBVNDSW47-WTI%2FPC%24LNW9K56NZ6X5C%3A-6EWRK6LL%3ANE%2596M6%20U1OI3S%3A0OV5UBTR045XR%2F%3A6OKQLM6BVD74Q%2FH46J8-976S9JY31VCTAW4A5.%3AK%2BA3YVFKF2JSQBX8XS4STOXDSB%20PA6O3Y1Q%3AOGKS5BPSX7NX3OBI2188GBSKLQA25SHQ2GZ8HLEE1UCQ75%20AJD274POO721FPEWC-D6L94464WFI3CM%2B63HZ7AQ89E8ZAVQ0OC%3AN%3ALL9KSBMA%2BKTU8DT%2B7M%201BND5TSP%253L43TX2T%25VOTN8R24H27ZDK-P%24%25VKISN%244LL3%3AFM%2B1D%248JHFGTWUQ94%25ZN56RHZNJY2SKIOZM3Q4*W3A5TJ*4TN6OQM..OILU4LSG%255PRMR%20TF9R%2BOJS%25EGST%2FULQ4V.%2BQS.21N46H04%3A5%2BS0Y32IY4X6BWI59POO%2F5CQJ80HWKOLWM3LM5UDN2GH*U7W1MKQ6Q1I802QKSUCCX6GU2XI6N*KUQ0LE19D3D66CIDQVCBOPSBHKE2.KPK8QDBU.TA6LVTRPJ9RX8KI9O39VTVU1LT63G%3AQVP%20UM%3A5C.NAG70NN%2B3WCGW2OEI8VE1466WQSNAVSTXBYQJ0%25V6UNL5R%2B1UC5HL5MD-FSIPO%24GD83",
      },
    ],
  },
  logo: "data:image/png;base64,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",
  attachments: [
    {
      filename: "healthcert.txt",
      type: "text/open-attestation",
      data: "eyJ2ZXJzaW9uIjoiaHR0cHM6Ly9zY2hlbWEub3BlbmF0dGVzdGF0aW9uLmNvbS8yLjAvc2NoZW1hLmpzb24iLCJkYXRhIjp7ImlkIjoiNDhmMzlmNjAtNGIyYS00MGFkLThkZjAtMTJhMTdhZWYwOTY3OnN0cmluZzo3NmNhZjNmOS01NTkxLTRlZjEtYjc1Ni0xY2I0N2E3NmRlZGUiLCJ2ZXJzaW9uIjoiZmI4OGQyZjMtMmQ3YS00NzljLTk1NDEtMmUxZjY1NmZiZjVlOnN0cmluZzpwZHQtaGVhbHRoY2VydC12Mi4wIiwidHlwZSI6ImQ4Y2RhYzBiLWI2ZmItNGM3My1iMzM2LTM5Mzc5ZGY3ODk2NzpzdHJpbmc6UENSIiwidmFsaWRGcm9tIjoiMWY5OWFlY2EtYzYwZS00NzY5LWI3OGYtMWI1MmE0NmRiZGFhOnN0cmluZzoyMDIxLTA4LTI0VDA0OjIyOjM2LjA2MloiLCJmaGlyVmVyc2lvbiI6IjVlZTVmMmY1LTM0MjQtNGMyZi04MDQ5LWFjNzgyOTQ5NTgzMTpzdHJpbmc6NC4wLjEiLCJmaGlyQnVuZGxlIjp7InJlc291cmNlVHlwZSI6ImY3ODY0ZmQxLTljNjMtNDE3Yi04ZjBkLWNhNzhmZTAxYWNjOTpzdHJpbmc6QnVuZGxlIiwidHlwZSI6IjU1OWZlMWI0LTdmZWUtNGI1Ny05YWZhLTQwNDYwZWFlMWRlNjpzdHJpbmc6Y29sbGVjdGlvbiIsImVudHJ5IjpbeyJmdWxsVXJsIjoiODJiYWMyNWYtZWQ3NC00N2JjLWE2ZDItOWU3YTdkNmIyZjljOnN0cmluZzp1cm46dXVpZDpiYTdiN2M4ZC1jNTA5LTRkOWQtYmU0ZS1mOTliNmRlMjllMjMiLCJyZXNvdXJjZSI6eyJyZXNvdXJjZVR5cGUiOiIxODE0MTg2Ni05ZDcxLTQzN2EtYTg2ZS05NDkxNmRiODg3YmI6c3RyaW5nOlBhdGllbnQiLCJleHRlbnNpb24iOlt7InVybCI6IjFiMWNkNGFlLWY0YTMtNDM2Zi04ODE1LTg4MWQ3YTNjMzhmODpzdHJpbmc6aHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL3BhdGllbnQtbmF0aW9uYWxpdHkiLCJleHRlbnNpb24iOlt7InVybCI6IjIwOGU3YzQyLTZlNjctNDFlOS04OTZiLTA3ZGY2MWVlNGZjYzpzdHJpbmc6Y29kZSIsInZhbHVlQ29kZWFibGVDb25jZXB0Ijp7InRleHQiOiIwMWUzODdmYS1kZDFlLTQ2YzAtOWY5YS1kZjhjZjc2YzcxNjQ6c3RyaW5nOlBhdGllbnQgTmF0aW9uYWxpdHkiLCJjb2RpbmciOlt7InN5c3RlbSI6IjAwMWIwOGY4LWU4ZDgtNGNmZi1hOTY2LWU1ZTY5ODFkYmViYTpzdHJpbmc6dXJuOmlzbzpzdGQ6aXNvOjMxNjYiLCJjb2RlIjoiZjNjNzU1YTMtNDk1NS00NTc4LThmZjgtOGQzMzM1YzY5NmU4OnN0cmluZzpTRyJ9XX19XX1dLCJpZGVudGlmaWVyIjpbeyJpZCI6IjA0ZjRiMmU1LTUzYWYtNGE2MC1hNTg5LThmNTk2ZDBjNTk5ZjpzdHJpbmc6UFBOIiwidHlwZSI6eyJjb2RpbmciOlt7InN5c3RlbSI6ImU5YTZjMzg2LWIyYjAtNDBhMy1hNWE1LTlhZGE4ZWNmMDE1NTpzdHJpbmc6aHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92Mi0wMjAzIiwiY29kZSI6IjdiZWU0MDg5LWRjZDItNDdiYy1iMjc0LTA4YmQ2ZDhmNzBjYjpzdHJpbmc6UFBOIiwiZGlzcGxheSI6ImMxZmUwMzczLTZjZDItNGZhNS04NTI5LTliMmY5Nzk1NTZiNTpzdHJpbmc6UGFzc3BvcnQgTnVtYmVyIn1dfSwidmFsdWUiOiJhMTc4NmM5NC0yYzRmLTQzMDctYWFmOS0xZjhlOTQ3MmZiOWY6c3RyaW5nOkU3ODMxMTc3RyJ9LHsiaWQiOiI2NTBlOWFjMS0yODBlLTQ5MjgtODEzYi1hOTU5MjAwYzk1MDU6c3RyaW5nOk5SSUMtRklOIiwidmFsdWUiOiI1NWM3YzE4Ny0xYTY3LTRiNmQtYmExNC02MGM2NGZhMjcyNGY6c3RyaW5nOlM5MDk4OTg5WiJ9XSwibmFtZSI6W3sidGV4dCI6ImY3NzUyYjQ0LWRkZjEtNGM5ZC05NjNjLWQyNDhhY2Y2ZGQ3MjpzdHJpbmc6VGFuIENoZW4gQ2hlbiJ9XSwiZ2VuZGVyIjoiZDcxZmNiN2EtZWE3Yy00YzczLWI1MjQtY2Y1Nzc3MGM2N2I5OnN0cmluZzpmZW1hbGUiLCJiaXJ0aERhdGUiOiI5ZWI2MDFmYi1kMTMzLTQzZmYtYjZmZC1lMmIzZjI2ZDQ1YjI6c3RyaW5nOjE5OTAtMDEtMTUifX0seyJmdWxsVXJsIjoiYmY3MjQ5ZTItM2QyYS00MTEyLWE0YzctZGI0ODBkNzQxZWZmOnN0cmluZzp1cm46dXVpZDo3NzI5OTcwZS1hYjI2LTQ2OWYtYjNlNS0zNmE0MmVjMjQxNDYiLCJyZXNvdXJjZSI6eyJyZXNvdXJjZVR5cGUiOiJkM2MwZmFmMy1iNDFhLTQzYzAtOWUzNS0wMzA4NWQwNGUyZGQ6c3RyaW5nOk9ic2VydmF0aW9uIiwic3BlY2ltZW4iOnsidHlwZSI6ImNhZjc4MmMwLWRjNmYtNDRhNC1iYjY4LTU0ODk3MWJjMDlkNjpzdHJpbmc6U3BlY2ltZW4iLCJyZWZlcmVuY2UiOiJmNGM2NWUyMy1jNmZkLTQxNzgtOTk4NS1kMDhkY2FkM2U4NDA6c3RyaW5nOnVybjp1dWlkOjAyNzViZmFmLTQ4ZmItNDRlMC04MGNkLTljNTA0ZjgwZTZhZSJ9LCJwZXJmb3JtZXIiOlt7InR5cGUiOiJmY2JiODVjZS0wYzExLTQyZGMtODZhNi04ZDJkNWU5YTkwZjE6c3RyaW5nOlByYWN0aXRpb25lciIsInJlZmVyZW5jZSI6ImJkMGQwODQ4LTNiYWMtNDBiYy05MGE2LTQyMWQyNTQ1MDc0ZjpzdHJpbmc6dXJuOnV1aWQ6M2RiZmYwZGUtZDRhNC00ZTFkLTk4YmYtYWY3NDI4YjhhMDRiIn0seyJpZCI6IjY1YmVlZTMyLWJkYWItNGYyNC04MjgxLTM2YmRiZjllYTk0ZTpzdHJpbmc6TEhQIiwidHlwZSI6ImI4NmQ2ZTY3LTljMTUtNGY0NS1hNjk0LTdlMjJhNzRkZjE2MjpzdHJpbmc6T3JnYW5pemF0aW9uIiwicmVmZXJlbmNlIjoiOGQ2Njg5NDgtMDNkYS00OGI3LWFkMDMtOTc2ZjMxZmViMGVjOnN0cmluZzp1cm46dXVpZDpmYTIzMjhhZi00ODgyLTRlYWEtOGMyOC02NmRhYjQ2OTUwZjEifSx7ImlkIjoiYWM1MjEwNzMtNGZmNy00ZTQwLTk3YzItZjk1MWZmNTA4OTIxOnN0cmluZzpBTCIsInR5cGUiOiIzMTUxOWE1MS0wNzA0LTQzMzEtYWE2Yy0yNDE2ODE3ZTZjZTY6c3RyaW5nOk9yZ2FuaXphdGlvbiIsInJlZmVyZW5jZSI6IjZjN2VjMjA1LWI4MzMtNDQ4NS05NTgzLTI3ZTZhN2M4ZjRmMTpzdHJpbmc6dXJuOnV1aWQ6ODM5YTdjNTQtNmI0MC00MWNiLWIxMGQtOTI5NWQ3ZTc1Zjc3In1dLCJpZGVudGlmaWVyIjpbeyJpZCI6ImJlNWVkZWIxLTRlODktNDU5MC04NzlmLTQxZGI5MmI2MzViNDpzdHJpbmc6QUNTTiIsInR5cGUiOnsiY29kaW5nIjpbeyJzeXN0ZW0iOiJiMmJmNDkyMi00ZTA2LTQyMDItYjA3OC0wZTMxZTEyOGU4YzI6c3RyaW5nOmh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjItMDIwMyIsImNvZGUiOiJiOTJiODE2Mi1hNDc2LTRjODAtODJhYy04NDIwMGUzYzY0MzU6c3RyaW5nOkFDU04iLCJkaXNwbGF5IjoiNTAxNTJiZjEtN2ZiMS00ZDNhLTk3N2MtOGI2NDkxZGFmMDUzOnN0cmluZzpBY2Nlc3Npb24gSUQifV19LCJ2YWx1ZSI6IjQxMDFmNGY2LTJlYTYtNDllYi1hYjM0LTBjNThjN2UyYmY0ZjpzdHJpbmc6MTIzNDU2Nzg5In1dLCJjYXRlZ29yeSI6W3siY29kaW5nIjpbeyJzeXN0ZW0iOiI4YjYwZDI2YS1mMTg4LTRiZjYtYjJhMC03NmQzMGU2NDIwY2U6c3RyaW5nOmh0dHA6Ly9zbm9tZWQuaW5mby9zY3QiLCJjb2RlIjoiNTljZDE3NTYtY2FlMi00ZjJiLWIxMTAtOWFiZTAxMGVjM2E4OnN0cmluZzo4NDA1MzkwMDYiLCJkaXNwbGF5IjoiOGE5MjA0MzctM2ExZi00OGIzLWE4YTUtYTk5Mzk5MWMwYzVhOnN0cmluZzpDT1ZJRC0xOSJ9XX1dLCJjb2RlIjp7ImNvZGluZyI6W3sic3lzdGVtIjoiNjZiYWU0YzItNjMwZC00YTU2LTllY2MtOTg3NzllOWRjNDVhOnN0cmluZzpodHRwOi8vbG9pbmMub3JnIiwiY29kZSI6Ijk0YTM2OTRmLWJlNzctNGMyYi05NDRhLTY4NGFkYzIxZGM3MzpzdHJpbmc6OTQ1MzEtMSIsImRpc3BsYXkiOiI2MTdhMTJiYS01ODlkLTRmNzYtOTBhYy1iMjdiMWUxOTc2MDY6c3RyaW5nOlNBUlMtQ29WLTIgKENPVklELTE5KSBSTkEgcGFuZWwgLSBSZXNwaXJhdG9yeSBzcGVjaW1lbiBieSBOQUEgd2l0aCBwcm9iZSBkZXRlY3Rpb24ifV19LCJ2YWx1ZUNvZGVhYmxlQ29uY2VwdCI6eyJjb2RpbmciOlt7InN5c3RlbSI6IjQyZmYwY2I0LTUzYTctNDhlMC04ZTM4LWFiOTNiYTNiMmQ2ZTpzdHJpbmc6aHR0cDovL3Nub21lZC5pbmZvL3NjdCIsImNvZGUiOiI2NTRkMTY4MC0xZTI3LTQ0NjEtYTVhMS04MWFhYjA5M2Q5NTA6c3RyaW5nOjI2MDM4NTAwOSIsImRpc3BsYXkiOiI5YjE5OWZmYy1mZDlkLTQwMmUtODZlZi1mNWEzMjc1MGIzOGM6c3RyaW5nOk5lZ2F0aXZlIn1dfSwiZWZmZWN0aXZlRGF0ZVRpbWUiOiI1N2RlNjg4Zi1mNDY3LTRhYTktYTk5Ni02NjU4MzI2YTExZjc6c3RyaW5nOjIwMjAtMDktMjhUMDY6MTU6MDBaIiwic3RhdHVzIjoiYjdkNmY5ZWMtMDE2ZS00NWFkLWIwOGUtNjg3MGMwZTVmYjE3OnN0cmluZzpmaW5hbCJ9fSx7ImZ1bGxVcmwiOiI3NTk4ZTAxYy0zZjI0LTQ4YmItODEzMS1iODk4NzNhZjQ2ZTU6c3RyaW5nOnVybjp1dWlkOjAyNzViZmFmLTQ4ZmItNDRlMC04MGNkLTljNTA0ZjgwZTZhZSIsInJlc291cmNlIjp7InJlc291cmNlVHlwZSI6IjZjMTM1NzVlLTkyNTQtNDg4Yy04MzgwLTQyN2YwMjBlYTQ5MjpzdHJpbmc6U3BlY2ltZW4iLCJ0eXBlIjp7ImNvZGluZyI6W3sic3lzdGVtIjoiMzIzOGVjYjAtMWU5MS00NzI4LWI2YzUtNzA5ODRmMDY5ZjMwOnN0cmluZzpodHRwOi8vc25vbWVkLmluZm8vc2N0IiwiY29kZSI6IjFmMTg3NTY2LTE2MDYtNDVkMi1hZDhmLWE4MWQwZjgxYjc3NDpzdHJpbmc6MjU4NTAwMDAxIiwiZGlzcGxheSI6IjMyNGMwYWQ1LTMwYTAtNGQ2OC1hNDkwLTYxZjFkM2UxN2I3ZDpzdHJpbmc6TmFzb3BoYXJ5bmdlYWwgc3dhYiJ9XX0sImNvbGxlY3Rpb24iOnsiY29sbGVjdGVkRGF0ZVRpbWUiOiJiZmJhZTkxYy00NDExLTQyYmItYjk4OC1hM2E1ZjMzNGJhNzE6c3RyaW5nOjIwMjAtMDktMjdUMDY6MTU6MDBaIn19fSx7ImZ1bGxVcmwiOiIxM2IwZGM2OC0yMWVjLTQwYzctOWJjYy02YTQzNmZlYmUyOWU6c3RyaW5nOnVybjp1dWlkOjNkYmZmMGRlLWQ0YTQtNGUxZC05OGJmLWFmNzQyOGI4YTA0YiIsInJlc291cmNlIjp7InJlc291cmNlVHlwZSI6IjhhYTFkZDY2LWQzZjUtNGIxMy05ODdjLTgxZTM2NTQ0ZGExNjpzdHJpbmc6UHJhY3RpdGlvbmVyIiwibmFtZSI6W3sidGV4dCI6IjdkODRhODcyLTZiYTEtNDI0OS1iN2E2LWE3MTEyNTZjZWYyODpzdHJpbmc6RHIgTWljaGFlbCBMaW0ifV0sInF1YWxpZmljYXRpb24iOlt7ImNvZGUiOnsiY29kaW5nIjpbeyJzeXN0ZW0iOiI0NTU1MjhmYy05NGE5LTRkOGEtYTExNS1kYTYzOTNjNDk3ZjU6c3RyaW5nOmh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjItMDIwMyIsImNvZGUiOiJmNjVlY2ZmZS01MDRkLTRlNWQtYjNkNS01YzMwMzE1ZTcyNGQ6c3RyaW5nOk1DUiIsImRpc3BsYXkiOiJmOGNmOTExNi03NzZiLTQ5MjctOGEwYS00NWViMjFiZDBjNGI6c3RyaW5nOlByYWN0aXRpb25lciBNZWRpY2FyZSBudW1iZXIifV19LCJpZGVudGlmaWVyIjpbeyJpZCI6ImZkZmUxY2FlLTk1YWMtNGVhZC1hNzM0LTViZjk1YzlhMjBjZDpzdHJpbmc6TUNSIiwidmFsdWUiOiI0MzE1ZTVmZC04ZjEzLTQwZTctYWEwMC1kNGQ1ZWFmYjMwNmM6c3RyaW5nOjEyMzQ1NiJ9XSwiaXNzdWVyIjp7InR5cGUiOiJjMjgzNzAwNS1iMDU4LTRjZjctOTQ0MS1mM2JmZjQ0Nzg2YjY6c3RyaW5nOk9yZ2FuaXphdGlvbiIsInJlZmVyZW5jZSI6IjQ5ZjQyYjVlLTNjMGEtNDI4Ny05MWE0LWZjNDExYWE0Y2UzNDpzdHJpbmc6dXJuOnV1aWQ6YmM3MDY1ZWUtNDJhYS00NzNhLWE2MTQtYWZkOGE3YjMwYjFlIn19XX19LHsiZnVsbFVybCI6ImE0NWQ3MmRjLTU2NzUtNGNiZi05NDg2LTJmMDI0MmQ4NGVhMjpzdHJpbmc6dXJuOnV1aWQ6YmM3MDY1ZWUtNDJhYS00NzNhLWE2MTQtYWZkOGE3YjMwYjFlIiwicmVzb3VyY2UiOnsicmVzb3VyY2VUeXBlIjoiZTBkNmI0ZmEtZWNjYi00NGE2LWFmZTEtZTNiNDJhOTlmMzI1OnN0cmluZzpPcmdhbml6YXRpb24iLCJuYW1lIjoiYmJmMDU0ZWUtOTA0OC00ODkzLWI4OWMtOGI3Nzk1NzcwMzA4OnN0cmluZzpNaW5pc3RyeSBvZiBIZWFsdGggKE1PSCkiLCJ0eXBlIjpbeyJjb2RpbmciOlt7InN5c3RlbSI6IjEwMjE0ZjI0LTQyMDgtNGQ0Mi1iMzllLTQ0NWVlMTRiY2JkODpzdHJpbmc6aHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9vcmdhbml6YXRpb24tdHlwZSIsImNvZGUiOiJlODZiZWQ0OC0yNDYwLTRmMzMtYWRhOC1lZmMwYjI2MTViYTQ6c3RyaW5nOmdvdnQiLCJkaXNwbGF5IjoiNjk0ZWJmZTYtODRjNy00NTg5LWE4MGEtOWQwYWQ4MDA1ODA5OnN0cmluZzpHb3Zlcm5tZW50In1dfV0sImNvbnRhY3QiOlt7InRlbGVjb20iOlt7InN5c3RlbSI6IjgxMjBkN2Y1LTlkNjgtNDBiNC1iYzAxLTE0ZDBkYWJmOWVjMjpzdHJpbmc6dXJsIiwidmFsdWUiOiIxMTY2YmIwNi00NjEyLTQ4YjctYWQwNC1iYzU3ZjIwNzJkOTU6c3RyaW5nOmh0dHBzOi8vd3d3Lm1vaC5nb3Yuc2cifSx7InN5c3RlbSI6IjZmZjMwOTFmLTk0MzEtNGEzZi1hYjdkLTUzYzUyNmQxNDkyMjpzdHJpbmc6cGhvbmUiLCJ2YWx1ZSI6ImExOTI0OWUyLTk0MzMtNDE5NS04NGFiLWRhYjMyOGU2Zjc2ZDpzdHJpbmc6KzY1NjMyNTkyMjAifV0sImFkZHJlc3MiOnsidHlwZSI6ImJkMjM0NTk4LTgyZTgtNDBhNS04YjBlLTZlNDc1OTNhYzg3ZjpzdHJpbmc6cGh5c2ljYWwiLCJ1c2UiOiI1MTQ4NDMyOC1lZDc1LTQ4NTMtODFhNi04MmEzZjRkMTZlODE6c3RyaW5nOndvcmsiLCJ0ZXh0IjoiMTM4OWMzYTEtZjc5YS00YjllLWI1YzItNDk2MWNlNjZiYzU0OnN0cmluZzpNaW5pc3RyeSBvZiBIZWFsdGgsIDE2IENvbGxlZ2UgUm9hZCwgQ29sbGVnZSBvZiBNZWRpY2luZSBCdWlsZGluZywgU2luZ2Fwb3JlIDE2OTg1NCJ9fV19fSx7ImZ1bGxVcmwiOiI4ZTc5ZmM0Ny1jNjUwLTQ4ZmUtOTRmZC00NjFlNTVjY2U5MjQ6c3RyaW5nOnVybjp1dWlkOmZhMjMyOGFmLTQ4ODItNGVhYS04YzI4LTY2ZGFiNDY5NTBmMSIsInJlc291cmNlIjp7InJlc291cmNlVHlwZSI6IjMzYjJiNDQ3LTAzY2QtNDJjNS1iODNhLWRhNDU3NDQxYmYzMjpzdHJpbmc6T3JnYW5pemF0aW9uIiwibmFtZSI6IjRhYzE0OGUwLTRhNmMtNDQ2YS04NjRkLTNlYmZlOTZhMjliZjpzdHJpbmc6TWFjUml0Y2hpZSBNZWRpY2FsIENsaW5pYyIsInR5cGUiOlt7ImNvZGluZyI6W3sic3lzdGVtIjoiZTYyMjhjMzUtYjdjNS00Y2UxLWJkZTctMjZlYzI5MDljMGFhOnN0cmluZzpodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL29yZ2FuaXphdGlvbi10eXBlIiwiY29kZSI6Ijg0OTA4MDAyLWUzMTctNDQ2Yy1iMDE4LTRiMjBmYzlhZWMwZjpzdHJpbmc6cHJvdiIsImRpc3BsYXkiOiI1YmNhYWIwNS0wZTBmLTQxZmUtOTQ3My04N2VmMTU2OTgwYWI6c3RyaW5nOkhlYWx0aGNhcmUgUHJvdmlkZXIifV0sInRleHQiOiJjMGI4ZTM3Zi0zODYzLTQ0NmItYjlkNC1lNjlkYmM1YzJiYjY6c3RyaW5nOkxpY2Vuc2VkIEhlYWx0aGNhcmUgUHJvdmlkZXIifV0sImNvbnRhY3QiOlt7InRlbGVjb20iOlt7InN5c3RlbSI6ImYyMGI0OGRjLWIyYmQtNGVmYi04M2Y4LTUxZWM4NDIxMWExMTpzdHJpbmc6dXJsIiwidmFsdWUiOiI3NzAyNjVmMS04NmVkLTRkNjYtODUxZC1iODE3NjM2MTM3NzM6c3RyaW5nOmh0dHBzOi8vd3d3Lm1hY3JpdGNoaWVjbGluaWMuY29tLnNnIn0seyJzeXN0ZW0iOiJjMzJkYzE4MS04NzlkLTQ4N2YtYTNmMC03OTMwNDdkYzgyOGQ6c3RyaW5nOnBob25lIiwidmFsdWUiOiJlZDNmMGM2NS00ZWRjLTRkNjktYjRlMi02ZmQ2OTIxZGU3OTM6c3RyaW5nOis2NTYxMjM0NTY3In1dLCJhZGRyZXNzIjp7InR5cGUiOiI0M2YzZmQwZC02NDI0LTQ2NTgtOGVkZC1mYzJlM2FlNDRmYmU6c3RyaW5nOnBoeXNpY2FsIiwidXNlIjoiMzUwODc3ZjEtZWQwMi00ZjAwLTk3MzMtZmE2MWJjZDYzM2M5OnN0cmluZzp3b3JrIiwidGV4dCI6ImM4NjRkZTlmLTAzY2YtNDg4Yi1iMTQ2LWU1N2VlMjhjN2MyZTpzdHJpbmc6TWFjUml0Y2hpZSBIb3NwaXRhbCwgVGhvbXNvbiBSb2FkLCBTaW5nYXBvcmUgMTIzMDAwIn19XX19LHsiZnVsbFVybCI6IjhiZWE2ODI3LTFkNTAtNDllNS1hODkxLTU0YmYyMjdkOWViNDpzdHJpbmc6dXJuOnV1aWQ6ODM5YTdjNTQtNmI0MC00MWNiLWIxMGQtOTI5NWQ3ZTc1Zjc3IiwicmVzb3VyY2UiOnsicmVzb3VyY2VUeXBlIjoiNjc4OWVjZTctZjM4ZC00NDY4LWI5YmYtODUzMjQ5MTk2NDJkOnN0cmluZzpPcmdhbml6YXRpb24iLCJuYW1lIjoiYWMyYTU4OTItNWY0OC00MTNhLTgxNjItNDk3YWIwMWQwZTIzOnN0cmluZzpNYWNSaXRjaGllIExhYm9yYXRvcnkiLCJ0eXBlIjpbeyJjb2RpbmciOlt7InN5c3RlbSI6IjFhMGE1YmNhLTQzZjEtNGMyMy1iNGIwLWNmNjJhOGI3NWE4NDpzdHJpbmc6aHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9vcmdhbml6YXRpb24tdHlwZSIsImNvZGUiOiIxOWQ3YzRhNy1lOWYxLTQ5ZmYtYTNjYy00ZDNjNWU4YWRhMjA6c3RyaW5nOnByb3YiLCJkaXNwbGF5IjoiMzJmMjg5NjMtNzdhNy00NWYzLWE4ZTYtN2ZlNjAzMDEzYmE3OnN0cmluZzpIZWFsdGhjYXJlIFByb3ZpZGVyIn1dLCJ0ZXh0IjoiZmQxMzJhMjYtNTE1MC00MTQxLTg5MDEtZTYxZDM0NzAxN2JlOnN0cmluZzpBY2NyZWRpdGVkIExhYm9yYXRvcnkifV0sImNvbnRhY3QiOlt7InRlbGVjb20iOlt7InN5c3RlbSI6Ijk0Nzg2OTZjLWU3YWItNDE0My04OThlLWZkYmZjOWYzMDc2ZTpzdHJpbmc6dXJsIiwidmFsdWUiOiI3NzA0NWUxYy01NmMyLTRjZTUtYWQ1YS02YmFjMzBlMDRlNjc6c3RyaW5nOmh0dHBzOi8vd3d3Lm1hY3JpdGNoaWVsYWJvcmF0b3J5LmNvbS5zZyJ9LHsic3lzdGVtIjoiMGIzMjZiZmYtYjM0OS00OGQzLWFhOGMtM2I0NWRmZGNhMjk4OnN0cmluZzpwaG9uZSIsInZhbHVlIjoiZWZhNzcyYTUtM2Q3MS00OTcyLWEzNWYtMTgxMWQ2ZjZiMTk4OnN0cmluZzorNjU2NzY1NDMyMSJ9XSwiYWRkcmVzcyI6eyJ0eXBlIjoiNTE4MzY5MTUtZDhkMS00ZjJmLWIxMTAtMTBhNmU2Y2VkZTRkOnN0cmluZzpwaHlzaWNhbCIsInVzZSI6Ijc4ZDc5ODQ5LThjNGQtNDZkMy1iNTZkLWQxYWMzYmNhNmY1ZDpzdHJpbmc6d29yayIsInRleHQiOiIxODc4ZmU1ZS0wNDI3LTQwNDQtYmM3Yy0zODI3M2VhZjJjMWE6c3RyaW5nOjIgVGhvbXNvbiBBdmVudWUgNCwgU2luZ2Fwb3JlIDA5ODg4OCJ9fV19fV19LCJsb2dvIjoiYWI2MTQ3MDYtOTEwYi00YTMxLTkwZGYtZjcwNWQ5OGJiNzgyOnN0cmluZzpkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQWZRQUFBRElDQU1BQUFBcHgrUGFBQUFBTTFCTVZFVUFBQURNek16TXpNek16TXpNek16TXpNek16TXpNek16TXpNek16TXpNek16TXpNek16TXpNek16TXpNek16TXpNek16ZUNtaUFBQUFBRUhSU1RsTUFRTCtBN3hBZ24yRFAzekJ3cjFDUEVsK0kvUUFBQndkSlJFRlVlTnJzbmQxMjJ5b1FSdmtISVNITit6L3R5VWs5b1RFQ1ExYlRCYzIzYnlOczBCNUdJREFSQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQWsrSWsrSWR4NGc1TjRCOUdRL3JQQTlKL0lQZlNnd0wvTUVFQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUR3UDVaUG9QNXI3RkpLQWY3Y3VmQmloUE5Ta1g1aGxBOXUrRHNQN2RYL0pLMVAyVlBpU0lvZWJFckx3Vmg1WngrOEMxWTIyWXRQMEZwZjZoZGVhK21xMVdsaXhmZWo2UmNEeGowOXN3WGJiZUJRcGlqdWcyMGFqL1NFOGJ2bzVoRXVhdkF1U0twUWZKeFRHOTFnVXJDVjZqU1FFMG9Qa2U0d3VrZTcwNUVxcExOV3h0TXRTazRqdlhHbGQrdExseHZWTU5uYWtEN21FbmRZVFZXU25WODYwV1VYbDM0Uk15N0JlbXB5R3pON3BBYm1YRUE2YmZ2SzB1MzJ1VEZLS1ZNMHIwWXcxTVRjRnZwOGlWTFBEMCs5Z0hReSs3clNmM2VlanAySHVGY3NtbGRpRXowRnpLWGZTUnczcWUwOFhxZDlkUDZRS09Obmt1NGxHM05TYi9SQnRLdEt0MXR0ZEJKaVliMlZJN2JyYzd0YzhJWW90SnpIVUIwYytPK1QzclRRdUxLc1pScXB6a1RTN2RaSTR2bytxSm5kRUdPOEV6ZWN5amFjNi9JVE4yS09XYVVMSVQvYUxkZVVucXBkaTdWVzIrS3ljMjlGTDNzN2UzaGk1TFRTaGVXV3B5V2xINFh6bXZXam5pT2lGTjNZV0RpdldJOTJXdWs1Y3QyQzBwM0p6bDlZTjY2V0k1SVYvVnlGODZyMWExN3BINVVNQzBwWC9Ed1hWVTUyNEtzNVlnRFptTDR6R3oxdzgwcDMzUGoxcE12Y2krdGMyY0ZJam1oSDJkV1ZmdWFWTHVMank5ZVR6Z3FPcnFld3YwdnVtLzFLUjQrMmE2RGg1cFhPN1Y5TytzNEtSSlBBRHV4Tmp0akZDQ2svQ2x0RXpnZnpTdGVyU3ZkWlFaZURveXlxeFFndVIxbFhtQmxJLzlQU2ViWnBiT2U4Yml2dDJiRks5WWFLNGVIZTdOTE5hdExQM3FHWUxmTDcxUm9NdkI2WHU5NkozVFd0OUxUb1FNNXptOFlmeGJISUVTUFpYWFcvdG92VFNvK1BxRnhOZXN3WnFqTy9YMDlPdkJnaTlPY0h3N2xsVXVrY3YrZGkwcm5lcWY5OXVYb0tnbE1Nd2FsbDd4L215MG1sUDVwaVZudjNmdVorMTkzeG5wVFlMejNTamVqUExYcE82VHRYYnpYcGZJVWNlSkhtUHNYQUpzYkkrYUw3ZnZzcHBWc09YN3VhZEo5RnZ1VDYzUHhzWkFRM1VNeHlnTHlXdnNrNi9sdWt1NDBmYjh0dG9sREZGYjFaUVE2L21Sa3YxaVc5aTFKNkMvMWFlakFjdlFQVm1VdDZGQjJjbjI2SnpETzRUc2FMY1dlYVRibzdJbjA0WDA4Njk2WHhUbnJrbXpHQ0hpbW1KcEx1TmFQaTcxZitLT2t0ZTVJSzlPclM3NGluZ1BTZkpkMW9JU0Q5WjBtL2hQaEIwbysvTGQzTU1HVXJTVTY4czl5VXpYU08zc3VoVytCaCtKajBveXoyc25acWdwY3pkNWl3cHZSdm1LZlhwWS9QMHllU2ZzZ0hPaGxpd3RMUzdjQlNpUjFhWkZQMzBxK0J0M2ZYYks5aFEyVHIrNHJTYys4ZGZsWENPMmw2cFkrUElzNXBGMXhzNGttYlhWQjZ6MEpXUlJkSCs2QjB3OFZlb3lkZVdsVjg0eGFVTG52WDA4dkV6Tm4rSEpPdSt0ZlQxY1NiS1BMZXd2V2tjL2MxL1l0czRTbEorREhwdW5zRjMwNjlYU3J3N1ZoUWVsNGdITjNRdUhPOGpFay9POGNDK1VvL3BYUit2RzBMU24vWlh4bFh5SW9jNjBQU2hlbGR3dmR6YjRIVzNJNzFwTy8wd0hZcU9JcDh2NDFKVDUyVE5qZjVqeDI0Zm1FOTZXTHJHNy9ic29NNmVoQ0dwSjhzMC9aVjNrOHFuVE9kWDFCNjZIT2diNGI1S1JmdGw1NGZDN292eXZaWnBYdDZKeTRvM1pxZWRPdk1UZHNsUFVoRDBybFd4dlZNRnRTMFAxVU9uUHZXazg0WGRiMERJWFcva0hpTVNMZW03ck1NS0RtdDlKMEhtZ3RLLzNCZzdHaGdPR0xDZ1BUOGFmcDFwZFRFeDQ4ODZuZ3RLRjJjOU9wc2dWRGJPS0NKT1Fha2krMVZyRmkrd3JpSnBmTmEvb3JTaGNyVzI4NmpMWXN5eWZaTGw4U0V0bk02NWoxU0xIK3dYVkc2amMwRFlJOTg2RnVqS0puUUxWMGMxTXJ3N3NPNW4vZnd3RGZrb2o5Z2ZENG96aHlGQVVWTXFCUmxZckNkMG9VblJya2l5RXpPUEZOTEZ6VHpUNVZsQlhkM09tOG96a0J0T09kRFBaa1U5azkvUENwTGtIYXJuWlVmSWhYT3YwLzZJU3YwU09jdmovMWI5dHpma041RzN4N2ViZEloMzRXZkY2dHBEcnJZSzZQVXBkLzRmSlMzYnBYYXJ0T0pOK1NSREJYT3YwbDZtNkV6WjF6MzVsdzlrM1JPMDFXTUZCVTRINCsyMWxNYmI4WHMwdmx2WVZIcDNQVXFLQ2NhT0RVc25iTkxTUjVjVEMrZForcHBWZWxDbkthMTE3ZU5UTlFrU1ZGaVUydFArUXJTT1Z2WlphVUxxd3Z0UENoL2pkTWIzUk45OVFPa29qdjhMc1FTMGsvTzcrdEtmK05NVDk2TlAwVXZMdmluUm05Sm4yNHdWcmJEQ2JHSWRGNHhWQk5KL3hKU2U2VWVvL0JqLzlJLzdEeTBQdnJuSnk1b3BTSVJSWlgwYVFVQUFQelgzaDNVQUFDQVFBeDdZQUQvYW5GQkNOZGFtSUFCQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFEQW1tb2VLOUh6aUI1STlFQlhueDhBQUFBQUFBQUFBTEJtQUlaS216V0lueHlPQUFBQUFFbEZUa1N1UW1DQyIsImlzc3VlcnMiOlt7ImlkIjoiMjBmNTkxNTgtOGI3YS00NGVkLTg5YmEtOWE2OTM0NGUwMDU2OnN0cmluZzpkaWQ6ZXRocjoweEUzOTQ3OTkyOENjNEVmRkU1MDc3NDQ4ODc4MEI5ZjYxNmJkNEI4MzAiLCJyZXZvY2F0aW9uIjp7InR5cGUiOiJlMzEyZjI2MS1kOWIyLTQ3MzEtOWI5YS0zOTA0MjhkNDFhMTY6c3RyaW5nOk5PTkUifSwibmFtZSI6ImM1NTg2ZDcyLWY1YmQtNGMyMS04N2E4LTI5MTUzMWI1MWYxZDpzdHJpbmc6U0FNUExFIENMSU5JQyIsImlkZW50aXR5UHJvb2YiOnsidHlwZSI6Ijg1YTFkNDVmLTQ1ODMtNDM3Ny05OTVmLWZkOWQzZjkxYTVmYzpzdHJpbmc6RE5TLURJRCIsImxvY2F0aW9uIjoiZTVjNGFjZWUtZjUzYi00YjRiLWI2Y2ItNjExZTAwY2I5MDJkOnN0cmluZzpkb25vdHZlcmlmeS50ZXN0aW5nLnZlcmlmeS5nb3Yuc2ciLCJrZXkiOiJhZmVmZmRlNC00MjlmLTRjN2MtYjJlMy02MjBkYTNlZTk0NGE6c3RyaW5nOmRpZDpldGhyOjB4RTM5NDc5OTI4Q2M0RWZGRTUwNzc0NDg4NzgwQjlmNjE2YmQ0QjgzMCNjb250cm9sbGVyIn19XSwiJHRlbXBsYXRlIjp7Im5hbWUiOiJiYTQ3MjcwMy04ZmU0LTQyMDktOWQ4Zi0xZTBhNTNkYjJlZjQ6c3RyaW5nOkhFQUxUSF9DRVJUIiwidHlwZSI6IjgxODY3ZTI0LTQ3ODAtNDU2My1iMTg2LTIxNzkxOWY4YzkxOTpzdHJpbmc6RU1CRURERURfUkVOREVSRVIiLCJ1cmwiOiIyOGFmMGEzMi1lODI4LTRkNzQtODcyMi01NGMxOTdmNmEwNjQ6c3RyaW5nOmh0dHBzOi8vaGVhbHRoY2VydC5yZW5kZXJlci5tb2guZ292LnNnLyJ9fSwic2lnbmF0dXJlIjp7InR5cGUiOiJTSEEzTWVya2xlUHJvb2YiLCJ0YXJnZXRIYXNoIjoiYWIwY2Y4YzgzMWY0ZmJiNTUyYmRiNmM5YjJlYmRiMWVhMzM0ZmFmNWRiNmYwYWQyMjZhZTg1MGM4NjAzZGEyYSIsInByb29mIjpbXSwibWVya2xlUm9vdCI6ImFiMGNmOGM4MzFmNGZiYjU1MmJkYjZjOWIyZWJkYjFlYTMzNGZhZjVkYjZmMGFkMjI2YWU4NTBjODYwM2RhMmEifSwicHJvb2YiOlt7InR5cGUiOiJPcGVuQXR0ZXN0YXRpb25TaWduYXR1cmUyMDE4IiwiY3JlYXRlZCI6IjIwMjEtMDgtMjRUMDQ6MjI6NTUuMTc3WiIsInByb29mUHVycG9zZSI6ImFzc2VydGlvbk1ldGhvZCIsInZlcmlmaWNhdGlvbk1ldGhvZCI6ImRpZDpldGhyOjB4RTM5NDc5OTI4Q2M0RWZGRTUwNzc0NDg4NzgwQjlmNjE2YmQ0QjgzMCNjb250cm9sbGVyIiwic2lnbmF0dXJlIjoiMHg3YTMxOTZmZjRlNmM4ZTYzNzVmOTcxODY1ZmNlOWNmNTJkMjZmNTQxMTAwM2IxZTBkY2EwMDJkNzA2MzI3MDM3M2VjZTFmOGVjOGI5OTljMzEwOGNkODgzMDBkZDk0NDUwMzczNjMwMzE2ZTU5ZjZkZWI1MDcwYjkzNmU2YzllYjFjIn1dfQ==",
    },
  ],
};
