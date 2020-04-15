import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import hero from '../images/bouquet.jpg';
import tiny from '../images/tiny.jpg';
import tiniest from '../images/tiniest.jpg';
import flowers from '../images/flowers.jpg';
import image01 from '../images/01.jpg';
import image02 from '../images/02.jpg';

const charmingFeatures = [
  'Six hours for event',
  'Full coordination and event styling',
  'Venue',
  'Full floral design',
  'Use of decor closet',
  'Tables and chairs',
  'Officiant',
  'Photography coverage',
  'Bubbles and Brews*',
  'Dinner',
  'Cake',
];

const cheeryFeatures = [
  'Five hours for event',
  'Full coordination and event styling',
  'Venue',
  'Choice of four floral',
  'Use of decor closet',
  'Tables and chairs',
  'Officiant',
  'Photography coverage',
  'Bubbles and Brews*',
  'Grazing table ',
  'Cake',
];

const cozyFeatures = [
  'Four hours for event',
  'Full coordination and event styling',
  'Venue',
  'Choice of three floral ',
  'Use of decor closet',
  'Tables and chairs',
  'Officiant',
  'Photography coverage',
  'Bubbles and Brews side bar*',
  'Sweets and savories',
  'Cake for cutting',
];

const elopeFeatures = [
  'Full coordination',
  'Location list',
  'Floral',
  'Photography for 1.5 hours',
  'Cupcakes for seven',
];

const Index2 = ({ data }) => (
  <>
    <div className="py-8">
      <h1 className="text-2xl text-center">Montcastle Events</h1>
    </div>

    <div
      style={{
        minHeight: '600px',
        maxHeight: '70vh',
        backgroundImage: `url(${hero})`,
        backgroundPosition: 'bottom center',
        backgroundSize: 'cover',
      }}
    />

    <div className="max-w-3xl px-6 py-16 mx-auto text-lg font-thin leading-loose text-gray-500 md:text-2xl md:px-0">
      Planning your wedding should be as easy as being in love. Now it is!
      Montcastle Events has turned the planning process upside down and changed
      what used to be an overwhelming process into one that's fun, simple, and
      affordable!
    </div>

    {/* Charming */}
    <div className="flex flex-col items-center max-w-6xl mx-auto md:flex-row">
      <div
        className="flex items-center justify-center flex-1 w-full h-full bg-red-100"
        style={{ height: '600px' }}
      >
        <div className="w-full p-12">
          <h3 className="pb-4 text-3xl font-thin leading-none text-gray-600 border-b-2 border-gray-300">
            Charming - $6000
          </h3>
          <ul className="w-full p-12">
            {charmingFeatures.map(feature => (
              <li className="flex items-start mt-3 first:mt-0">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-gray-400"
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
                  {feature}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="hidden w-1 md:block" />
      <div className="flex-1 h-full bg-blue-100" style={{ height: '600px' }}>
        <img src={image01} className="object-cover w-full h-full" />
      </div>
    </div>

    <div className="h-1" />

    {/* Cheery */}
    <div className="flex flex-col items-center max-w-6xl mx-auto md:flex-row-reverse">
      <div
        className="flex items-center justify-center flex-1 w-full h-full bg-red-100"
        style={{ height: '600px' }}
      >
        <div className="w-full p-12">
          <h3 className="pb-4 text-3xl font-thin leading-none text-gray-600 border-b-2 border-gray-300">
            Cheery - $5000
          </h3>
          <ul className="w-full p-12">
            {cheeryFeatures.map(feature => (
              <li className="flex items-start mt-3 first:mt-0">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-gray-400"
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
                  {feature}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="hidden w-1 md:block" />
      <div className="flex-1 h-full bg-blue-100" style={{ height: '600px' }}>
        <img src={image02} className="object-cover w-full h-full" />
      </div>
    </div>

    <div className="h-1" />

    {/* Cozy */}
    <div className="flex flex-col items-center max-w-6xl mx-auto md:flex-row">
      <div
        className="flex items-center justify-center flex-1 w-full h-full bg-red-100"
        style={{ height: '600px' }}
      >
        <div className="w-full p-12">
          <h3 className="pb-4 text-3xl font-thin leading-none text-gray-600 border-b-2 border-gray-300">
            Cozy - $4000
          </h3>
          <ul className="w-full p-12">
            {cozyFeatures.map(feature => (
              <li className="flex items-start mt-3 first:mt-0">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-gray-400"
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
                  {feature}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="hidden w-1 md:block" />
      <div className="flex-1 h-full bg-blue-100" style={{ height: '600px' }}>
        <img src={tiniest} className="object-cover w-full h-full" />
      </div>
    </div>

    <div className="h-1" />

    {/* Elope */}
    <div className="flex flex-col items-center max-w-6xl mx-auto md:flex-row-reverse">
      <div
        className="flex items-center justify-center flex-1 w-full h-full bg-red-100"
        style={{ height: '600px' }}
      >
        <div className="w-full p-12">
          <h3 className="pb-4 text-3xl font-thin leading-none text-gray-600 border-b-2 border-gray-300">
            Elope - $600
          </h3>
          <ul className="w-full p-12">
            {elopeFeatures.map(feature => (
              <li className="flex items-start mt-3 first:mt-0">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-gray-400"
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
                  {feature}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="hidden w-1 md:block" />
      <div className="flex-1 h-full bg-blue-100" style={{ height: '600px' }}>
        <img src={tiny} className="object-cover w-full h-full" />
      </div>
    </div>
  </>
);

export default Index2;

export const query = graphql`
  query {
    tiny: file(relativePath: { eq: "tiny.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    tiniest: file(relativePath: { eq: "tiniest.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
