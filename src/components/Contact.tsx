import React from "react";
import ContactForm from "./ContactForm/ContactForm";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-8 sm:py-8 lg:py-10 bg-white">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-900">
            Get in Touch
          </h2>
          <p className="mt-3 sm:mt-4 text-xl sm:text-2xl text-gray-600 font-light">
            Ready to transform your pipeline operations? Contact us today.
          </p>
        </div>

        {/* <div className="mt-8 sm:mt-12 flex justify-center">
          <div className="w-full max-w-2xl bg-primary-50 p-6 sm:p-12 rounded-3xl">
            <form className="space-y-6 sm:space-y-8">
              <div>
                <label htmlFor="name" className="block text-lg sm:text-xl font-light text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-2 block w-full rounded-lg border-gray-200 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-base sm:text-lg"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg sm:text-xl font-light text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-2 block w-full rounded-lg border-gray-200 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-base sm:text-lg"
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block text-lg sm:text-xl font-light text-gray-700">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="mobile"
                  id="mobile"
                  className="mt-2 block w-full rounded-lg border-gray-200 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-base sm:text-lg"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg sm:text-xl font-light text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="mt-2 block w-full rounded-lg border-gray-200 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-base sm:text-lg"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-3 sm:py-4 px-6 text-base sm:text-lg font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div> */}
        <ContactForm />
      </div>
    </section>
  );
};
