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
    <div
      style={{
        minHeight: '600px',
        maxHeight: '70vh',
        backgroundImage: `url(${hero})`,
        backgroundPosition: 'bottom center',
        backgroundSize: 'cover',
      }}
    />

    <div className="max-w-3xl px-6 py-16 mx-auto text-lg leading-loose text-gray-700 md:px-0">
      Planning your wedding should be as easy as being in love. Now it is!
      Montcastle Events has turned the planning process upside down and changed
      what used to be an overwhelming process into one that's fun, simple, and
      affordable!
    </div>

    <div
      className="max-w-5xl mx-auto"
      style={{
        height: '650px',
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gridTemplateRows: 'repeat(4, 1fr)',
        gridColumnGap: '0px',
        gridRowGap: '0px',
      }}
    >
      <div style={{ gridArea: '2 / 2 / 5 / 6' }}>
        <img src={image01} className="object-cover w-full h-full shadow" />
      </div>
      <div
        className="flex items-center justify-center shadow-md"
        style={{ gridArea: '1 / 1 / 3 / 3', backgroundColor: '#f6dfdc' }}
      >
        <h3 className="text-3xl font-thin text-center text-gray-600">
          Charming
          <br />
          $6000
        </h3>
      </div>
      <div
        className="p-8 border border-white shadow-lg"
        style={{ gridArea: '3 / 5 / 4 / 7', backgroundColor: '#f6dfdc' }}
      >
        <ul className="">
          {charmingFeatures.map(feature => (
            <li className="flex items-start mt-2 first:mt-0">
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
              <p className="ml-3 text-sm font-medium leading-6 text-gray-500">
                {feature}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="py-16 my-12 bg-gray-100 shadow-inner">
      <div className="max-w-2xl mx-auto text-xl">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
        laborum incidunt excepturi ea minus.
      </div>
    </div>

    <div
      className="max-w-5xl mx-auto"
      style={{
        height: '650px',
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gridTemplateRows: 'repeat(4, 1fr)',
        gridColumnGap: '0px',
        gridRowGap: '0px',
      }}
    >
      <div style={{ gridArea: '2 / 2 / 5 / 6' }}>
        <img src={image02} className="object-cover w-full h-full shadow" />
      </div>
      <div
        className="flex items-center justify-center shadow-md"
        style={{ gridArea: '1 / 1 / 3 / 3', backgroundColor: '#eaece4' }}
      >
        <h3 className="text-3xl font-thin text-center text-gray-600">
          Cheery
          <br />
          $6000
        </h3>
      </div>
      <div
        className="p-8 border border-white shadow-lg"
        style={{ gridArea: '3 / 5 / 4 / 7', backgroundColor: '#eaece4' }}
      >
        <ul className="">
          {cheeryFeatures.map(feature => (
            <li className="flex items-start mt-2 first:mt-0">
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
              <p className="ml-3 text-sm font-medium leading-6 text-gray-500">
                {feature}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="py-16 my-12 bg-gray-100 shadow-inner">
      <div className="max-w-2xl mx-auto text-xl">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
        laborum incidunt excepturi ea minus.
      </div>
    </div>

    <div
      className="max-w-5xl mx-auto"
      style={{
        height: '650px',
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gridTemplateRows: 'repeat(4, 1fr)',
        gridColumnGap: '0px',
        gridRowGap: '0px',
      }}
    >
      <div style={{ gridArea: '2 / 2 / 5 / 6' }}>
        <img src={tiny} className="object-cover w-full h-full shadow" />
      </div>
      <div
        className="flex items-center justify-center shadow-md"
        style={{ gridArea: '1 / 1 / 3 / 3', backgroundColor: '#eaece4' }}
      >
        <h3 className="text-3xl font-thin text-center text-gray-600">
          Cozy
          <br />
          $6000
        </h3>
      </div>
      <div
        className="p-8 border border-white shadow-lg"
        style={{ gridArea: '3 / 5 / 4 / 7', backgroundColor: '#eaece4' }}
      >
        <ul className="">
          {cozyFeatures.map(feature => (
            <li className="flex items-start mt-2 first:mt-0">
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
              <p className="ml-3 text-sm font-medium leading-6 text-gray-500">
                {feature}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="py-16 my-12 bg-gray-100 shadow-inner">
      <div className="max-w-2xl mx-auto text-xl">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
        laborum incidunt excepturi ea minus.
      </div>
    </div>

    <div
      className="max-w-5xl mx-auto"
      style={{
        height: '650px',
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gridTemplateRows: 'repeat(4, 1fr)',
        gridColumnGap: '0px',
        gridRowGap: '0px',
      }}
    >
      <div style={{ gridArea: '2 / 2 / 5 / 6' }}>
        <img src={tiniest} className="object-cover w-full h-full shadow" />
      </div>
      <div
        className="flex items-center justify-center shadow-md"
        style={{ gridArea: '1 / 1 / 3 / 3', backgroundColor: '#eaece4' }}
      >
        <h3 className="text-3xl font-thin text-center text-gray-600">
          Elope
          <br />
          $6000
        </h3>
      </div>
      <div
        className="p-8 border border-white shadow-lg"
        style={{ gridArea: '3 / 5 / 4 / 7', backgroundColor: '#eaece4' }}
      >
        <ul className="" style={{ minHeight: '350px' }}>
          {elopeFeatures.map(feature => (
            <li className="flex items-start mt-2 first:mt-0">
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
              <p className="ml-3 text-sm font-medium leading-6 text-gray-500">
                {feature}
              </p>
            </li>
          ))}
        </ul>
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
