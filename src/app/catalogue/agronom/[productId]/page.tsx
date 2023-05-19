import React from "react";

import GreenhouseDescription from "@/components/Product/ProductDescription";

const ProductInfo = ({ params }) => {
  console.log(params);
  return <GreenhouseDescription />;
};

export default ProductInfo;
