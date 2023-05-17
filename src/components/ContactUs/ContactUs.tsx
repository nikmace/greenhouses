import React from "react";

const ContactUs = () => {
  return (
    <div className="contact">
      <div className="auto__container">
        <div className="contactus__inner">
          <div className="contact__innerHeading">
            <h3>Contact Us</h3>
            {/* <p>Send us a request or a question and we will contact you</p> */}
          </div>
          <div className="contact__innerForm">
            <div className="relative py-4 sm:mx-auto sm:max-w-xl">
              <div className="absolute inset-0 -skew-y-6 transform bg-gradient-to-r from-[#99ea5f] to-[#72da27] shadow-lg sm:-rotate-6 sm:skew-y-0 sm:rounded-3xl"></div>
              <div className="relative bg-white px-4 py-10 shadow-lg sm:rounded-3xl sm:p-20">
                <div className="mx-auto max-w-md">
                  <div>
                    <h4 className="text-xl font-light">
                      Get in Touch with Us Today
                    </h4>
                    <p className="text-sm">
                      Send us a request or a question and we will contact you!
                    </p>
                  </div>
                  <div className="divide-y divide-gray-200">
                    <form className="space-y-4 py-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Вашите имена
                      </label>
                      <div className="relative rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <span className="text-gray-500 sm:text-sm">@</span>
                        </div>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="-mt-4 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#76ae4d] sm:text-sm sm:leading-6"
                          placeholder="Петър Петров"
                        />
                      </div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Вашият номер
                      </label>
                      <div className="relative rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <span className="text-gray-500 sm:text-sm">+</span>
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          className="-mt-4 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#76ae4d] sm:text-sm sm:leading-6"
                          placeholder="359 88..."
                        />
                      </div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Допълнителен комментар
                      </label>
                      <div className="relative rounded-md shadow-sm">
                        {/* <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <span className="text-gray-500 sm:text-sm">+</span>
                        </div> */}
                        <textarea
                          rows={4}
                          cols={50}
                          name="phone"
                          id="phone"
                          className="-mt-4 block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#76ae4d] sm:text-sm sm:leading-6"
                        />
                      </div>
                      <div className="relative">
                        <button className="contactBtn">Изпратете заявка</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
