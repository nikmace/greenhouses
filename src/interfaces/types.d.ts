export interface IGreenhouse {
  // [key: "agronom" | "strelka" | "slavianka"]: IProduct[];
  agronom: IProduct[];
  strelka: IProduct[];
  slavianka?: IProduct[];
}

export type IProduct = {
  name: string;
  price: number;
  image: string;
  extraImages?: ExtraImage[] | [];
  link: string;
  id: string;
  specification: ProductSpecification;
  seoDescription: string;
  polycarbonate: string;
  extraInformation?: string;
  linkToSpecificationPDF: string;
  linkToPricesPDF: string;
};

export type ExtraImage = {
  id: string;
  imageUrl: string;
};

export type ProductSpecification = {
  availableLengths: AvailableLength[];
  material: string;
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
  weight: number;
  pipeType: string;
  spaceBetweenPipes: string;
  constructionType: string;
};

export type AvailableLength = {
  id: number;
  length: number;
};

export type ListProduct = {
  groupName: string;
  additionalInfo?: string;
  groupItems: GroupItem[];
};

export type GroupItem = {
  name: string;
  info?: string;
};
