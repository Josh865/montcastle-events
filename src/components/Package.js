import * as React from 'react';

const Package = ({
  name,
  price,
  features,
  image,
  index,
  setSelectedPackage,
}) => {
  const isReversed = index % 2;

  return (
    <div
      className={`flex flex-col mx-auto ${
        isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
      }`}
    >
      <div className="flex items-center justify-center flex-1 w-full md:h-600">
        <div className="w-full p-6 md:p-12">
          <div className="flex items-center justify-between p-4">
            <h3 className="text-navy">
              <div className="text-4xl font-semibold leading-none font-display md:text-5xl">
                {name}
              </div>
              <div className="mt-2 text-xl font-thin leading-none md:text-3xl">
                {price}
              </div>
            </h3>
            <div>
              <a
                href="#getInTouch"
                className="px-3 py-2 text-sm text-pink-700 transition transition-colors duration-150 bg-red-100 rounded shadow md:text-base hover:bg-red-200"
                onClick={() => setSelectedPackage(name)}
              >
                Sign Me Up
              </a>
            </div>
          </div>

          <ul className="w-full p-6 border border-red-200">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center mt-2 first:mt-0">
                <div className="flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-navy"
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
                <p className="ml-2 text-base font-medium leading-6 text-gray-600">
                  {feature}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <div className="hidden w-1 md:block" /> */}
      <div className="flex-1 bg-blue-100 h-450 md:h-600">
        <img src={image} className="object-cover w-full h-full" alt="wedding" />
      </div>
    </div>
  );
};

export default Package;
