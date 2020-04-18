module.exports = {
  siteMetadata: {
    title: `Montcastle Events`,
    description: `A microwedding planner based in Charlotte, North Carolina.`,
    author: `Mary Katherine`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        tailwind: true,
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Montcastle Events`,
        short_name: `Montcastle Events`,
        start_url: `/`,
        background_color: `#fde8e8`,
        theme_color: `#fde8e8`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
