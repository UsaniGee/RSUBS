import { Box, VStack, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ProgramCard = ({ title, description, bgColor, link }) => {
  return (
    <Box
      bg={bgColor}
      p={{ base: 8, md: 8 }}
      borderRadius="lg"
      color="white"
      transition="all 0.3s ease-in-out"
      _hover={{ transform: "scale(0.95)" }}
    >
      <VStack align="start" spacing={4}>
        <Text fontSize="xl" fontWeight="bold">
          {title}
        </Text>
        <Text fontSize="md">{description}</Text>
        <Link to={link}>
          <Button colorScheme="whiteAlpha" variant="outline">
            Learn More
          </Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default ProgramCard;
