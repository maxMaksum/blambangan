module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['media.graphcms.com', 'fakestoreapi.com', "links.papareact.com"],
  },
  env: {
    URL: process.env.ENDPOINT,
    TOKEN:process.env.GRAPH_CMS_TOKEN,
  },

    // env: {
    //     SHOPIFY_STORE_FRONT_ACCESS_TOKEN: process.env.SHOPIFY_STORE_FRONT_ACCESS_TOKEN,
    //     SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN
    // },
  
}
