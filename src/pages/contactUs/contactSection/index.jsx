import { Box, Text, VStack, HStack, Link, Image, Icon, Divider } from "@chakra-ui/react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const ContactSection = () => {
  return (
    <HStack spacing={0} align="stretch" w="100%" flexWrap="wrap" py="60px">
      {/* Left Side - Image */}
      <Box flex="1" minW="300px">
        <Image
          src="/path-to-image.jpg"
          alt="Contact Support"
          objectFit="cover"
          w="100%"
          h="100%"
        />
      </Box>

      {/* Right Side - Contact Info */}
      <Box flex="1" p={{ base: 6, md: 12 }} bg="white">
        <Text fontSize="3xl" fontWeight="bold" color="blue.600">
          Contact Info
        </Text>
        <Text fontSize="md" mt={2} color="gray.600">
          Our team is trained to guide you through any program decision-making 
          and clarify any questions you may have. We would be glad to hear from you.
        </Text>

        <Divider my={4} />

        <HStack spacing={10} align="flex-start">
          {/* Visit Us */}
          <VStack align="flex-start" spacing={2}>
            <Text fontWeight="bold" color="gray.800">VISIT US</Text>
            <Text color="gray.600">Nkpolu-Oroworukwo, P.M.B. 5080, Port Harcourt, Rivers State, Nigeria. </Text>            
          </VStack>

          {/* Get In Touch */}
          <VStack align="flex-start" spacing={2}>
            <Text fontWeight="bold" color="gray.800">GET IN TOUCH</Text>
            <Link href="tel:+23470070527" color="blue.600">+234 700 70527</Link>
            <Link href="mailto:mba@rsubs.edu.ng" color="blue.600">mba@rsubs.edu.ng</Link>
          </VStack>
        </HStack>

        <Divider my={4} />

        {/* Working Hours */}
        <VStack align="flex-start" spacing={2}>
          <Text fontWeight="bold" color="gray.800">WORKING HOURS</Text>
          <Text color="gray.600">Weekdays: 8 AM – 5 PM</Text>
          <Text color="gray.600">Weekends: By appointment</Text>
        </VStack>

        <Divider my={4} />

        {/* Social Media Icons */}
        <Text fontWeight="bold" color="gray.800" mb={2}>FOLLOW US</Text>
        <HStack spacing={4}>
          <Link href="#" isExternal>
            <Icon as={FaFacebookF} w={6} h={6} color="blue.600" />
          </Link>
          <Link href="#" isExternal>
            <Icon as={FaTwitter} w={6} h={6} color="blue.400" />
          </Link>
          <Link href="#" isExternal>
            <Icon as={FaInstagram} w={6} h={6} color="pink.500" />
          </Link>
        </HStack>
      </Box>
    </HStack>
  );
};

export default ContactSection;
