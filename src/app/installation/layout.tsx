import React from "react";

const InstallationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="installation">
      <div className="auto__container">
        <div className="installation__inner">
          <div className="installation__innerBanner">Информация за монтаж</div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default InstallationLayout;
