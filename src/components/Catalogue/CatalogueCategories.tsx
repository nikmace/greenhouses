import React from "react";
import Link from "next/link";

const CatalogueCategories = () => {
  return (
    <div className=" space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
      <div className="group relative mb-4">
        <div className="sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:h-64">
          <img
            src="https://cdn.shopify.com/s/files/1/0069/5854/6980/products/Sigma20_557x376.jpg?v=1660818069"
            alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
            className="h-full w-full object-cover object-center"
          />
        </div>
        <h3 className="mt-6 text-sm text-gray-500">
          <Link href="/catalogue/agronom">
            <span className="absolute inset-0"></span>
            Agronom
          </Link>
        </h3>
        <p className="text-base font-semibold text-gray-900">
          Work from home accessories
        </p>
      </div>
      <div className="group relative">
        <div className="sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:h-64">
          <img
            src="https://cdn.shopify.com/s/files/1/0069/5854/6980/products/Sigma20_557x376.jpg?v=1660818069"
            alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant."
            className="h-full w-full object-cover object-center"
          />
        </div>
        <h3 className="mt-6 text-sm text-gray-500">
          <Link href="#">
            <span className="absolute inset-0"></span>
            Self-Improvement
          </Link>
        </h3>
        <p className="text-base font-semibold text-gray-900">
          Journals and note-taking
        </p>
      </div>
      <div className="group relative">
        <div className="sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:h-64">
          <img
            src="https://cdn.shopify.com/s/files/1/0069/5854/6980/products/Sigma20_557x376.jpg?v=1660818069"
            alt="Collection of four insulated travel bottles on wooden shelf."
            className="h-full w-full object-cover object-center"
          />
        </div>
        <h3 className="mt-6 text-sm text-gray-500">
          <Link href="#">
            <span className="absolute inset-0"></span>
            Travel
          </Link>
        </h3>
        <p className="text-base font-semibold text-gray-900">
          Daily commute essentials
        </p>
      </div>
    </div>
  );
};

export default CatalogueCategories;
