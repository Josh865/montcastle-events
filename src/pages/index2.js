import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Pricing from '../components/PricingTwo';

import hero from '../images/hero.jpg';

const Index2 = ({ data }) => (
  <>
    <div
      className="relative"
      style={{
        height: '70vh',
        backgroundImage: `url(${hero})`,
        backgroundPosition: 'bottom center',
        backgroundSize: 'cover',
      }}
    >
      <div
        className="absolute inset-0 flex flex-col items-center px-4 md:px-0"
        style={{
          color: '#18217d',
          background:
            'linear-gradient(to bottom, rgba(241, 195, 184, 1), rgba(241, 195, 184, 0) 80%)',
        }}
      >
        <div className="flex flex-col items-center mt-8">
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
          <h1 className="-mt-3 font-serif text-4xl font-bold tracking-tight md:text-6xl leading-0">
            Montcastle Events
          </h1>
        </div>
        <hr
          className="w-full max-w-2xl mx-auto mt-4 mb-6"
          style={{ borderColor: 'rgba(24, 33, 125, 0.3)' }}
        />
        <div className="max-w-3xl font-sans text-xl font-light max-auto">
          Tiny weddings by Montcastle Events is the easiest way to have a
          beautiful and affordable wedding around Charlotte! We’ve simplified
          the process so you can show up, show out, and live happily ever after.
        </div>
      </div>
    </div>

    <div className="max-w-4xl mx-auto mt-16">
      <Pricing />
    </div>

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
    file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
