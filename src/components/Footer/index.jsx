import { Box, Flex, Text, Link, Input, Button, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="blue.900" color="white" py={10} px={{ base: 5, md: 20 }}>
      {/* Top Contact Info */}
      <Flex justify="space-between" wrap="wrap" textAlign="center" pb={6}>
        <HStack spacing={2}>
          <Icon as={FaMapMarkerAlt} />
          <Text>Nkpolu-Oroworukwo, P.M.B. 5080, Port Harcourt, Rivers State, Nigeria. </Text>
        </HStack>
        <HStack spacing={2}>
          <Icon as={FaPhoneAlt} />
          <Text>+234-(0)-803 312 9995</Text>
        </HStack>
        <HStack spacing={2}>
          <Icon as={FaEnvelope} />
          <Text>info@bs.rsu.edu.ng</Text>
        </HStack>
      </Flex>

      {/* Footer Links */}
      <Flex justify="space-between" wrap="wrap">
        <VStack align="start">
          {/* <Text fontWeight="bold">Our School</Text>
          <Link>RSUBS at a Glance</Link>
          <Link>Who We Are</Link>
          <Link>The School</Link>
          <Link>Life at RSUBS</Link>
          <Link>Careers at RSUBS</Link>
          <Link>Partnerships & Memberships</Link> */}
        </VStack>

        <VStack align="start">
          {/* <Text fontWeight="bold">Faculty & Research</Text>
          <Link>Faculty & Research</Link>
          <Link>Our Centres</Link>
          <Link>Initiatives</Link>
          <Link>Research at RSUBS</Link> */}

          <Text fontWeight="bold" mt={4}>Programmes</Text>
          <Link href="/programs/pgd">PGDA</Link>
          <Link href="/programs/mba" >MBA</Link>
          <Link href="/programs/msc">Msc</Link>
          <Link href="/programs/dba">DBA</Link>
        </VStack>

        <VStack align="start">
          <Text fontWeight="bold">Quick Links</Text>
          {/* <Link>Our People</Link> */}
          <Link>FAQs</Link>
          {/* <Link>News</Link> */}
          {/* <Link>Events</Link> */}
          {/* <Link>Press & Communications</Link> */}
          <Link>Contacts</Link>
          {/* <Link>RSUBS Library</Link> */}
          {/* <Link>RSUBS Insights</Link> */}
          {/* <Link>Quality Policy</Link> */}
          {/* <Link>Privacy Policy</Link> */}
        </VStack>

        <VStack align="start">
          {/* <Text fontWeight="bold">Office Hours</Text> */}
          {/* <Text>Monday - Saturday (09:00 am - 05:00 pm)</Text> */}

          <Text fontWeight="bold" mt={4}>Contact Us</Text>
          <Text>info@bs.rsu.edu.ng</Text>
          <Text>complaints@bs.rsu.edu.ng</Text>
          <Text>+234-(0)-803 312 9995</Text>
          
          <Text fontWeight="bold" mt={4}>Newsletter Signup</Text>
          <HStack>
            <Input placeholder="Email" bg="white" color="black" />
            <Button colorScheme="blue">Send</Button>
          </HStack>
        </VStack>
      </Flex>

      {/* Logos */}
      {/* <Flex justify="center" wrap="wrap" gap={6} mt={8}>
        <img src="/path-to-logo1.png" alt="Logo 1" width="80px" />
        <img src="/path-to-logo2.png" alt="Logo 2" width="80px" />
        <img src="/path-to-logo3.png" alt="Logo 3" width="80px" />
        <img src="/path-to-logo4.png" alt="Logo 4" width="80px" />
        <img src="/path-to-logo5.png" alt="Logo 5" width="80px" />
      </Flex> */}

      {/* Bottom Copyright & Links */}
      <Flex justify="space-between" mt={6} borderTop="1px solid white" pt={4}>
        <Text>© Rivers State University Business School, 2025</Text>
        <HStack spacing={4}>
          <Link>Sitemap</Link>
          <Link>Privacy Policy</Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Footer;
