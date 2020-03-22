import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Pricing from '../components/PricingTwo';

import hero from '../images/hero.jpg';
import tiny from '../images/tiny.jpg';
import tiniest from '../images/tiniest.jpg';

const tinyFeatures = [
  'Five hours of consultation',
  'Choice of color scheme',
  'Venue for five hours',
  'Officiate',
  'Bouquet',
  'Boutonnière',
  'Grazing table for 20',
  'Non alcoholic drinks',
  'Cake for cutting and cupcakes for your guests',
  'Fully styled décor for ceremony and reception',
  'Music',
];

const tiniestFeatures = [
  'Officiate',
  'Bouquet',
  'Boutonniere',
  'Unity ceremony',
  'Cake',
  'Sparkling Wine for toasting',
];

const Index2 = ({ data }) => (
  <>
    <div
      className="relative"
      style={{
        minHeight: '600px',
        maxHeight: '70vh',
        backgroundImage: `url(${hero})`,
        backgroundPosition: 'bottom center',
        backgroundSize: 'cover',
      }}
    >
      <div
        className="absolute inset-0 flex flex-col items-center px-4 md:px-0"
        style={{
          color: '#000',
          background:
            'linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0) 80%)',
          // background:
          // 'linear-gradient(to bottom, rgba(241, 195, 184, 1), rgba(241, 195, 184, 0) 80%)',
        }}
      >
        <div className="flex flex-col items-center mt-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 text-pinor-noir md:w-20 md:h-20"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M504.981 150.787a19.997 19.997 0 00-21.736-2.769l-109.444 53.28L271.109 82.896a19.998 19.998 0 00-30.218 0L138.199 201.297l-109.444-53.28a20.001 20.001 0 00-27.89 23.8l76 250A19.999 19.999 0 0096 436h320a19.998 19.998 0 0019.134-14.182l76-250a19.998 19.998 0 00-6.153-21.031zM401.175 396H110.823L52.472 204.052l82.022 39.931a20 20 0 0023.863-4.878L256 126.525l97.644 112.58a19.998 19.998 0 0023.862 4.878l82.022-39.931L401.175 396z"
            />
          </svg>
          <h1
            className="-mt-3 text-4xl font-bold tracking-tight text-gray-700 font-display md:text-6xl leading-0 text-shadow"
            style={{
              transform: 'rotate(-3deg)',
            }}
          >
            Montcastle Events
          </h1>
        </div>
        <div className="max-w-3xl mt-4 font-sans text-lg font-light text-gray-800 sm:text-xl max-auto">
          Tiny weddings by Montcastle Events is the easiest way to have a
          beautiful and affordable wedding around Charlotte! We’ve simplified
          the process so you can show up, show out, and live happily ever after.
        </div>
      </div>
    </div>

    <div className="py-12">
      <div className="max-w-3xl px-4 mx-auto">
        <div className="flex items-center justify-between border border-coconut">
          <div className="flex-1 p-6 pattern-bg-diamonds">
            <h3 className="text-4xl sm:text-6xl font-display text-shadow">
              Tiny
            </h3>
            <p className="text-base sm:text-lg">
              Up to 20 of your nearest and dearest
            </p>
          </div>
          <div className="flex items-center self-stretch justify-center w-40 bg-coconut">
            <span className="text-3xl">$4900</span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-4 sm:grid-cols-2">
          <ul>
            {tinyFeatures.map(feature => (
              <li className="flex items-start mt-3 first:mt-0">
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
                  {feature}
                </p>
              </li>
            ))}
          </ul>
          <Img
            fluid={data.tiny.childImageSharp.fluid}
            alt="Tiny wedding"
            className="hidden rounded shadow-lg sm:block"
          />
        </div>

        {/* Tiniest */}
        <div className="flex items-center justify-between mt-12 border border-coconut">
          <div className="flex-1 p-6 pattern-bg-diamonds">
            <h3 className="text-4xl sm:text-6xl font-display text-shadow">
              Tiniest
            </h3>
            <p className="text-base sm:text-xl">
              A fully styled elopement for you and yours
            </p>
          </div>
          <div className="flex items-center self-stretch justify-center w-40 bg-coconut">
            <span className="text-3xl">$500</span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-4 sm:grid-cols-2">
          <ul>
            {tiniestFeatures.map(feature => (
              <li className="flex items-start mt-3 first:mt-0">
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
                  {feature}
                </p>
              </li>
            ))}
          </ul>
          <div>
            <img
              src={tiniest}
              className="hidden w-full h-auto rounded shadow-lg sm:block"
            ></img>
          </div>
          {/* <Img
            fluid={data.tiny.childImageSharp.fluid}
            alt="Tiny wedding"
            className="rounded shadow-lg"
          /> */}
        </div>
      </div>
    </div>

    {/* <div className="max-w-4xl mx-auto mt-16">
      <Pricing />
    </div> */}

    {/* <div
      className="z-50 flex items-center justify-center px-4 pt-16 sm:px-0"
      style={{ backgroundColor: '#f1c3b8', color: '#18217d' }}
    >
      <div className="bg-green-500">
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 md:w-24 md:h-24"
            viewBox="0 0 512 512"
          >
            <path
              fill="#18217d"
              d="M504.981 150.787a19.997 19.997 0 00-21.736-2.769l-109.444 53.28L271.109 82.896a19.998 19.998 0 00-30.218 0L138.199 201.297l-109.444-53.28a20.001 20.001 0 00-27.89 23.8l76 250A19.999 19.999 0 0096 436h320a19.998 19.998 0 0019.134-14.182l76-250a19.998 19.998 0 00-6.153-21.031zM401.175 396H110.823L52.472 204.052l82.022 39.931a20 20 0 0023.863-4.878L256 126.525l97.644 112.58a19.998 19.998 0 0023.862 4.878l82.022-39.931L401.175 396z"
            />
          </svg>
          <h1 className="-mt-3 text-4xl font-bold tracking-tight md:text-6xl leading-0">
            Montcastle Events
          </h1>
        </div>
        <hr
          className="max-w-2xl mx-auto mt-4 mb-6"
          style={{ borderColor: '#18217d' }}
        />
        <div className="z-50 max-w-3xl font-sans font-light md:text-xl max-auto">
          Tiny weddings by Montcastle Events is the easiest way to have a
          beautiful and affordable wedding around Charlotte! We’ve simplified
          the process so you can show up, show out, and live happily ever after.
        </div>
      </div>
    </div>
    <div
      className="relative z-10 -mt-12"
      style={{ backgroundColor: '#f1c3b8', color: '#18217d' }}
    >
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="hero"
        imgStyle={{ objectPosition: 'bottom center' }}
        style={{ height: '70vh' }}
      />
      <div
        className="absolute inset-0 flex flex-col items-center"
        style={{
          background:
            'linear-gradient(to bottom, rgba(241, 195, 184, 1), rgba(241, 195, 184, 0) 80%)',
        }}
      />
    </div>
    <Pricing /> */}
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
