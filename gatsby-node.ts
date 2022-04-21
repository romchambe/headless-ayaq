const path = require(`path`)

export const createPages = async ({ graphql, actions }: any) => {
  const { createPage } = actions
  
  // Query for all products in Shopify
  const { data } = await graphql(`
    query {
      shopify {
        products(first: 100) {
          edges {
            node {
              id
              title
              description
              handle
              images(first: 10) {
                edges {
                  node {
                    id
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  // Iterate over all products and create a new page using a template
  // The product "handle" is generated automatically by Shopify
  data.shopify.products.edges.forEach(({ node }) => {
    createPage({
      path: `/products/${node.handle}`,
      component: path.resolve(`./src/templates/product.tsx`),
      context: {
        product: node,
      },
    })
  })
}