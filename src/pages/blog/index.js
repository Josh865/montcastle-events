import React from 'react';
import { graphql, Link } from 'gatsby';

// import Layout from '../../components/Layout';
// import Image from '../../components/Image';
import SEO from '../../components/SEO';

const BlogIndexPage = ({ data }) => (
  <>
    <SEO title="Blog" />

    <h1>Ye Olde Test Blog</h1>
    <ul>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <li key={node.id}>
          <Link
            to={node.fields.slug}
            className="text-blue-600 hover:text-black"
          >
            {node.frontmatter.title} - {node.frontmatter.date}
          </Link>
        </li>
      ))}
    </ul>
  </>
);

export default BlogIndexPage;

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          html
          id
          frontmatter {
            title
            date
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;
