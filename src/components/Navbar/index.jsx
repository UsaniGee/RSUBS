import React from 'react';
import { Box, Flex, Button, Spacer } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import Links from './Links';


const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Box bg="white" px={{md:5, base: 3}} py={4} boxShadow="sm">
      <Flex align="center">
        {/* Logo Section */}
       <Logo />

        <Spacer />

        {/* Navigation Links */}
        <Links />
        <Spacer display={{ base: 'none', md: 'flex' }} />

        {/* "Portal" Button */}
        <Button 
        display={{ base: 'none', md: 'flex' }}
          colorScheme="blue" 
          onClick={() => navigate('/create-profile')} 
          borderRadius="md"
        >
          Apply
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
