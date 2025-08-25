

import React from "react";

const Newsletter = () => {
  return (
    <div className=" bg-cyan-100 py-20 dark:bg-gray-900">
      <div className=" bg-white w-11/12  mx-auto text-gray-900 border border-gray-200 px-6 py-12 rounded-xl text-center shadow-lg dark:bg-gray-800 dark:text-white dark:border-gray-700">
        {/* Heading */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
          Stay Connected with WorkSync Pro
        </h2>

        {/* Subheading */}
        <p className="mb-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Get the latest updates on workplace tools, productivity features, and
          HR management solutions. Be the first to know about new releases and
          exclusive insights.
        </p>

        {/* Form */}
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-4 py-3 rounded-xl border dark:border-pink-500 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-pink-500 border-primary dark:bg-gray-900 dark:text-white"
            required
          />
          <button
            type="submit"
            className="btn btn-primary dark:bg-pink-500 hover:dark:bg-pink-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-700 cursor-pointer"
          >
            Subscribe
          </button>
        </form>

        {/* Disclaimer */}
        <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
