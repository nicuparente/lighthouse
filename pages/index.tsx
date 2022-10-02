import { Box, Heading, Flex, Center, Button, Text, AspectRatio, CircularProgress, Avatar, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import useSWR from 'swr'
import NextLink from "next/link";


import LightHouseLogo from '../public/Lighthouse-Connections-Logo.png'


const fetcher = (url: string) => fetch(url).then(res => res.json());


export default function Home() {
  const { data: userConnections, isValidating, error } = useSWR('/api/connections?featured=5', fetcher);

  return (
    <>
      <Head>
        <title>Lighthouse</title>
        <meta name="description" content="Nicu Parente" />
      </Head>

      <VStack minW="100%" maxW="1080px">
          <Image
            src={LightHouseLogo}
            alt="Lighthouse Logo"
          />
          
            {isValidating ? 
                <Center>
                    <CircularProgress  isIndeterminate color='yellow.500'/> 
                </Center>
                :
                <Flex width="inherit" flexDir="column" alignItems="center" minWidth="290px" maxWidth="50vw" >
                    <Heading marginY="20px" size="md" textAlign="center" textOverflow="clip">Here are some of our members that are ready to chat!</Heading>
                     {userConnections.userProfiles.map((connectionProfile,index) =>{
                        return <Flex overflowWrap="break-word" key={index} width="90%" marginTop="20px" p='5' maxWidth="720px" borderWidth="1px" >
                          <Flex  flexDirection="column" marginLeft="10px" maxWidth="90%">
                            <Flex alignItems="center">
                              <Avatar size='md' name={`${connectionProfile.firstName} ${connectionProfile.lastName}`} src={connectionProfile.profileImage} />
                              <Box marginLeft="10px">
                                <Heading size="md"  lineHeight="short">
                                  {connectionProfile.firstName} {connectionProfile.lastName}
                                </Heading>
                              </Box>
                            </Flex>
                              <Text marginY="20px" fontSize="lg" fontWeight="semibold" lineHeight="short">
                                  About Me
                              </Text>
                              <Text marginY="5px"  width="100%">
                               {connectionProfile.aboutMe}
                              </Text>
                        </Flex>  
                      </Flex>
                      })
                     }

                <Center>
                  <NextLink href="/connect">
                    <Button margin="20px" width="200px" size="lg" colorScheme="yellow" >
                      Show More
                    </Button>
                  </NextLink> 
                </Center>
               
              </Flex>
            }          
      </VStack>
    </>
  );
}
