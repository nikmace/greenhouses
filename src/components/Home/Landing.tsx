import React from "react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import PreviewCard from "../Cards/PreviewCard";

const playfairDisplay = Playfair_Display({
  weight: ["400", "500"],
  subsets: ["latin"],
});

const Landing = () => {
  return (
    <div className="landing">
      <div className="auto__container">
        <div className="landing__inner">
          <div className="jumbotron">
            <div className="jumbotron__wrapper">
              <Image
                width={999}
                height={501}
                className="jumbotron__wrapperBg"
                src="/images/jumbotron.png"
                alt="Hero Section Greenhouse"
              />
              <Image
                width={422}
                height={489}
                className="jumbotron__wrapperMobileBg"
                src="/images/abstractRectangle2.png"
                alt="Hero Section Greenhouse"
              />
              <div className="jumbotron__wrapperInfo">
                <h1 style={playfairDisplay.style}>Agrosfera Greenhouses</h1>
                <p style={playfairDisplay.style}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore, laboriosam quia ipsam.
                </p>
                <button className="buttonMain">See Catalogue</button>
              </div>
            </div>
          </div>

          <div className="companyStats">
            <div className="companyStats__item">
              <h3>450+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="companyStats__item">
              <h3>530+</h3>
              <p>Greenhouses sold</p>
            </div>
            <div className="companyStats__item">
              <h3>220+</h3>
              <p>Greenhouses Assembled</p>
            </div>
          </div>

          <div className="cataloguePreview">
            <div className="cataloguePreview__heading">
              <h3>Catalogue</h3>
              <Link href="/">see more</Link>
            </div>

            <div className="cataloguePreview__preview">
              <PreviewCard />
              <PreviewCard />
              <PreviewCard />
              <PreviewCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
