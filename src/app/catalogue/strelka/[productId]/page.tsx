import React from "react";

import GreenhouseConstructor from "@/components/Product/GreenhouseConstructor";
import GreenhouseDescription from "@/components/Product/GreenhouseDescription";
import ProductCarousel from "@/components/ProductCarousel/ProductCarousel";
import AssemblyPricesTable from "@/components/Tables/AssemblyPricesTable";

import { GreenhouseTypes } from "@/constants/constants";

interface Props {
  params: {
    productId:
      | "agronom-standard"
      | "agronom-plus"
      | "agronom-prestige"
      | "agronom-titan";
  };
}

const ProductInfo = ({ params }: Props) => {
  const { productId } = params;

  /**
   * Find the product and display it
   */
  const greenhouse = GreenhouseTypes.strelka.find((v) => v.id === productId);

  return (
    <>
      <ProductCarousel
        images={greenhouse?.extraImages!}
        defaultImage={greenhouse?.image!}
      />
      <GreenhouseDescription greenhouse={greenhouse!} />
      <GreenhouseConstructor greenhouse={greenhouse!} />
      <AssemblyPricesTable />
    </>
  );
};

export default ProductInfo;
