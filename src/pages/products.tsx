import { Flex, Image, Wrap, WrapItem, Text } from "@chakra-ui/react"
import * as React from "react"
import "@fontsource/readex-pro"
import { graphql, Link } from 'gatsby'

const ProductsPage = ({ data }: any) => {
  const { products } = data.shopify

  return (
    <Wrap spacing={8} justify="center">
      {products.edges.map(
        ({ node }: any) => {
          const image = node.images.edges[0].node
          return (
            <WrapItem>
              <Link to={`/products/${node.handle}`}>
                <Flex 
                  direction="column" 
                  justify="center" 
                  shadow="md"
                  _hover={{
                    shadow: "lg"
                  }}
                  w={300}
                >
                  <Image 
                    src={image.src} 
                    h={300}
                    w={300}
                  />
                  <Text py={6} px={4} textAlign="center">
                    {node.title}  
                  </Text>
                </Flex>
              </Link>
            </WrapItem>
          )
        }
      )}
    </Wrap>
  )
}


export const query = graphql`
query {
  shopify {
    products(first: 100) {
      edges {
        node {
          id
          title
          handle
          availableForSale
          images(first: 1) {
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

export default ProductsPage
