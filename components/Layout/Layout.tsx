import Navbar from './Navbar'
import Footer from './Footer'
import { Box, Center, Container, Flex, VStack } from '@chakra-ui/react'

export default function Layout({ children }) {
  return (
    <Flex margin="-0.5" alignItems="center" flexDir="column"  height="100%" width="100vw" minW="100%">
      <Navbar />
        <VStack marginTop="50px" minHeight="75vh" maxWidth="1440px">
          {children}
        </VStack>
      <Footer />
    </Flex>
  )
}