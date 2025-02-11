import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Icon from '../../../assets/svg/RSUBS_LOGO.svg'; // Adjust path accordingly

const Logo = () => {
  return (
     <Flex align="center">
              <Image src={Icon} alt="RSUBS Logo" w={{md: "300px", base: "200px"}} h="80px" objectFit="contain" />
              {/* <Box ml={3}> */}
                {/* <Text fontSize="xl" fontWeight="bold" color="#1A365D">
                  RIVERS STATE UNIVERSITY
                </Text>
                <Text fontSize="lg" fontWeight="bold" color="#1A365D">
                  BUSINESS SCHOOL
                </Text>
                <Text fontSize="sm" color="gray.500">
                  Empowering Global Leaders
                </Text> */}
              {/* </Box> */}
            </Flex>
  )
}

export default Logo
