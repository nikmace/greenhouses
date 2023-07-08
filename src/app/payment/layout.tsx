import React from "react";

const PaymentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="payment">
      <div className="auto__container">
        <div className="payment__inner">
          <div className="payment__innerBanner">Информация за плащане</div>
          <div className="categories__mainTypes">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default PaymentLayout;
