import React from "react";

const AssemblyPricesTable = () => {
  return (
    <div className="w-full pt-8">
      <h5 className="mr-2 pb-4 font-semibold uppercase">Цените за монтаж</h5>
      <div className="relative overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Оранжерия
              </th>
              <th scope="col" className="px-6 py-3">
                Цена
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium uppercase text-gray-900 dark:text-white"
              >
                Агроном
              </th>
            </tr>
            <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                Агроном (4 х 4)
              </th>
              <td className="px-6 py-4">1200 лева</td>
            </tr>
            <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                Агроном (4 х 6)
              </th>
              <td className="px-6 py-4">1200 лева</td>
            </tr>
            <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                Агроном (4 х 8)
              </th>
              <td className="px-6 py-4">1200 лева</td>
            </tr>
            <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                Агроном (4 х 10)
              </th>
              <td className="px-6 py-4">1200 лева</td>
            </tr>

            <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium uppercase text-gray-900 dark:text-white"
              >
                Стрелка
              </th>
            </tr>
            <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                Стрелка (4 х 4)
              </th>
              <td className="px-6 py-4">1200 лева</td>
            </tr>
            <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                Стрелка (4 х 6)
              </th>
              <td className="px-6 py-4">1200 лева</td>
            </tr>
            <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                Стрелка (4 х 8)
              </th>
              <td className="px-6 py-4">1200 лева</td>
            </tr>
            <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                Стрелка (4 х 10)
              </th>
              <td className="px-6 py-4">1200 лева</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssemblyPricesTable;
