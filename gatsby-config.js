module.exports = {
  siteMetadata: {
    title: `Anthony Animba | Freelance Designer and Developer`,
    description: `Freelance web designer and developer based in London`,
    author: `@anthonyanimba`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `anthony-animba-portfolio`,
        short_name: `Anthony Animba Portfolio`,
        description: `Freelance web designer and developer based in London`,
        start_url: `/`,
        background_color: `#131313`,
        display: `standalone`,
        icon: `static/logo192.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/img`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`manrope\:200,300,400`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-Q01T2ZVXZ3"],
        pluginConfig: {
          head: true,
        },
      },
    },
  ],
}
