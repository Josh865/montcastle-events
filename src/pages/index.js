import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import SEO from '../components/seo';

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" />
    <div className="relative">
      <div className="absolute inset-x-0 top-0 z-10 flex items-center px-12 py-6 bg-white">
        {/* <h1 className="text-xl font-bold text-pinor-noir">Tiny Weddings NC</h1> */}
        <ul className="flex items-center justify-between w-full">
          <li className="text-sm tracking-wide text-gray-800 uppercase">
            <Link to="/blog" className="text-black hover:underline">
              Blog
            </Link>
          </li>
          <li className="text-sm tracking-wide text-gray-800 uppercase">
            Services
          </li>
          <li className="text-sm tracking-wide text-gray-800 uppercase">
            Pricing
          </li>
          <li className="text-sm tracking-wide text-gray-800 uppercase">
            Packages
          </li>
          <li className="text-sm tracking-wide text-gray-800 uppercase">
            Testimonials
          </li>
        </ul>
      </div>
      <div
        className="absolute z-10 text-6xl font-bold tracking-tighter opacity-75 font-display"
        style={{
          top: '120px',
          left: '50%',
          transform: 'translateX(-50%) rotate(-2deg)',
        }}
      >
        Tiny Weddings NC
      </div>
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="hero"
        imgStyle={{ objectPosition: 'bottom center' }}
        style={{ height: '70vh' }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(255,255,255,0) 20%, rgba(255,255,255,1) 90%)',
        }}
      />
    </div>

    <div className="max-w-2xl mx-auto text-xl font-light text-gray-800">
      From adventure weddings in an airplane to beautiful ceremonies at the
      local art museum, our micro weddings vary widely in size and style. With
      the guest list ranging from as little as zero to as many as sixty people,
      our typical “microwedding” is perfect for a bride and groom who want to
      get away from the headaches and expenses of mainstream weddings.
    </div>

    <div className="py-16 my-16 bg-coconut">
      <div className="grid max-w-4xl grid-cols-3 gap-4 mx-auto">
        <div>
          <h3 className="flex items-end h-12 pl-6 mb-2 text-3xl font-light tracking-wide uppercase">
            <span>Tiny</span>
          </h3>
          <ul className="p-6 bg-white rounded shadow-md">
            <li>Up to 40 guests</li>
            <li>Officate</li>
            <li>Professional Photography</li>
            <li>Bouquet</li>
            <li>Boutonniere</li>
            <li>Cake for 40</li>
            <li>Grazing Table</li>
            <li>Bartender</li>
            <li>Non alcoholic beverages</li>
            <li>Ceremony and first dance music</li>
            <li>Curated venue list</li>
            <li>8 hours of consultation</li>
            <li>Fully styled décor</li>
            <li>* Venue is a separate fee</li>
            <li>* Alcohol not included</li>
          </ul>
        </div>

        <div>
          <h3 className="flex items-end h-12 pl-6 mb-2 text-2xl font-light tracking-wide uppercase">
            <span>Tinier</span>
          </h3>
          <ul className="p-6 bg-white rounded shadow-md">
            <li>Up to 20 guests</li>
            <li>Officiate</li>
            <li>Professional Photography</li>
            <li>Bouquet</li>
            <li>Boutonniere</li>
            <li>Cake for 20</li>
            <li>Grazing table</li>
            <li>Non alcoholic beverages</li>
            <li>Curated venue list</li>
            <li>5 hours of consultation</li>
            <li>Day of Coordinator</li>
            <li>Fully styled décor</li>
            <li>* Venue is a separate fee</li>
          </ul>
        </div>

        <div>
          <h3 className="flex items-end h-12 pl-6 mb-2 text-xl font-light tracking-wide uppercase">
            <span>Tiniest</span>
          </h3>
          <ul className="p-6 bg-white rounded shadow-md">
            <li>Week day only</li>
            <li>Bride and Groom</li>
            <li>Officiate</li>
            <li>Professional photography |</li>
            <li>Bouquet</li>
            <li>Boutonniere</li>
            <li>Cake and sparkling wine for two</li>
            <li>Commitment Ceremony</li>
            <li>1 hr. consultation</li>
          </ul>
        </div>
      </div>
    </div>
  </>
);

export default IndexPage;

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
