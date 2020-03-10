const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    // Create a slug based on the md file's name
    const slug = createFilePath({ node, getNode, basePath: `pages/blog` });

    // Programmatically add a 'slug' field to each node. This will be available as a
    // nested key under the fields key (i.e., node.fields.slug)
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Query the data that is mapped over to create each page
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  // For each node, create a page named after the slug using the BlogPost component, and
  // pass that component the value of the slug.
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available in page queries as GraphQL variables. That
        // means that in our BlogPost page/template component, we can access the slug in
        // the GraphQL query as `$slug`.
        slug: node.fields.slug,
      },
    });
  });
};
