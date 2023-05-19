import { IGreenhouse, ListProduct } from "@/interfaces/types";

export const GreenhouseTypes: IGreenhouse = {
  agronom: [
    {
      id: "agronom-standard",
      name: "Agronom Standard",
      price: 1200,
      link: "/catalogue/agronom/agronom-standard",
      image:
        "https://cdn.shopify.com/s/files/1/0069/5854/6980/products/Sigma20_557x376.jpg?v=1660818069",
      specification: {
        material: "Stainless Steel",
        pipeType: "Galvanized pipe 40 x 20 mm",
        constructionType: "Welded panels, bolted connection",
        weight: 46,
        dimensions: {
          height: 2.1,
          length: 4,
          width: 4,
        },
      },
    },
    {
      id: "agronom-plus",
      name: "Agronom Plus",
      price: 1200,
      link: "/catalogue/agronom/agronom-plus",
      image:
        "https://cdn.shopify.com/s/files/1/0069/5854/6980/products/Sigma20_557x376.jpg?v=1660818069",
      specification: {
        material: "Stainless Steel",
        pipeType: "Galvanized pipe 40 x 20 mm",
        constructionType: "Welded panels, bolted connection",
        weight: 46,
        dimensions: {
          height: 2.1,
          length: 4,
          width: 4,
        },
      },
    },
    {
      id: "agronom-prestige",
      name: "Agronom Prestige",
      price: 1200,
      link: "/catalogue/agronom/agronom-prestige",
      image:
        "https://cdn.shopify.com/s/files/1/0069/5854/6980/products/Sigma20_557x376.jpg?v=1660818069",
      specification: {
        material: "Stainless Steel",
        pipeType: "Galvanized pipe 40 x 20 mm",
        constructionType: "Welded panels, bolted connection",
        weight: 46,
        dimensions: {
          height: 2.1,
          length: 4,
          width: 4,
        },
      },
    },
    {
      id: "agronom-titan",
      name: "Agronom Titan",
      price: 1200,
      link: "/catalogue/agronom/agronom-titan",
      image:
        "https://cdn.shopify.com/s/files/1/0069/5854/6980/products/Sigma20_557x376.jpg?v=1660818069",
      specification: {
        material: "Stainless Steel",
        pipeType: "Galvanized pipe 40 x 20 mm",
        constructionType: "Welded panels, bolted connection",
        weight: 46,
        dimensions: {
          height: 2.1,
          length: 4,
          width: 4,
        },
      },
    },
  ],
};

export const ProductList: ListProduct[] = [
  {
    groupName: "Agronom Greenhouse",
    additionalInfo: "",
    groupItems: [
      {
        name: "Agronom-Standard",
        info: "",
      },
      {
        name: "Agronom-Plus",
        info: "",
      },
      {
        name: "Agronom-Prestige",
        info: "",
      },
      {
        name: "Agronom-Titan",
        info: "",
      },
    ],
  },
  {
    groupName: "Slavianka Greenhouse",
    additionalInfo: "",
    groupItems: [
      {
        name: "Slavianka-Standard",
        info: "",
      },
      {
        name: "Slavianka-Plus",
        info: "",
      },
      {
        name: "Slavianka-Prestige",
        info: "",
      },
      {
        name: "Slavianka-Titan",
        info: "",
      },
    ],
  },
  {
    groupName: "Strelka Greenhouse",
    additionalInfo: "",
    groupItems: [
      {
        name: "Strelka-Standard",
        info: "",
      },
      {
        name: "Strelka-Plus",
        info: "",
      },
      {
        name: "Strelka-Prestige",
        info: "",
      },
      {
        name: "Strelka-Titan",
        info: "",
      },
    ],
  },
];
