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
    </div>

    <div className="py-16 bg-coconut">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-pinor-noir">Tiny Weddings</h1>
        From adventure weddings in an airplane to beautiful ceremonies at the
        local art museum, our micro weddings vary widely in size and style. With
        the guest list ranging from as little as zero to as many as sixty
        people, our typical “microwedding” is perfect for a bride and groom who
        want to get away from the headaches and expenses of mainstream weddings.
      </div>
    </div>

    <div className="grid max-w-2xl grid-cols-1 gap-4 py-16 mx-auto md:grid-cols-3">
      <div className="w-full h-24 p-6 border rounded shadow-md border-coconut">
        Feature
      </div>
      <div className="w-full h-24 p-6 border rounded shadow-md border-coconut">
        Feature
      </div>
      <div className="w-full h-24 p-6 border rounded shadow-md border-coconut">
        Feature
      </div>
      <div className="w-full h-24 p-6 border rounded shadow-md border-coconut">
        Feature
      </div>
      <div className="w-full h-24 p-6 border rounded shadow-md border-coconut">
        Feature
      </div>
      <div className="w-full h-24 p-6 border rounded shadow-md border-coconut">
        Feature
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
