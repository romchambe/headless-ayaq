export const allProducts = `
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
`