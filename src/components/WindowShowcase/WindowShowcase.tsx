import React from "react";
import Image from "next/image";

const WindowShowcase = () => {
  return (
    <div className="pt-[90px]">
      <div className="auto__container">
        <div className="">
          <h3 className="flex items-center justify-center text-[24px] font-light">
            Website catalogue showcase
          </h3>
          <Image
            width={2784}
            height={1964}
            src="/images/windowShowcase.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default WindowShowcase;
