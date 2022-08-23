module.exports = {
  siteMetadata: {
    title: `My Gatsby`,
    siteUrl: `https://www.yourdomain.tld`,
    languages: {
      langs: ["ua", "ru"],
      defaultLangKey: "ua",
    },
  },

  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-theme-i18n`,
      options: {
        defaultLang: `ua`,
        configPath: require.resolve(`./i18n/config.json`),
        prefixDefault: true,
      },
    },
  ],
};
