import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "./src/@chakra-ui/gatsby-plugin/theme"

export const wrapPageElement = ({ element }) => {
  return ( 
    <ChakraProvider theme={theme}>
      {element}
    </ChakraProvider>
  )
}