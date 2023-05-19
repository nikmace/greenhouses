export interface IGreenhouse {
  [key: string]: IProduct[];
}

export type IProduct = {
  name: string;
  price: number;
  image: string;
  link: string;
  id: string;
  specification: ProductSpecification;
};

export type ProductSpecification = {
  material: string;
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
  weight: number;
  pipeType: string;
  constructionType: string;
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
