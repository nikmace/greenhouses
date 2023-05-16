import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="header">
      <div className="auto__container">
        {/* Here you can place your Navigation */}
        <div className="banner">
          <div className="bannerContacts">
            <p>
              +359 88 64286512 <span>•</span> agromir.help@gmail.bg
            </p>
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
        <div className="nav">
          <Link href="/" className="navLogo">
            <Image
              width={42}
              height={42}
              src="/images/logo.png"
              alt="Agromir Logo"
            />
            <h3>Agromir</h3>
          </Link>
          <ul className="navList">
            <li className="navList__item">
              <a href="/">Home</a>
            </li>
            <li className="navList__item">
              <a href="/">Catalogue</a>
            </li>
            <li className="navList__item">
              <a href="/">Payment</a>
            </li>
            <li className="navList__item">
              <a href="/">Delivery</a>
            </li>
            <li className="navList__item">
              <a href="/">Installation</a>
            </li>
            <li className="navList__item">
              <a href="/">Contacts</a>
            </li>
            <li className="navList__item">
              <a href="/">About</a>
            </li>
          </ul>
          <div className="navCart">
            <Image
              width={24}
              height={24}
              src="/images/searchIcon.svg"
              alt="Search"
            />
            <Image
              width={24}
              height={24}
              src="/images/cartIcon.svg"
              alt="Cart"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
