import React from "react";

import GreenhouseDescription from "@/components/Product/GreenhouseDescription";
import ProductCarousel from "@/components/ProductCarousel/ProductCarousel";
import SelectMenu from "@/components/SelectMenu/SelectMenu";

const ProductInfo = ({ params }) => {
  console.log(params);
  return (
    <>
      <ProductCarousel />
      <GreenhouseDescription />
      <div className="pt-8">
        <div>
          {/** Prices section */}
          <div className="grid grid-cols-1 justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <div className="flex flex-col">
              <p className="text-gray-500">Цена за базовия комплект</p>
              <span className="text-lg">1200 BGN</span>
            </div>
            <div className="flex flex-col">
              <p className="text-gray-500">Цена за допълнителни опции</p>
              <span className="text-lg">0 BGN</span>
            </div>
            <div className="flex flex-col">
              <p className="text-gray-500">Крайна цена</p>
              <span className="text-lg">1200 BGN</span>
            </div>
          </div>
          {/** Button group */}
          <div className="pt-4">
            <div className="grid grid-cols-2 gap-5 lg:grid-cols-3">
              <button className="rounded-xl border bg-[#6dc82b] p-2 text-sm text-white transition delay-150 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-[#82d14a]">
                Добави в количка
              </button>
              <button className="rounded-xl border border-[#6dc82b] p-2 text-sm hover:bg-[#6dc82b] hover:text-white">
                Купи с един клик
              </button>
              <button className="rounded-xl border border-[#6dc82b] p-2 text-sm hover:bg-[#6dc82b] hover:text-white">
                Задай въпрос
              </button>
            </div>
          </div>
          <div className="pt-8">
            <div className="flex items-center">
              <h5 className="mr-2 font-semibold uppercase">
                Параметрите за избор
              </h5>
              <span className="text-md font-light text-gray-500">
                влият на стойност
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-3">
              <div className="pb-4">
                <SelectMenu
                  label="Поликарбонат"
                  items={[
                    {
                      id: "4mmPolycarbonate001",
                      name: "4 мм (плътност 0,47 кг/кв.м., гарантия 10 г.)",
                    },
                    {
                      id: "4mmPolycarbonate002",
                      name: "4 мм (плътност 0,6 кг/м2 гарантия 15 г.)",
                    },
                    {
                      id: "4mmPolycarbonate003",
                      name: "4мм (плътност 0,63 кг/кв.м, гарантия 18 г.)",
                    },
                  ]}
                />
              </div>
              <div className="pb-4">
                <SelectMenu
                  label="Дължина"
                  items={[
                    {
                      id: "4meterPolycarbonate",
                      name: "4 метра",
                    },
                    {
                      id: "6meterPolycarbonate",
                      name: "6 метра",
                    },
                    {
                      id: "8meterPolycarbonate",
                      name: "8 метра",
                    },
                  ]}
                />
              </div>
              <div className="w-32 pb-4">
                <p className="text-md font-medium leading-6 text-gray-600">
                  Количество
                </p>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">x</span>
                  </div>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    step={1}
                    min={1}
                    max={10}
                    defaultValue={1}
                    className="block w-full rounded-md border-0 py-1.5 pl-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#6dc82b] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
