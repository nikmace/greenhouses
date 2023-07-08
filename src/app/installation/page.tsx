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

const InstallationGallery = () => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://teplicy-ekaterinburg.su/upload/iblock/820/8206069dc4e16ff6a9cfcef2fcc18cf0.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://media.houseandgarden.co.uk/photos/61893b387c63ccf003960c67/master/w_1600%2Cc_limit/littledarmouth_2018_0713__43103x.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://oteplicah.com/wp-content/uploads/2014/11/foto-karkasa-polikarbonata-i-uzhe-pochti-teplitsy.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://media.houseandgarden.co.uk/photos/61893b387c63ccf003960c67/master/w_1600%2Cc_limit/littledarmouth_2018_0713__43103x.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://houseandhome.com/wp-content/uploads/2022/06/Feature_NoHeadshot-2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://media.4rgos.it/i/Argos/0720-m0014-m007-m050-asym-m008-m022-gardenshedideas-7050895?maxW=1200&qlt=75&fmt.jpeg.interlaced=true"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

const InstallationInfo = () => {
  return (
    <div>
      <ItemList />
      <div className="mt-8">
        <h3 className="pb-3 text-xl font-light">
          Вече монтирани оранжерии (фото)
        </h3>
        <InstallationGallery />
      </div>
      <div className="mt-8">
        <h3 className="pb-3 text-xl font-light">
          Видео за самостоятелно монтиране на оранжерии
        </h3>
        <div className="aspect-h-9 aspect-w-16 border border-green-400">
          <iframe
            src="https://www.youtube.com/embed/aI2iGt_fKQM"
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default InstallationInfo;
