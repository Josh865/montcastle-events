import React, { useState } from 'react';

import Pricing from '../components/PricingTwo';

import crown from '../images/crown.svg';
import hero from '../images/hero.jpg';

const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative overflow-hidden bg-white">
        <div className="max-w-screen-xl mx-auto ">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <div className="px-4 pt-6 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="/">
                      <img
                        className="w-auto h-10 sm:h-12"
                        src={crown}
                        alt="Tiny Weddings Logo"
                      />
                    </a>
                    <div className="flex items-center -mr-2 md:hidden">
                      <button
                        onClick={() => setOpen(true)}
                        type="button"
                        className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                      >
                        <svg
                          className="w-6 h-6"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4">
                  <a
                    href="#"
                    className="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
                  >
                    Packages
                  </a>
                  <a
                    href="/blog"
                    className="ml-8 font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
                  >
                    Blog
                  </a>
                  <a
                    href="#"
                    className="ml-8 font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
                  >
                    Testimonials
                  </a>
                  <a
                    href="#"
                    className="ml-8 font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
                  >
                    Partners
                  </a>
                </div>
              </nav>
            </div>

            {open && (
              <div className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden">
                <div className="rounded-lg shadow-md">
                  <div className="overflow-hidden bg-white rounded-lg shadow-xs">
                    <div className="flex items-center justify-between px-5 pt-4">
                      <div>
                        <img className="w-auto h-8" src={crown} alt="" />
                      </div>
                      <div className="-mr-2">
                        <button
                          onClick={() => setOpen(false)}
                          type="button"
                          className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                        >
                          <svg
                            className="w-6 h-6"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="px-2 pt-2 pb-3">
                      <a
                        href="#"
                        className="block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                      >
                        Packages
                      </a>
                      <a
                        href="/blog"
                        className="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                      >
                        Blog
                      </a>
                      <a
                        href="#"
                        className="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                      >
                        Testimonials
                      </a>
                      <a
                        href="#"
                        className="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                      >
                        Partners
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="max-w-screen-xl px-4 mx-auto mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl font-display">
                  Easy. Affordable.
                  <br className="xl:hidden" />
                  <span className="text-pinor-noir"> Beautiful.</span>
                </h2>
                <p className="mt-3 text-lg font-light text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Tiny weddings by Montcastle Events is the easiest way to have
                  a beautiful and affordable wedding around Charlotte! We’ve
                  simplified the process so you can show up, show out, and live
                  happily ever after.
                </p>
                {/* <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-pinor-noir hover:bg-indigo-500 focus:outline-none focus:shadow-outline md:py-4 md:text-lg md:px-10"
                    >
                      Get started
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
            <svg
              className="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="object-cover object-bottom w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={hero}
            alt="Couple holding hands overlooking mountains"
          />
        </div>
      </div>

      <div className="px-4 py-12 lg:py-24 sm:px-6 lg:px-8 pattern-bg">
        <div className="flex justify-center mb-12">
          <span
            className="text-4xl leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl font-display"
            style={{ textShadow: '1px 1px 5px rgba(0,0,0,0.2)' }}
          >
            So how does this work?
          </span>
        </div>
        <Pricing />
      </div>

      <div className="relative px-4 my-24 sm:px-6 lg:px-8">
        <blockquote className="mt-8">
          <div className="max-w-3xl mx-auto text-xl font-medium leading-8 text-center text-gray-900">
            <p>
              “Mary did an incredible job of making our wedding special! She
              made it super simple, super fun, and super affordable. I wouldn't
              hesitate to recommend Mary to anyone looking for a micro wedding
              in NC.”
            </p>
          </div>
          <footer className="mt-8">
            <div className="md:flex md:items-center md:justify-center">
              <div className="md:flex-shrink-0">
                <img
                  className="w-10 h-10 mx-auto rounded-full"
                  src="https://randomuser.me/api/portraits/women/65.jpg"
                  alt=""
                />
              </div>
              <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                <div className="text-base font-medium leading-6 text-gray-900">
                  Jane Doe
                </div>

                <svg
                  className="hidden w-5 h-5 mx-1 text-pinor-noir md:block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M11 0h3L9 20H6l5-20z"></path>
                </svg>

                <div className="text-base font-medium leading-6 text-gray-500">
                  Charlotte, NC
                </div>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>

      <div className="px-4 pt-16 pb-8 bg-gray-100 sm:px-6 lg:px-8">
        <div className="flex items-center justify-around max-w-2xl mx-auto">
          <a
            href="#"
            className="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
          >
            Packages
          </a>
          <a
            href="/blog"
            className="ml-8 font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
          >
            Blog
          </a>
          <a
            href="#"
            className="ml-8 font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
          >
            Testimonials
          </a>
          <a
            href="#"
            className="ml-8 font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
          >
            Partners
          </a>
        </div>
        <div className="flex justify-center pt-8 text-gray-400">
          &copy; 2020 Tiny Weddings NC
        </div>
      </div>
    </>
  );
};

export default Home;
