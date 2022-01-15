module.exports = {
  siteMetadata: {
    title: `Anthony Animba | Freelance Designer and Developer`,
    description: `Freelance web designer and developer based in London`,
    author: `@anthonyanimba`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/img`,
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
