import React from "react";
import Link from "next/link";

import { catalogueList } from "@/constants/constants";

const Star = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="mr-1 h-4 w-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
    />
  </svg>
);

const CatalogueList = () => {
  return (
    <div className="categories__mainList">
      <ul>
        {catalogueList.map((c) => {
          return (
            <li key={c.id} className="flex flex-col">
              <p className="text-md flex items-center">
                {c.category === "Greenhouse" && Star}
                {c.category}
              </p>
              {c.subCategories &&
                c.subCategories.map((subC) => (
                  <Link
                    href={subC.link}
                    key={subC.id}
                    className="ml-3 font-light text-gray-500"
                  >
                    - {subC.name}
                  </Link>
                ))}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CatalogueList;
