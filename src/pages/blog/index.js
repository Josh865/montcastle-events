import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../../components/Layout';
import Image from '../../components/image';
import SEO from '../../components/seo';

const BlogIndexPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <h1>Ye Olde Test Blog</h1>
    <ul>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <li key={node.id}>
          <Link to={node.fields.slug}>
            {node.frontmatter.title} - {node.frontmatter.date}
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

export default BlogIndexPage;

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: ASC }) {
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
