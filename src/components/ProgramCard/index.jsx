import { Box, Grid, Text, Button, VStack } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";

const ProgramCard = ({ title, description, bgColor }) => {
  return (
<Box bg={bgColor} p={{base: 8, md: 8}} borderRadius="lg" color="white"  transition="all 0.3s ease-in-out"
        _hover={{ transform: "scale(0.95)" }}>
      <VStack align="start" spacing={4}>
        <Text fontSize="xl" fontWeight="bold">
          {title}
        </Text>
        <Text fontSize="md">{description}</Text>
        <Button leftIcon={<DownloadIcon />} colorScheme="whiteAlpha" variant="outline">
          Download Brochure
        </Button>
      </VStack>
    </Box>
  );
};

const ProgramGrid = () => {
  return (
    <Box p={{base: 1, md: 10}} textAlign="center">
      <Text fontSize="3xl" fontWeight="bold" color="blue.600">
        Find the Right Programme for You
      </Text>
      <Text fontSize="md" color="gray.600" mb={8}>
        Discover the right programme to help you advance in your professional or entrepreneurial journey.
      </Text>
      <Grid 
      templateColumns={{ base: "1fr", md: "1fr 1fr" }} 
      gap={6} 
      maxW={{base: "100%", md: "7xl"}} 
      mx="auto" 
      py={10} 
      px={6}>
        <ProgramCard
          title="Master in Business Administration"
          description="Your journey starts here. Take the first step towards unlocking your potential through our MBA programmes..."
          bgColor="red.500"
        />
        <ProgramCard
          title="Executive Education"
          description="Enhance your ability to drive organisational growth and transformation. Acquire the skills to effectively manage..."
          bgColor="green.500"
        />
        <ProgramCard
          title="Doctor of Business Administration"
          description="Enhance your position as a leader and strengthen your ability to drive change within your industry..."
          bgColor="blue.600"
        />
        <ProgramCard
          title="M.Sc in Management"
          description="Designed for recent grads and young professionals looking to kickstart their management careers..."
          bgColor="teal.500"
        />
      </Grid>
    </Box>
  );
};

export default ProgramGrid;
