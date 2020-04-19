import * as React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Package from '../components/Package';
import SEO from '../components/SEO';

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
      'Bubbles and Brews (alcohol not included)',
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
      'Bubbles and Brews (alcohol not included)',
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
      'Bubbles and Brews (alcohol not included)',
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

const Index = ({ data }) => {
  const [selectedPackage, setSelectedPackage] = React.useState(
    packages[0].name
  );

  return (
    <>
      <SEO title="Home" />

      <div className="px-6 py-8 md:px-0">
        <h1>
          <div className="text-5xl leading-none text-center md:text-6xl font-display text-navy">
            Montcastle Events
          </div>
          <div className="text-lg text-center text-gray-600">
            A wedding and event planner serving Charlotte, NC and beyond
          </div>
        </h1>
      </div>

      {/* Mobile hero */}
      <div className="block md:hidden">
        <Img
          fluid={data.image1.childImageSharp.fluid}
          alt="Bouquet of flowers"
        />
        <div className="relative w-5/6 px-6 py-8 mx-auto -mt-20 text-lg leading-loose text-center text-gray-600 bg-red-100">
          Planning your wedding should be as easy as being in love. Now it is!
          Montcastle Events, based in Charlotte, NC, has turned the planning
          process upside down and changed what used to be an overwhelming
          process into one that&apos;s <b>fun</b>, <b>simple</b>, and{' '}
          <b>affordable</b>!
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
          <div className="absolute w-1/2 p-10 text-lg leading-loose text-gray-600 bg-red-100 shadow-lg pin-middle">
            Planning your wedding should be as easy as being in love. Now it is!
            Montcastle Events, based in Charlotte, NC, has turned the planning
            process upside down and changed what used to be an overwhelming
            process into one that&apos;s <b>fun</b>, <b>simple</b>, and{' '}
            <b>affordable</b>!
          </div>
        </div>
      </div>

      <div className="max-w-2xl px-6 mx-auto my-12 md:px-0">
        <h2 className="mb-8 text-5xl font-bold leading-tight text-center text-navy md:font-normal font-display md:text-6xl">
          So, how does this work?
        </h2>
        <p className="text-lg leading-loose text-gray-600">
          All of our packages include everything you need for a beautiful
          celebration with forty of your guests. We&apos;ve partnered with some
          amazing vendors, including{' '}
          <a
            href="https://getcozybars.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 underline transition duration-75 hover:text-blue-800 transition-color"
          >
            Bubbles and Brews
          </a>{' '}
          mobile bar, to add that extra touch of amazing to your day!
        </p>
      </div>

      <div className="max-w-full mx-auto">
        {packages.map((pkg, index) => (
          <Package
            key={pkg.name}
            name={pkg.name}
            price={pkg.price}
            features={pkg.features}
            image={pkg.image}
            index={index}
            setSelectedPackage={setSelectedPackage}
          />
        ))}
      </div>

      <div className="py-16 bg-blue-100">
        <div className="max-w-2xl px-6 mx-auto mb-8 md:px-0">
          <h2 className="mb-8 text-5xl font-bold leading-none text-center text-navy font-display md:text-6xl md:font-normal">
            Who am I?
          </h2>
          <p className="text-lg leading-loose text-gray-600">
            I&apos;m Mary Katherine, lover of happily ever afters and the little
            things. I&apos;ve had the opportunity to work with some of the
            premier vendors in the South and am so eager to bring what I know to
            your special day. I can&apos;t wait to dream with you. Let&apos;s
            talk soon!
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
          id="getInTouch"
          className="mb-8 text-5xl font-bold leading-tight text-center text-navy md:font-normal md:text-6xl font-display"
        >
          Let&apos;s get in touch!
        </h2>
        <p className="text-lg text-gray-600">
          Ready to do this thing? Let me know and we&apos;ll get the ball
          rolling on your perfect day in no time!
        </p>
        <form
          action="/success"
          name="contact"
          className="my-6"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <label className="hidden">
            Don&apos;t fill this out if you&apos;re human:{' '}
            <input name="bot-field" />
          </label>
          <label className="block">
            <span className="text-gray-600">Name</span>
            <input
              name="name"
              className="block w-full mt-1 form-input"
              placeholder="Jane Doe"
            />
          </label>

          <label className="block mt-4">
            <span className="text-gray-600">Email</span>
            <input
              name="email"
              className="block w-full mt-1 form-input"
              placeholder="jane@example.com"
            />
          </label>

          <div className="block mt-4">
            <span className="text-gray-600">
              Which package are you interested in?
            </span>
            <div className="mt-2 ml-1">
              {packages.map(pkg => (
                <div key={`radio_${pkg.name}`}>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="package"
                      value={pkg.name}
                      checked={selectedPackage === pkg.name}
                      onChange={() => setSelectedPackage(pkg.name)}
                    />
                    <span className="ml-2 text-gray-800">{pkg.name}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <label className="block mt-4">
            <span className="text-gray-600">
              What&apos;s your vision and style?
            </span>
            <textarea
              name="notes"
              className="block w-full mt-1 form-textarea"
              rows="3"
              placeholder="Rustic and intimate"
            />
          </label>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="px-4 py-2 text-lg text-white transition duration-150 bg-blue-700 rounded hover:bg-blue-800 transition-color"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="p-10 text-center bg-gray-200 md:p-16">
        <span className="text-gray-500">
          &copy; {new Date().getFullYear()} Montcastle Events
        </span>
      </div>
    </>
  );
};

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
