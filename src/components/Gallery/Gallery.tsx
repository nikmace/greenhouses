/* eslint-disable @next/next/no-img-element */
import React from "react";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="auto__container">
        <div className="gallery__inner">
          <div className="gallery__innerHeading">
            <h3>Gallery</h3>
            <p>Our finished assembled greenhouses, pictures from customers</p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://cdn.shopify.com/s/files/1/0069/5854/6980/products/Sigma20_557x376.jpg?v=1660818069"
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
                  src="https://static.gewaechshauscentrum.de/media/2228/supreme-128-green-safety-glass-2.jpg?mode=max&width=1200&bgcolor=FFFFFF&format=jpg&quality=85&rnd=131377765330000000"
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
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://www.weedemandreap.com/wp-content/uploads/2016/06/how-to-build-greenhouse.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://swedengreenhouse.se/wp-content/uploads/2019/10/vaxthus-nynas-slott.jpg"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
