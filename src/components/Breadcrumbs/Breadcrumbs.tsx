"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const slicedPaths = pathname?.split("/").slice(1) || [];

  return (
    <div className="categories__breadcrumbs">
      <ul>
        {slicedPaths.map((path, idx, arr) => {
          if (idx === arr.length - 1) {
            return <li key={path}>{path}</li>;
          }
          return (
            <li key={path}>
              <Link href={`/${slicedPaths[idx]}`}>{path} &gt;</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
