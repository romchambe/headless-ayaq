import * as React from "react"
import { ChakraProvider, Flex } from "@chakra-ui/react"
import theme from "./src/@chakra-ui/gatsby-plugin/theme"

export const wrapPageElement = ({ element }) => {
  return ( 
    <ChakraProvider theme={theme}>
      <Flex mt={16} px={{ base: 8, sm: 12, md: 24, lg: 40 }}>
        {element}
      </Flex>
    </ChakraProvider>
  )
}