import React from "react";

const DeliveryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="delivery">
      <div className="auto__container">
        <div className="delivery__inner">
          <div className="delivery__innerBanner">Информация за доставка</div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryLayout;
