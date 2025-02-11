import { Box, Flex, Text, Button, VStack } from "@chakra-ui/react";
import AlumniImage from "../../assets/images/AlumniImage.jpg"
import { useNavigate } from "react-router-dom";

const AlumniSection = () => {
  const navigate = useNavigate();


  return (
    <Flex direction={{ base: "column", md: "row" }} align="center" py={10}>
      {/* Left side: Image */}
      <Box flex="1" h={{ base: "300px", md: "500px" }} overflow="hidden" >
        <img
         src={AlumniImage} 
         alt="Alumni"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
         />
    </Box>

      {/* Right side: Text content */}
      <Box flex="1" bg="blue.600" color="white" p={10} h={{ base: "300px", md: "500px" }}>
        <VStack align="start" spacing={4}>
          <Text fontSize="3xl" fontWeight="bold">
            Alumni
          </Text>
          <Text fontSize="lg">
            A global community of over 8,000 business leaders and innovators.
          </Text>
          <Text fontSize="md">
            Rivers State University Business School Alumni Association (RSUBSAA) is a vibrant network of RSUBS graduates committed to a life of supporting the RSUBS mission and each other, continuous learning, and having a positive socio-economic impact.
          </Text>
          <Button colorScheme="whiteAlpha" variant="outline"  onClick={() => navigate('/alumni')}>
            Learn More
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default AlumniSection;
