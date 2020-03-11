import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import SEO from '../components/seo';

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" />
    <div className="relative">
      <div
        className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 py-6"
        style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
      >
        <h1 className="text-xl font-bold text-white">Tiny Weddings NC</h1>
        <ul className="flex items-center">
          <li className="mr-4">Blog</li>
          <li className="mr-4">Services</li>
          <li>Pricing</li>
        </ul>
      </div>
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="hero"
        imgStyle={{ objectPosition: 'bottom center' }}
        style={{ height: '70vh' }}
      />
    </div>

    <div className="py-16 bg-red-200">
      <div className="max-w-2xl mx-auto">
        From adventure weddings in an airplane to beautiful ceremonies at the
        local art museum, our micro weddings vary widely in size and style. With
        the guest list ranging from as little as zero to as many as sixty
        people, our typical “microwedding” is perfect for a bride and groom who
        want to get away from the headaches and expenses of mainstream weddings.
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
