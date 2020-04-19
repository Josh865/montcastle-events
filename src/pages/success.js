import * as React from 'react';

const Success = () => (
  <div className="flex items-center justify-center w-screen h-screen px-6 bg-blue-100 md:px-0">
    <div className="max-w-lg px-8 py-12 bg-white border border-pink-200 rounded shadow-lg">
      <h1 className="mb-4 text-4xl text-blue-700 font-display">
        Thanks for getting in touch!
      </h1>

      <p className="text-gray-600">
        I&apos;ll contact you soon so we can start planning a wedding for you
        that's fun, simple, and affordable.
      </p>

      <p className="mt-6 text-center">
        <a href="/" className="text-blue-700">
          Return to Montcastle Events
        </a>
      </p>
    </div>
  </div>
);

export default Success;
