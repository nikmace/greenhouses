"use client";

import React from "react";
import Image from "next/image";

import { Carousel } from "flowbite-react";

const ProductCarousel = () => {
  return (
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
      <Carousel slideInterval={5000}>
        <Image
          src="/images/greenhouse.jpeg"
          alt="Product Image"
          width={724}
          height={480}
        />
        <Image
          src="/images/greenhouse.jpeg"
          alt="Product Image"
          width={724}
          height={480}
        />
        <Image
          src="/images/greenhouse.jpeg"
          alt="Product Image"
          width={724}
          height={480}
        />
        <Image
          src="/images/greenhouse.jpeg"
          alt="Product Image"
          width={724}
          height={480}
        />
        <Image
          src="/images/greenhouse.jpeg"
          alt="Product Image"
          width={724}
          height={480}
        />
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
