// Samples are exported in a TS file so that it won't be hosted on the frontend

export const sampleDocument = {
  id: "76caf3f9-5591-4ef1-b756-1cb47a76dede",
  version: "rec-healthcert-v2.0",
  type: "PCR",
  validFrom: "2022-03-12T04:30:35.065Z",
  validUntil: "2023-08-28T04:30:35.065Z",
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
                display: "Positive",
              },
            ],
          },
          effectiveDateTime: "2022-03-01T04:30:35.065Z",
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
          collection: { collectedDateTime: "2022-03-01T04:30:35.065Z" },
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
    ],
  },
  logo: "data:image/png;base64,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",
};
