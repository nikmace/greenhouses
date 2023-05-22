import React from "react";

import GreenhouseConstructor from "@/components/Product/GreenhouseConstructor";
import GreenhouseDescription from "@/components/Product/GreenhouseDescription";
import ProductCarousel from "@/components/ProductCarousel/ProductCarousel";

const ProductInfo = ({ params }) => {
  console.log(params);
  return (
    <>
      <ProductCarousel />
      <GreenhouseDescription />
      <GreenhouseConstructor />
    </>
  );
};

export default ProductInfo;
