import React from 'react';

const Pricing = () => (
  <div className="relative lg:grid lg:grid-cols-10">
    <div className="max-w-lg mx-auto lg:max-w-none lg:mx-0 lg:col-start-4 lg:col-end-8 lg:row-start-1 lg:row-end-4">
      <div className="relative z-10 rounded-lg shadow-xl">
        <div>
          <div className="absolute inset-0 border-2 rounded-lg pointer-events-none border-pinor-noir" />
          <div className="absolute inset-x-0 top-0 transform translate-y-px">
            <div className="flex justify-center transform -translate-y-1/2">
              <span className="inline-flex px-4 py-1 text-sm font-semibold leading-5 tracking-wider text-white uppercase rounded-full bg-pinor-noir">
                Our Best Value
              </span>
            </div>
          </div>
          <div className="px-6 pt-12 pb-10 bg-white rounded-t-lg">
            <div>
              <h2 className="text-4xl font-semibold leading-9 text-center text-gray-900 sm:-mx-6">
                Tiny
              </h2>
              <p className="mt-1 font-semibold leading-7 tracking-widest text-center text-teal-500 uppercase">
                Up to 40 Guests
              </p>
              <div className="flex items-center justify-center mt-4">
                <span className="flex items-start px-3 text-6xl font-medium leading-none tracking-tight text-gray-900 sm:text-7xl">
                  <span className="mt-2 mr-1 text-4xl leading-none sm:text-5xl">
                    $
                  </span>
                  <span>2950</span>
                </span>
                <span className="text-2xl font-semibold leading-8 tracking-wide text-gray-400">
                  USD
                </span>
              </div>
            </div>
          </div>
          <div className="px-6 pt-10 pb-8 border-t-2 border-gray-100 rounded-b-lg bg-gray-50 sm:px-10 sm:py-10">
            <ul>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-pinor-noir"
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
                <p className="ml-3 text-base font-medium leading-6 text-gray-500">
                  Up to 40 guests
                </p>
              </li>
              <li className="flex items-start mt-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-pinor-noir"
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
                <p className="ml-3 text-base font-medium leading-6 text-gray-500">
                  Officiate
                </p>
              </li>
              <li className="flex items-start mt-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-pinor-noir"
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
                <p className="ml-3 text-base font-medium leading-6 text-gray-500">
                  Professional photography
                </p>
              </li>
              <li className="flex items-start mt-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-pinor-noir"
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
                <p className="ml-3 text-base font-medium leading-6 text-gray-500">
                  Bouquet and boutonniere
                </p>
              </li>
              <li className="flex items-start mt-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-pinor-noir"
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
                <p className="ml-3 text-base font-medium leading-6 text-gray-500 whitespace-no-wrap">
                  Fully styled décor
                </p>
              </li>
              <li className="flex items-start mt-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-pinor-noir"
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
                <p className="ml-3 text-base font-medium leading-6 text-gray-500 whitespace-no-wrap">
                  Bartender and non-alcoholic beverages
                </p>
              </li>
            </ul>
            <div className="mt-10">
              <div className="rounded-lg shadow-md">
                <a
                  href="https://gum.co/Cfrhr"
                  data-gumroad-single-product="true"
                  className="block w-full px-6 py-4 text-xl font-semibold leading-6 text-center text-white transition duration-150 ease-in-out bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:shadow-outline"
                  target="_blank"
                >
                  Start Planning
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-md mx-auto mt-6 lg:m-0 lg:max-w-none lg:col-start-1 lg:col-end-4 lg:row-start-2 lg:row-end-3">
      <div className="flex flex-col h-full overflow-hidden rounded-lg shadow-lg lg:rounded-none lg:rounded-l-lg">
        <div className="flex flex-col flex-1">
          <div className="px-6 pt-12 pb-10 bg-white">
            <div>
              <h2 className="text-3xl font-semibold leading-9 text-center text-gray-900">
                Tinier
              </h2>
              <p className="mt-1 font-semibold leading-7 tracking-widest text-center text-teal-500 uppercase">
                Up to 20 Guests
              </p>
              <div className="flex items-center justify-center mt-4">
                <span className="flex items-start px-3 text-6xl font-medium leading-none tracking-tight text-gray-900">
                  <span className="mt-2 mr-2 text-4xl">$</span>
                  <span>2350</span>
                </span>
                <span className="text-2xl font-semibold leading-8 tracking-wide text-gray-400">
                  USD
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between flex-1 p-6 border-t-2 border-gray-100 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
            <ul>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-pinor-noir"
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
                <p className="ml-3 text-base font-medium leading-6 text-gray-500">
                  Up to 20 guests
                </p>
              </li>
              <li className="flex items-start mt-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-pinor-noir"
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
                <p className="ml-3 text-base font-medium leading-6 text-gray-500">
                  Officiate
                </p>
              </li>
              <li className="flex items-start mt-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-pinor-noir"
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
                <p className="ml-3 text-base font-medium leading-6 text-gray-500">
                  Professional photography
                </p>
              </li>
              <li className="flex items-start mt-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-pinor-noir"
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
                <p className="ml-3 text-base font-medium leading-6 text-gray-500">
                  Bouquet and boutonniere
                </p>
              </li>
              <li className="flex items-start mt-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-pinor-noir"
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
                <p className="ml-3 text-base font-medium leading-6 text-gray-500">
                  Fully styled décor
                </p>
              </li>
            </ul>
            <div className="mt-8">
              <div className="rounded-lg shadow-md">
                <a
                  href="https://gum.co/KXjZm"
                  data-gumroad-single-product="true"
                  className="block w-full px-6 py-3 text-base font-semibold leading-6 text-center text-teal-600 transition duration-150 ease-in-out bg-white rounded-lg hover:text-pinor-noir focus:outline-none focus:shadow-outline"
                  target="_blank"
                >
                  Start Planning
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-md mx-auto mt-6 lg:m-0 lg:max-w-none lg:col-start-8 lg:col-end-11 lg:row-start-2 lg:row-end-3">
      <div className="flex flex-col h-full overflow-hidden rounded-lg shadow-lg lg:rounded-none lg:rounded-r-lg">
        <div className="flex flex-col flex-1">
          <div className="px-6 pt-12 pb-10 bg-white">
            <div>
              <h2 className="text-3xl font-semibold leading-9 text-center text-gray-900">
                Tiniest
              </h2>
              <p className="mt-1 font-semibold leading-7 tracking-widest text-center text-teal-500 uppercase">
                Bride and Groom
              </p>
              <div className="flex items-center justify-center mt-4">
                <span className="flex items-start px-3 text-6xl font-medium leading-none tracking-tight text-gray-900">
                  <span className="mt-2 mr-2 text-4xl">$</span>
                  <span>450</span>
                </span>
                <span className="text-2xl font-semibold leading-8 tracking-wide text-gray-400">
                  USD
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between flex-1 p-6 border-t-2 border-gray-100 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
            <ul>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-pinor-noir"
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
                <p className="ml-3 text-base font-medium leading-6 text-gray-500">
                  Available Monday - Friday
                </p>
              </li>
              <li className="flex items-start mt-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-pinor-noir"
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
                <p className="ml-3 text-base font-medium leading-6 text-gray-500">
                  Bridge and groom
                </p>
              </li>
              <li className="flex items-start mt-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-pinor-noir"
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
                <p className="ml-3 text-base font-medium leading-6 text-gray-500">
                  Officiate
                </p>
              </li>
              <li className="flex items-start mt-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-pinor-noir"
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
                <p className="ml-3 text-base font-medium leading-6 text-gray-500">
                  Bouquet and boutonniere
                </p>
              </li>
              <li className="flex items-start mt-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-pinor-noir"
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
                <p className="ml-3 text-base font-medium leading-6 text-gray-500">
                  Professional photography
                </p>
              </li>
            </ul>
            <div className="mt-8">
              <div className="rounded-lg shadow-md">
                <a
                  href="https://gum.co/jYnNI"
                  data-gumroad-single-product="true"
                  className="block w-full px-6 py-3 text-base font-semibold leading-6 text-center text-teal-600 transition duration-150 ease-in-out bg-white rounded-lg hover:text-pinor-noir focus:outline-none focus:shadow-outline"
                  target="_blank"
                >
                  Start Planning
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Pricing;
