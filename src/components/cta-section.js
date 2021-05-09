import React from "react";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <div className="bg-white">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-6 lg:flex lg:items-center lg:justify-between">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block">Your favorite café is not listed?</span>
        <span className="block text-green-400">Register and add it to coffeemap.</span>
      </h2>
      <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div className="inline-flex rounded-md shadow">
          <Link
            to="/register"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-400 hover:bg-green-500"
          >
            Register
          </Link>
        </div>
        <div className="ml-3 inline-flex rounded-md shadow">
          <Link
            to="/login"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-400 bg-white hover:text-green-500"
          >
            Login in
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
}

export default CTA;
