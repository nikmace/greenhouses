"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tMap = {
  catalogue: "Каталог",
  agronom: "Агроном",
  strelka: "Стрелка",
  slavianka: "Славянка",
  "agronom-standard": "Агроном Стандарт",
  "agronom-plus": "Агроном Плюс",
  "agronom-prestige": "Агроном Престиж",
  "agronom-titan": "Агроном Титан",
};

const Breadcrumbs = () => {
  const pathname = usePathname();
  const slicedPaths = pathname?.split("/").slice(1) || [];
  return (
    <div className="categories__breadcrumbs">
      <ul>
        {slicedPaths.map((path, idx, arr) => {
          const linkToItem = slicedPaths.slice(0, idx + 1).join("/");
          const name = tMap[path] || path;
          if (idx === arr.length - 1) {
            return <li key={path}>{name}</li>;
          }
          return (
            <li key={path}>
              <Link href={`/${linkToItem}`}>{name} /</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
