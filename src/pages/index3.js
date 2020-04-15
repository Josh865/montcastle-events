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

    <div className="max-w-3xl px-6 py-16 mx-auto text-2xl font-thin leading-loose text-gray-500 md:px-0">
      Planning your wedding should be as easy as being in love. Now it is!
      Montcastle Events has turned the planning process upside down and changed
      what used to be an overwhelming process into one that's fun, simple, and
      affordable!
    </div>

    <div
      className="flex flex-row-reverse items-center max-w-6xl mx-auto"
      style={{ height: '600px' }}
    >
      <div className="flex items-center justify-center flex-1 h-full bg-red-100">
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
      <div className="w-1" />
      <div className="flex-1 h-full bg-blue-100">
        <img src={image01} className="object-cover w-full h-full" />
      </div>
    </div>

    <div className="grid max-w-6xl grid-cols-1 gap-1 mx-auto md:grid-cols-2">
      {/* Charming */}
      <div
        className="flex items-center justify-center w-full h-full px-12"
        style={{ height: '650px', backgroundColor: '#f6dfdc' }}
      >
        <div className="w-full">
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
      <div className="w-full" style={{ height: '650px' }}>
        <img src={image01} className="object-cover w-full h-full" />
      </div>

      {/* Cheery */}
      <div
        className="flex items-center justify-center w-full h-full px-12 bg-gray-200"
        style={{ minHeight: '650px' }}
      >
        <div className="order-2 w-full">
          <h3 className="pb-4 text-3xl font-thin leading-none text-gray-600 border-b-2 border-gray-300">
            Cheery - $5000
          </h3>
          <ul className="w-full p-12">
            {cheeryFeatures.map(feature => (
              <li className="flex items-start mt-3 first:mt-0">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-sage-green"
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
      <div className="order-1 w-full" style={{ height: '650px' }}>
        <img src={tiniest} className="object-cover w-full h-full" />
      </div>

      {/* Cozy */}
      <div
        className="flex items-center justify-center w-full h-full px-12"
        style={{ height: '650px', backgroundColor: '#f6dfdc' }}
      >
        <div className="w-full">
          <h3 className="pb-4 text-3xl font-thin leading-none text-gray-600 border-b-2 border-gray-300">
            Cozy - $4000
          </h3>
          <ul className="w-full p-12">
            {cozyFeatures.map(feature => (
              <li className="flex items-start mt-3 first:mt-0">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-sage-green"
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
      <div className="w-full" style={{ height: '650px' }}>
        <img src={image02} className="object-cover w-full h-full" />
      </div>

      {/* Elope */}
      <div className="w-full" style={{ height: '650px' }}>
        <img src={tiny} className="object-cover w-full h-full" />
      </div>
      <div
        className="flex items-center justify-center w-full h-full px-12 bg-gray-200"
        style={{ height: '650px' }}
      >
        <div className="w-full">
          <h3 className="pb-4 text-3xl font-thin leading-none text-gray-600 border-b-2 border-gray-300">
            Elope - $600
          </h3>
          <ul className="w-full p-12">
            {elopeFeatures.map(feature => (
              <li className="flex items-start mt-3 first:mt-0">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-sage-green"
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
