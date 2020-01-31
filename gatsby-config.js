module.exports = {
  siteMetadata: {
    title: 'Build UX',
    siteUrl: 'https://www.buildux.co',
  },
  plugins: [
    // Head
    'gatsby-plugin-react-helmet',
    // Styles
    'gatsby-plugin-styled-components',
    // Markdown
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    // JavaScript Pages
    'gatsby-transformer-javascript-frontmatter',
    // Images
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 604,
              linkImagesToOriginal: false,
              withWebp: true,
            },
          },
        ],
      },
    },
    // SEO
    'gatsby-plugin-sitemap',
    // PWA
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Build UX',
        short_name: 'Build UX',
        start_url: '/',
        background_color: '#222224',
        theme_color: '#3a3a3d',
        display: 'minimal-ui',
        icon: 'src/assets/favicon/build-ux-icon.png',
      },
    },
    `gatsby-plugin-offline`,
  ],
};
