"use client";
import React, { useEffect, useState } from "react";

import SelectMenu from "../SelectMenu/SelectMenu";

import { IProduct } from "@/interfaces/types";

const polycarbonateItems = [
  {
    id: "4mmPolycarbonate001",
    name: "4 мм (плътност 0,47 кг/кв.м., гарантия 10 г.)",
    baseValue: 30,
  },
  {
    id: "4mmPolycarbonate002",
    name: "4 мм (плътност 0,6 кг/м2 гарантия 15 г.)",
    baseValue: 35,
  },
  {
    id: "4mmPolycarbonate003",
    name: "4мм (плътност 0,63 кг/кв.м, гарантия 18 г.)",
    baseValue: 40,
  },
];

const polycarbonateLengths = [
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
];

const extraWindows = [
  {
    id: "extrawindow001",
    name: "не",
    amount: 0,
    price: 0,
  },
  {
    id: "extrawindow002",
    name: "1",
    amount: 1,
    price: 30,
  },
  {
    id: "extrawindow003",
    name: "2",
    amount: 2,
    price: 60,
  },
  {
    id: "extrawindow004",
    name: "3",
    amount: 3,
    price: 90,
  },
  {
    id: "extrawindow005",
    name: "4",
    amount: 4,
    price: 120,
  },
];

const extraWindowAssemblies = [
  {
    id: "extrawindow-assembly001",
    name: "не",
    baseValue: 0,
  },
  {
    id: "extrawindow-assembly002",
    name: "1",
    baseValue: 1,
  },
  {
    id: "extrawindow-assembly003",
    name: "2",
    baseValue: 2,
  },
  {
    id: "extrawindow-assembly004",
    name: "3",
    baseValue: 3,
  },
  {
    id: "extrawindow-assembly005",
    name: "4",
    baseValue: 4,
  },
];

const assembliesUnder60 = [
  {
    id: "assembly-under001",
    name: "не",
    baseValue: 0,
  },
  {
    id: "assembly-under002",
    name: "да",
    baseValue: 1,
  },
];

const assembliesAbove60 = [
  {
    id: "assembly-above001",
    name: "не",
    baseValue: 0,
  },
  {
    id: "assembly-above002",
    name: "да",
    baseValue: 1,
  },
];

const foundationsWood = [
  {
    id: "foundation-wood001",
    name: "не",
    baseValue: 0,
  },
  {
    id: "foundation-wood002",
    name: "да",
    baseValue: 1,
  },
];

const windowPrice = 30;

// const extraWindowsPrice = 40;
// const extraWindowAssembliesPrice = 20;

interface SelectedItem {
  name: string;
  id: string;
  price?: number;
  amount?: number;
}

interface ConstructorProps {
  greenhouse: IProduct;
}

const GreenhouseConstructor: React.FC<ConstructorProps> = ({ greenhouse }) => {
  const { price } = greenhouse;
  const [polycarbonate, setPolycarbonate] = useState<SelectedItem>(
    polycarbonateItems[0]
  );
  const [polycarbonateLength, setPolycarbonateLength] = useState<SelectedItem>(
    polycarbonateLengths[0]
  );
  const [extraWindow, setExtraWindow] = useState<SelectedItem>(extraWindows[0]);
  const [extraWindowAssembly, setExtraWindowAssembly] = useState<SelectedItem>(
    extraWindowAssemblies[0]
  );
  const [assemblyUnder60, setAssemblyUnder60] = useState<SelectedItem>(
    assembliesUnder60[0]
  );
  const [assemblyAbove60, setAssemblyAbove60] = useState<SelectedItem>(
    assembliesAbove60[0]
  );
  const [foundationWood, setFoundationWood] = useState<SelectedItem>(
    foundationsWood[0]
  );

  const [totalPrice, setTotalPrice] = useState<number>(price);
  const [totalOptionsPrice, setTotalOptionsPrice] = useState<number>(0);

  useEffect(() => {
    setTotalOptionsPrice((prev) => prev + extraWindow.price!);
  }, [extraWindow, totalOptionsPrice]);

  return (
    <div className="pt-8">
      <div>
        {/** Prices section */}
        <div className="grid grid-cols-1 justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <div className="flex flex-col">
            <p className="text-gray-500">Цена за базовия комплект</p>
            <span className="text-lg font-normal text-[#f7921e]">
              {price} лв
            </span>
          </div>
          <div className="flex flex-col">
            <p className="text-gray-500">Цена за допълнителни опции</p>
            <span className="text-lg font-normal text-[#f7921e]">
              {totalOptionsPrice} лв
            </span>
          </div>
          <div className="flex flex-col">
            <p className="text-gray-500">Крайна цена</p>
            <span className="text-lg font-normal text-[#f7921e]">
              {totalPrice} лв
            </span>
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
              (влият на стойност)
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4 pt-3 lg:grid-cols-2">
            <div className="pb-4">
              <SelectMenu
                label="Поликарбонат"
                items={polycarbonateItems}
                selected={polycarbonate}
                setSelected={setPolycarbonate}
              />
            </div>
            <div className="pb-4">
              <SelectMenu
                label="Дължина"
                items={polycarbonateLengths}
                selected={polycarbonateLength}
                setSelected={setPolycarbonateLength}
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

        <div className="pt-8">
          <div className="flex items-center">
            <h5 className="mr-2 font-semibold uppercase">Допълнителни опции</h5>
            <span className="text-md font-light text-gray-500">
              (влият на стойност)
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4 pt-3 lg:grid-cols-3">
            <div className="pb-4">
              <SelectMenu
                label="Доп. форточка в крышу"
                items={extraWindows}
                selected={extraWindow}
                setSelected={setExtraWindow}
              />
            </div>
            <div className="pb-4">
              <SelectMenu
                label="Монтаж доп. форточки в крышу"
                items={extraWindowAssemblies}
                selected={extraWindowAssembly}
                setSelected={setExtraWindowAssembly}
              />
            </div>
            <div className="pb-4">
              <SelectMenu
                label="Доставка теплицы до 60 км"
                items={assembliesUnder60}
                selected={assemblyUnder60}
                setSelected={setAssemblyUnder60}
              />
            </div>
            <div className="pb-4">
              <SelectMenu
                label="Доставка теплицы от 60 км"
                items={assembliesAbove60}
                selected={assemblyAbove60}
                setSelected={setAssemblyAbove60}
              />
            </div>
            <div className="pb-4">
              <SelectMenu
                label="Фундамент деревянный"
                items={foundationsWood}
                selected={foundationWood}
                setSelected={setFoundationWood}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenhouseConstructor;
