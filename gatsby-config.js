module.exports = {
  siteMetadata: {
    title: `Digital-агентство "BPM-Cloud": разработка и продвижение сайтов`,
    description: `Digital-агентство полного цикла предлагает разработку, дизайн, сопровождение и продвижение сайтов 🏆 Поднимем сайт в ТОП выдачи`,
    siteUrl: `https://bpm-cloud.by/`,
    author: `@bpm-cloud.by`,
  },
  plugins: [{
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `Manrope: 200,300,400,500,700,800` // you can also specify font weights and styles
      ],
      display: 'swap'
    },
    resolve: 'gatsby-source-wordpress',
    options: {
      url: process.env.WPGRAPHQL_URL || `https://wp-bpm-minsk.bpm-cloud.by/graphql`,
      schema: {
        requestConcurrency: 5, // currently set to 15
        previewRequestConcurrency: 2, // currently set to 5
      },
    },
  },
  "gatsby-plugin-image",
  "gatsby-plugin-sharp",
  "gatsby-transformer-sharp",
  "gatsby-plugin-sass",
  "gatsby-plugin-sitemap",
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-transformer-remark", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};