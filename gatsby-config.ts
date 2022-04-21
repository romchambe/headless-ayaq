import type { GatsbyConfig } from "gatsby";

require("dotenv").config()

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Ayaq product page`,
    siteUrl: `https://www.ayaq.com`
  },
  plugins: [
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        resetCSS: true,
        isUsingColorMode: true,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Shopify",
        fieldName: "shopify",
        url: process.env.SHOPIFY_URL,
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN,
        },
      },
    },
    "gatsby-plugin-image", 
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }
  ]
};

export default config;
