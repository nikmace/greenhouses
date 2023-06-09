import React from "react";

import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import CatalogueList from "@/components/CatalogueList/CatalogueList";

const CatalogueLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="catalogue">
      <div className="auto__container">
        <div className="catalogue__inner">
          <div className="catalogue__innerBanner"></div>
          <div className="categories">
            <Breadcrumbs />
            <div className="categories__main">
              <CatalogueList />
              <div className="categories__mainTypes">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogueLayout;
