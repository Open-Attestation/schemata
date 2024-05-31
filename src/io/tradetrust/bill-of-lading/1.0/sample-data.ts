// Samples are exported in a TS file so that it won't be hosted on the frontend

export const sampleDocument = {
  name: "TradeTrust Bill of Lading v3",
  scac: "SGPU",
  blNumber: "SGCNM21566325",
  vessel: "vessel",
  voyageNo: "voyageNo",
  portOfLoading: "Singapore",
  portOfDischarge: "Paris",
  carrierName: "A.P. Moller",
  placeOfReceipt: "Beijing",
  placeOfDelivery: "Singapore",
  packages: [
    {
      description: "description",
      weight: "10",
      measurement: "20",
    },
  ],
  shipper: {
    name: "Shipper Name",
    address: {
      street: "101 ORCHARD ROAD",
      country: "SINGAPORE",
    },
  },
  consignee: {
    name: "Consignee name",
  },
  notifyParty: {
    name: "Notify Party Name",
  },
};
