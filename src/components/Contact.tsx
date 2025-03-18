import React from "react";
import ContactForm from "./ContactForm/ContactForm";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl font-normal text-gray-900 text-5xl-fz">
            Get in Touch
          </h2>
          <p className="mt-4 text-2xl text-gray-600 font-light text-2xl-fz">
            Ready to transform your pipeline operations? Contact us today.
          </p>
        </div>

        {/* <div className="mt-12 flex justify-center">
          <div className="w-full max-w-2xl bg-primary-50 p-12 rounded-3xl">
            <form className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xl font-light text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-2 block w-full rounded-lg border-gray-200 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-lg"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xl font-light text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-2 block w-full rounded-lg border-gray-200 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-lg"
                />
              </div>

              <div>
                <label
                  htmlFor="mobile"
                  className="block text-xl font-light text-gray-700"
                >
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="mobile"
                  id="mobile"
                  className="mt-2 block w-full rounded-lg border-gray-200 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-lg"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xl font-light text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="mt-2 block w-full rounded-lg border-gray-200 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-lg"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-4 px-6 text-lg font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
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
