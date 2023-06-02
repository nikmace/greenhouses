import React from "react";
import Link from "next/link";

import { GreenhouseTypes } from "@/constants/constants";

const Agronom = () => {
  return (
    <div className="space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
      {GreenhouseTypes.strelka.map((p) => {
        const { constructionType, dimensions, material, pipeType, weight } =
          p.specification;
        return (
          <div key={p.id} className="group relative mb-4">
            <div className="sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:h-64">
              <img
                src={p.image}
                alt="Collection of four insulated travel bottles on wooden shelf."
                className="h-full w-full object-cover object-center"
              />
            </div>
            <h3 className="text-md mt-6 font-light text-gray-500 ">
              <Link href={p.link}>
                <span className="absolute inset-0"></span>
                {p.name}
              </Link>
            </h3>
            <p className="text-md font-semibold text-gray-700">
              Daily commute essentials
            </p>
            <ul className="mt-2">
              <li className="flex justify-between">
                <p className="font-normal uppercase text-[#b5bac1]">Material</p>
                <span className="text-gray-700">{material}</span>
              </li>
              <li className="flex justify-between">
                <p className="font-normal uppercase text-[#b5bac1]">
                  Dimensions
                </p>
                <span className="text-gray-700">
                  {dimensions.length} x {dimensions.width} x {dimensions.height}{" "}
                  m
                </span>
              </li>
              <li className="flex justify-between">
                <p className="font-normal uppercase text-[#b5bac1]">
                  Item Weight
                </p>
                <span className="text-gray-700">{weight}</span>
              </li>
              <li className="flex justify-between">
                <p className="font-normal uppercase text-[#b5bac1]">Pipe</p>
                <span className="text-gray-700">{pipeType}</span>
              </li>
              <li className="flex justify-between">
                <p className="font-normal uppercase text-[#b5bac1]">Type</p>
                <span className="text-gray-700">{constructionType}</span>
              </li>
            </ul>
            <p className="my-2 text-[#b5bac1]">
              from <span className="text-[#2d2d2d]">{p.price} BGN</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Agronom;
