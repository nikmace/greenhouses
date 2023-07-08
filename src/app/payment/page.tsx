import React from "react";

const ItemList = () => {
  return (
    <div className="payment-list">
      <ul>
        <li>
          Ние можем да осигурим най-добрите възможни условия за плащане,
          включително отсрочено плащане до 90 дни на база на застраховка и
          факторинг, частично плащане или плащане при доставка.
        </li>
        <li>
          За продукти, доставяни на пристанища, отсрочено плащане до 60 дни може
          да се осигури въз основа на условията на митническите складове.
        </li>
        <li>
          За продукти, доставяни с кораб, е възможно отварянето на акредитив,
          достъпен след потвърждаване на доставката на банката-наредител.
        </li>
      </ul>
    </div>
  );
};

const PaymentTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Име на фирмата</th>
          <th>«Тесла Стиил» ООД</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Управител</td>
          <td>Баранов Дмитрий</td>
        </tr>
        <tr>
          <td>ЕИК/ПИК</td>
          <td>204842268</td>
        </tr>
        <tr>
          <td>Седалище</td>
          <td>България, гр. София 1407, ул. Кишинев 7, оф. 1</td>
        </tr>
        <tr>
          <td>Телефон</td>
          <td>+359 2 967 6235</td>
        </tr>
        <tr>
          <td>Номер на сметка</td>
          <td>BG 06 FINV 9150 1017 0819 75</td>
        </tr>
        <tr>
          <td>Име на банката</td>
          <td>FIRST INVESTMENT BANK AD</td>
        </tr>
        <tr>
          <td>SWIFT</td>
          <td>FINVBGSF</td>
        </tr>
        <tr>
          <td>E-mail</td>
          <td>info@teslasteel.eu</td>
        </tr>
      </tbody>
    </table>
  );
};

const PaymentInfo = () => {
  return (
    <div>
      <ItemList />
      <div className="payment-table">
        <PaymentTable />
      </div>
    </div>
  );
};

export default PaymentInfo;
