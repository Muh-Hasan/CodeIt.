module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `08hqep1db0q4`,
        accessToken: `BlRwAJXFdh_SvlShINOXCMV8kMtryFTGUTeTxb9Ipz0`,
      },
    },
  ],
};