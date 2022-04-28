import { Icon, Flex, Link as ChakraLink } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { Link } from 'gatsby';
import { FiShoppingBag } from "@react-icons/all-files/fi/FiShoppingBag"
import {FiMapPin} from "@react-icons/all-files/fi/FiMapPin"

const Nav = () => {
  return (
    <Flex 
      justify="space-between" 
      align="center"
      h={16} 
      px={{ base: 8, sm: 12, md: 16 }}
      pos="sticky"
      top={0} 
      bg="white" 
      shadow="lg" 
    >
      <Link to="/products">
        <div>
          Collections
        </div>
      </Link>
      
      <StaticImage 
        src="../images/logo.png"
        alt="logo Ayaq"
        height={20}
      />
      <Flex>
        <ChakraLink href="https://ayaq.com/pages/stores" mr={6}>
          <Icon as={FiMapPin} h={5} w={5} />
        </ChakraLink> 
        <ChakraLink href="https://ayaq.com/cart">
          <Icon as={FiShoppingBag} h={5} w={5} />
        </ChakraLink>
      </Flex>
    </Flex>
  )
}

export default Nav