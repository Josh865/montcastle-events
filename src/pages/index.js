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
        <h1 className="text-xl font-bold text-white">Site Title</h1>
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

    <div className="max-w-2xl mx-auto mt-6 border">Content</div>
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
