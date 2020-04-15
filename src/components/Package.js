import * as React from 'react';

const Package = ({ name, price, features, image, index }) => {
  const bgColor = index % 2 ? '#d0d5d7' : '#f6dfdc';
  const isReversed = index % 2;

  return (
    <div
      className={`flex flex-col items-center mx-auto ${
        isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
      }`}
    >
      <div
        className="flex items-center justify-center flex-1 w-full h-450 md:h-600"
        style={{ backgroundColor: bgColor }}
      >
        <div className="w-full p-12">
          <h3 className="px-4 py-6 mb-6 text-2xl font-thin leading-none text-gray-600 border-b border-gray-400 md:text-3xl text-shadow">
            {name} - {price}
          </h3>
          <ul className="w-full pl-12">
            {features.map(feature => (
              <li className="flex items-center mt-2 first:mt-0">
                <div className="flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ml-2 text-base font-medium leading-6 text-gray-500">
                  {feature}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="hidden w-1 md:block" />
      <div className="flex-1 bg-blue-100 h-450 md:h-600">
        <img src={image} className="object-cover w-full h-full" alt="wedding" />
      </div>
    </div>
  );
};

export default Package;
