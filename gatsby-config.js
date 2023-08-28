module.exports = {
  siteMetadata: {
    siteUrl: `https://tijerinafedlaw.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        createLinkInHead: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-00C6NFXBXP",
        head: true,
        siteSpeedSampleRate: 10,
        anonymize: true,
      },
    },
  ],
};
