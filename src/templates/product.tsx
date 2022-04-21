import { Box, Flex, Grid, HStack, Image } from "@chakra-ui/react"
import * as React from "react"

const ProductTemplate = ({ pageContext }: {pageContext: any}) => {
  const { product } = pageContext
  const { title, description, images } = product

  return (
    <HStack gap={8} alignItems="flex-start">
      <Grid templateColumns='repeat(2, 1fr)' gap={4}>
        {images.edges.map(({ node }: any) => <Image src={node.src} key={node.id} />)}
      </Grid>
      <Flex direction="column" maxW={{ base: "100%", md: "30%"}}>
        <Box fontSize="xl" fontWeight="700">
          {title}
        </Box>
        <Box>
          {description.split('####')[0]}
        </Box>
      </Flex>
    </HStack>
  )
}

export default ProductTemplate