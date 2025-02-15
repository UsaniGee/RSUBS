import { Box, Grid, Text } from "@chakra-ui/react";
import ProgramCard from "./ProgramCard";

const ProgramGrid = () => {
  return (
    <Box p={{ base: 1, md: 10 }} textAlign="center">
      <Text fontSize="3xl" fontWeight="bold" color="blue.600">
        Find the Right Programme for You
      </Text>
      <Text fontSize="md" color="gray.600" mb={8}>
        Discover the right programme to help you advance in your professional or entrepreneurial journey.
      </Text>
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={6}
        maxW={{ base: "100%", md: "7xl" }}
        mx="auto"
        py={10}
        px={6}
      >
        <ProgramCard
          title="Post Graduate Diploma in Business Administration"
          description="Enhance your ability to drive organisational growth and transformation..."
          bgColor="red.500"
          link="/programs/pgd"
        />
        <ProgramCard
          title="Master in Business Administration"
          description="Your journey starts here. Take the first step towards unlocking your potential..."
          bgColor="green.500"
          link="/programs/mba"
        />
        <ProgramCard
          title="M.Sc in Management"
          description="Designed for recent grads and young professionals looking to kickstart their careers..."
          bgColor="teal.500"
          link="/programs/msc"
        />
        <ProgramCard
          title="Doctor of Business Administration"
          description="Enhance your position as a leader and strengthen your ability to drive change..."
          bgColor="blue.600"
          link="/programs/dba"
        />
      </Grid>
    </Box>
  );
};

export default ProgramGrid;
