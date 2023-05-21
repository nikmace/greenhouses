import React from "react";
import Link from "next/link";

import { catalogueItems } from "@/constants/constants";

const CatalogueCategories = () => {
  return (
    <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
      {catalogueItems.map((item) => {
        return (
          <div key={item.name} className="group relative mb-6">
            <div className="sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:h-64">
              <img
                src={item.image}
                alt={item.alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <h3 className="mt-6 text-md text-gray-900 font-semibold">
              <Link href={item.link}>
                <span className="absolute inset-0"></span>
                {item.name}
              </Link>
            </h3>
            {item.description && (
              <p className="text-sm font-light text-gray-500">
                {item.description}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CatalogueCategories;
