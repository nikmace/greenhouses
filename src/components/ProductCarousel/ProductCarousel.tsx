"use client";

import React from "react";
import Image from "next/image";

import { Carousel } from "flowbite-react";

import { ExtraImage } from "@/interfaces/types";

interface CarouselProps {
  images: ExtraImage[] | [];
  defaultImage: string;
}

const ProductCarousel = ({ images, defaultImage }: CarouselProps) => {
  return (
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
      <Carousel slideInterval={5000}>
        {images?.length > 0 ? (
          images.map((i: ExtraImage) => (
            <Image
              key={i.id}
              src="/images/greenhouse.jpeg"
              alt="Product Image"
              width={724}
              height={480}
            />
          ))
        ) : (
          <Image
            src={defaultImage}
            alt="Product Image"
            width={724}
            height={480}
          />
        )}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
