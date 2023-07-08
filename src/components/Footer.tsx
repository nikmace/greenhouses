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
              <h3>Агромир</h3>
            </div>
            <p className="footer__innerCompany__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              rerum
            </p>
          </div>

          <div className="footer__innerContact">
            <address className="footer__list">
              <h5>Информация за контакт</h5>
              <div className="footer__listItem">
                <Image
                  width={24}
                  height={24}
                  src="/images/phoneIcon.svg"
                  alt="Phone Icon"
                />
                <a href="tel:+3594065550120">+359 (406) 555-0120</a>
              </div>
              <div className="footer__listItem">
                <Image
                  width={24}
                  height={24}
                  src="/images/emailIcon.svg"
                  alt="Email Icon"
                />
                <a href="mailto:agromir@gmail.bg">agromir@gmail.bg</a>
              </div>
              <div className="footer__listItem">
                <Image
                  width={24}
                  height={24}
                  src="/images/addressIcon.svg"
                  alt="Address Icon"
                />
                <a href="https://www.google.com/maps/place/%D0%A2%D0%B5%D1%81%D0%BB%D0%B0+%D0%A1%D1%82%D0%B8%D0%B8%D0%BB+%D0%9E%D0%9E%D0%94/@42.6606457,23.3147734,18.8z/data=!4m6!3m5!1s0x40aa8501aee5a9ad:0xe0c966354b18ea2d!8m2!3d42.660321!4d23.3150033!16s%2Fg%2F11fvwhl95k">
                  ул. „Кишинев“ 7, 1407 Хладилника, София
                </a>
              </div>
            </address>
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
