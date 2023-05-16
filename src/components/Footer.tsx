import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer">
      <div className="auto__container">
        <div className="footer__inner">
          <div className="footer__innerCompany">
            <div className="footer__innerCompany__logo">
              <Image
                width={42}
                height={42}
                src="/images/logo.png"
                alt="Agromir Logo"
              />
              <h3>Agromir</h3>
            </div>
            <p className="footer__innerCompany__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              rerum
            </p>
          </div>

          <div className="footer__innerContact">
            <div className="footer__list">
              <h5>Contact</h5>
              <div className="footer__listItem">
                <Image
                  width={24}
                  height={24}
                  src="/images/phoneIcon.svg"
                  alt="Phone Icon"
                />
                <p>+359 (406) 555-0120</p>
              </div>
              <div className="footer__listItem">
                <Image
                  width={24}
                  height={24}
                  src="/images/emailIcon.svg"
                  alt="Email Icon"
                />
                <p>Agromir@gmail.bg</p>
              </div>
              <div className="footer__listItem">
                <Image
                  width={24}
                  height={24}
                  src="/images/addressIcon.svg"
                  alt="Address Icon"
                />
                <p>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
              </div>
            </div>
          </div>

          <div className="footer__innerLinks">
            <div className="footer__list">
              <h5>Useful links</h5>
              <div className="footer__listItem">
                <a>About us</a>
              </div>
              <div className="footer__listItem">
                <a>Shop</a>
              </div>
              <div className="footer__listItem">
                <a>Contact us</a>
              </div>
              <div className="footer__listItem">
                <a>FAQ</a>
              </div>
              <div className="footer__listItem">
                <a>Policy</a>
              </div>
            </div>
          </div>

          <div className="footer__innerCategories">
            <div className="footer__list">
              <h5>Categories</h5>
              <div className="footer__listItem">
                <a>Agromir-Standard</a>
              </div>
              <div className="footer__listItem">
                <a>Agromir-Plus</a>
              </div>
              <div className="footer__listItem">
                <a>Agromir-Prestige</a>
              </div>
              <div className="footer__listItem">
                <a>Agromir-Titan</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
