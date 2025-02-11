import { Box, Flex, Link, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import React from 'react';

const Links = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      {/* Desktop View */}
      <Flex gap={6} display={{ base: 'none', md: 'flex' }}>
        <NavLinks />
      </Flex>

      {/* Mobile View - Hamburger Menu */}
      <Box display={{ base: 'block', md: 'none' }}>
        <IconButton
          icon={<HamburgerIcon />}
          variant="outline"
          colorScheme="blue"
          onClick={onOpen}
        />
        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Flex flexDirection="column" gap={4}>
                <NavLinks onClose={onClose} />
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Box>
  );
};


const NavLinks = ({ onClose }) => (
  <>
    {[
      { name: 'Home', href: '/' },
      { name: 'About RSUBS', href: '/about' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Portal', href: '/portal' },
      // { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Alumni', href: '/alumni' }
    ].map((link) => (
      <Link
        key={link.name}
        href={link.href}
        fontSize="md"
        fontWeight="medium"
        color="black"
        _hover={{ color: 'blue.600' }}
        onClick={onClose} 
      >
        {link.name}
      </Link>
    ))}
  </>
);

export default Links;
