import { Flex } from "@chakra-ui/react"
import * as React from "react"
import "@fontsource/readex-pro"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Flex h="100vh" w="100vw" mt={16} fontWeight="700">
      <Link to="/products">
        Voir nos produits
      </Link>
    </Flex>
  )
}

export default IndexPage
