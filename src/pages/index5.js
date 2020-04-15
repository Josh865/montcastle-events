import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Package from '../components/Package';

import hero from '../images/bouquet.jpg';
import tiny from '../images/tiny.jpg';
import tiniest from '../images/tiniest.jpg';
import flowers from '../images/flowers.jpg';
import image01 from '../images/01.jpg';
import image02 from '../images/02.jpg';
import mary from '../images/mary.webp';

const packages = [
  {
    name: 'Charming',
    price: '$6000',
    features: [
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
    ],
    image: image01,
  },
  {
    name: 'Cheery',
    price: '$5000',
    features: [
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
    ],
    image: image02,
  },
  {
    name: 'Cozy',
    price: '$4000',
    features: [
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
    ],
    image: tiniest,
  },
  {
    name: 'Elope',
    price: '$600 and up',
    features: [
      'Full coordination',
      'Location list',
      'Floral',
      'Photography for 1.5 hours',
      'Cupcakes for seven',
    ],
    image: tiny,
  },
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

    <div className="max-w-3xl px-6 py-16 mx-auto text-lg font-thin leading-loose text-gray-500 md:text-xl md:px-0">
      Planning your wedding should be as easy as being in love. Now it is!
      Montcastle Events has turned the planning process upside down and changed
      what used to be an overwhelming process into one that's fun, simple, and
      affordable!
    </div>

    {packages.map((p, index) => (
      <>
        <Package
          name={p.name}
          price={p.price}
          features={p.features}
          image={p.image}
          index={index}
        />

        {index !== packages.length - 1 && <div className="h-1" />}
      </>
    ))}

    <div className="py-12 mt-12">
      <div className="max-w-2xl px-6 mx-auto mb-12 text-xl italic font-thin text-gray-600 md:text-2xl md:px-0">
        My gift in life is to serve, my passion is to create and event planning
        meets at the intersection of the two.
      </div>
      <div
        className="relative flex flex-col max-w-5xl mx-auto md:justify-end md:flex-row"
        style={{ height: '500px' }}
      >
        <div className="top-0 left-0 w-full p-6 text-base text-gray-600 bg-white border-2 shadow-lg md:text-lg border-pinor-noir md:absolute md:max-w-xl md:mt-12">
          I&apos;m Mary Katherine, lover of happily ever afters and the little
          things. I&apos;ve had the opportunity to work with some of the premier
          vendors in the South and am so eager to bring what I know to your
          special day. I can&apos;t wait to dream with you. Let&apos;s talk
          soon!
        </div>
        <div className="w-full md:w-2/3">
          <img
            src={mary}
            className="object-contain object-top w-full h-full"
            alt="Mary Katherine"
          />
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
