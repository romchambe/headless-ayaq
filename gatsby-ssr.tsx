import "@fontsource/readex-pro"
import * as React from "react"
import { ChakraProvider, Flex } from "@chakra-ui/react"
import theme from "./src/@chakra-ui/gatsby-plugin/theme"
import Nav from "./src/layouts/Nav"

export const wrapPageElement = ({ element }) => {
  return ( 
    <ChakraProvider theme={theme}>
      <Flex direction="column">
        <Nav />
        <Flex 
          px={{ base: 8, sm: 12, md: 16 }}
          mt={8}
          mb={16}
        >
          {element}
        </Flex>
      </Flex>
    </ChakraProvider>
  )
}