import React from "react";
import Image from "next/image";

import Nav from "./Nav/Nav";

const Header = () => {
  return (
    <div className="header">
      <div className="auto__container">
        {/* Here you can place your Navigation */}
        <div className="banner">
          <div className="bannerContacts">
            <a href="tel:+3598864286512">+359 88 64286512</a>
            <span>•</span>
            <a href="mailto:agromir.help@gmail.bg">agromir.help@gmail.bg</a>
          </div>
          <div className="bannerDelivery">
            <Image
              src="/images/truckIcon.svg"
              width={40}
              height={40}
              alt="Delivery Truck"
            />
            <div className="bannerDelivery__info">
              <p>Free greenhouse delivery under 100km from Sofia</p>
            </div>
          </div>
        </div>
        <Nav />
      </div>
    </div>
  );
};

export default Header;
