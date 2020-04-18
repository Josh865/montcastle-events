import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Package from '../components/Package';

import charming from '../images/charming.jpg';
import cheery from '../images/cheery.jpg';
import cozy from '../images/cozy.jpg';
import elope from '../images/elope.jpg';
import mary from '../images/mary.jpg';

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
    image: charming,
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
    image: cheery,
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
    image: cozy,
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
    image: elope,
  },
];

const Index = ({ data }) => (
  <>
    <div className="py-8">
      <h1
        className="text-6xl text-center font-display"
        style={{ color: '#587795' }}
      >
        Montcastle Events
      </h1>
    </div>

    {/* Mobile hero */}
    <div className="block md:hidden">
      <Img fluid={data.image1.childImageSharp.fluid} alt="Bouquet of flowers" />
      <div className="relative w-5/6 px-6 py-8 mx-auto -mt-20 text-lg leading-loose text-center text-gray-600 bg-red-100">
        Planning your wedding should be as easy as being in love. Now it is!
        Montcastle Events has turned the planning process upside down and
        changed what used to be an overwhelming process into one that&apos;s{' '}
        <b>fun</b>, <b>simple</b>, and <b>affordable</b>!
      </div>
    </div>

    {/* Desktop hero */}
    <div className="hidden px-6 md:block">
      <div className="relative max-w-6xl mx-auto">
        <div className="w-3/4 ml-auto shadow-md">
          <Img
            fluid={data.image1.childImageSharp.fluid}
            alt="Bouquet of flowers"
          />
        </div>
        <div className="absolute w-1/2 p-10 text-lg leading-loose text-gray-500 bg-red-100 shadow-lg pin-middle">
          Planning your wedding should be as easy as being in love. Now it is!
          Montcastle Events has turned the planning process upside down and
          changed what used to be an overwhelming process into one that&apos;s{' '}
          <b>fun</b>, <b>simple</b>, and <b>affordable</b>!
        </div>
      </div>
    </div>

    <div className="max-w-2xl px-6 mx-auto my-12 md:px-0">
      <h2
        className="mb-8 text-5xl font-bold leading-tight text-center md:font-normal font-display md:text-6xl"
        style={{ color: '#587795' }}
      >
        So, how does this work?
      </h2>
      <p className="text-lg leading-loose text-gray-600">
        All of our packages include everything you need for a beautiful
        celebration with forty of your guests. We&apos;ve partnered with some
        amazing vendors including{' '}
        <a
          href="https://getcozybars.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-400 underline transition duration-75 hover:text-blue-800 transition-color"
        >
          Bubbles and Brews
        </a>{' '}
        mobile bar to add that extra touch of amazing to your day!
      </p>
    </div>

    <div className="max-w-full mx-auto">
      {packages.map((p, index) => (
        <Package
          name={p.name}
          price={p.price}
          features={p.features}
          image={p.image}
          index={index}
        />
      ))}
    </div>

    <div className="py-16 bg-blue-100">
      <div className="max-w-2xl px-6 mx-auto mb-8 md:px-0">
        <h2
          className="mb-8 text-5xl font-bold leading-none text-center font-display md:text-6xl md:font-normal"
          style={{ color: '#587795' }}
        >
          Who am I?
        </h2>
        <p className="text-lg leading-loose text-gray-500">
          I&apos;m Mary Katherine, lover of happily ever afters and the little
          things. I&apos;ve had the opportunity to work with some of the premier
          vendors in the South and am so eager to bring what I know to your
          special day. I can&apos;t wait to dream with you. Let&apos;s talk
          soon!
        </p>
      </div>

      <div className="relative flex flex-col max-w-5xl mx-auto md:justify-end md:flex-row md:h-600">
        <div className="w-full p-6 text-base leading-loose text-gray-600 bg-white border-2 border-red-200 shadow-lg md:top-0 md:left-0 md:text-lg md:absolute md:max-w-xl md:mt-12">
          My gift in life is to serve, my passion is to create and event
          planning meets at the intersection of the two.
        </div>
        <div className="max-w-md mx-auto mt-6 md:max-w-full md:mx-0 md:w-2/3 md:mt-0">
          <img
            src={mary}
            className="object-contain object-top w-full h-full"
            alt="Mary Katherine"
          />
          {/* <Img
              fluid={data.image2.childImageSharp.fluid}
              alt="Mary Katherine"
              imgStyle={{ objectFit: 'contain' }}
            /> */}
        </div>
      </div>
    </div>

    <div className="max-w-2xl px-6 mx-auto my-12 md:px-0">
      <h2
        className="mb-8 text-5xl font-bold leading-tight text-center md:font-normal md:text-6xl font-display"
        style={{ color: '#587795' }}
      >
        Let&apos;s get in touch!
      </h2>
      <p className="text-lg text-gray-500">
        Ready to do this thing? Let me know and we&apos;ll get the ball rolling
        on your perfect day in no time!
      </p>
      <div className="my-6">
        <label className="block">
          <span className="text-gray-500">Name</span>
          <input
            className="block w-full mt-1 form-input"
            placeholder="Jane Doe"
          />
        </label>

        <label className="block mt-4">
          <span className="text-gray-500">Email</span>
          <input
            className="block w-full mt-1 form-input"
            placeholder="jane@example.com"
          />
        </label>

        <div className="block mt-4">
          <span className="text-gray-500">
            Which package are you interested in?
          </span>
          <div className="mt-2 ml-1">
            <div>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="radio"
                  value="1"
                  checked
                />
                <span className="ml-2">Charming</span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="radio"
                  value="2"
                />
                <span className="ml-2">Cheery</span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="radio"
                  value="3"
                />
                <span className="ml-2">Cozy</span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="radio"
                  value="3"
                />
                <span className="ml-2">Elope</span>
              </label>
            </div>
          </div>
        </div>

        <label className="block mt-4">
          <span className="text-gray-500">
            What&apos;s your vision and style?
          </span>
          <textarea
            className="block w-full mt-1 form-textarea"
            rows="3"
            placeholder="Rustic and intimate"
          />
        </label>
      </div>
    </div>
  </>
);
export default Index;

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "bouquet.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 865) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    image2: file(relativePath: { eq: "mary.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
