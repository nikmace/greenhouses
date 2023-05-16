"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

const PreviewCard = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="cataloguePreview__previewItem"
    >
      <Image
        width={294}
        height={299}
        src="/images/greenhouse.jpeg"
        alt="Greenhouse Agronom"
      />
      <div className="cataloguePreview__previewItem-info">
        <h4 className="mt-2 text-lg text-[#242f41]">Agronom-Plus</h4>
        <ul className="cataloguePreview__previewItem-infoList">
          <li>
            <p>Material</p>
            <span>Stainless Steel</span>
          </li>
          <li>
            <p>Dimensions</p>
            <span>4 x 4 x 2.1 m</span>
          </li>
          <li>
            <p>Item Weight</p>
            <span>46 Kilograms</span>
          </li>
          <li>
            <p>Pipe</p>
            <span>Galvanized pipe 40 x 20 mm</span>
          </li>
          <li>
            <p>Type</p>
            <span>Welded panels, bolted connection</span>
          </li>
        </ul>
        <div className="cataloguePreview__previewItem-infoPrice">
          <p>
            from <span>1240 BGN</span>
          </p>
        </div>
      </div>
      <div className="cataloguePreview__previewItem-link">
        <Link href="/" className="buttonBuy">
          See more
        </Link>
        <Link href="/" className="buttonBuyAlt">
          Buy in 1 click
        </Link>
      </div>
    </motion.div>
  );
};

export default PreviewCard;
