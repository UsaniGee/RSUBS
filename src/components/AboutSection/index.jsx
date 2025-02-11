import { Box, Grid, GridItem, Heading, Text, Button, Image } from "@chakra-ui/react";
import AboutImage from "../../assets/images/AboutImage.jpeg"; // Replace with actual path
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();


  return (
    <Box maxW="7xl" mx="auto" py={40} px={6}>
      <Grid 
        templateColumns={{ base: "1fr", md: "1fr 1fr" }} 
        gap={10} 
        alignItems="center"
      >
        {/* Left Image */}
        <GridItem>
          <Image src={AboutImage} alt="RSUBS Campus" borderRadius="md" />
        </GridItem>

        {/* Right Content */}
        <GridItem>
          <Heading fontSize="3xl" color="blue.900" mb={3}>
            About RSUBS
          </Heading>
          <Text fontWeight="bold" fontSize="lg" color="gray.700" mb={2}>
            Africa’s Leading Business School
          </Text>
          <Text fontSize="md" color="gray.600" lineHeight="1.7">
          The Rivers State University Business School (RSUBS) was established by the Senate of Rivers State University during its 275th regular meeting, held on Thursday, April 29, 2021. RSUBS is governed by a Board appointed by the Vice-Chancellor and chaired by the Deputy Vice-Chancellor of Administration of the University. The school's daily operations are managed by a Management Committee headed by the Director of the Business School. Prof. N. Gladson Nwokah, a seasoned Professor of Strategic and Internet Marketing is its current Director. 
          </Text>
          <Text fontSize="md" color="gray.600" lineHeight="1.7" mt={4}>
          The school is situated on the main campus of the university in Nkpolu-Oroworukwu, Port Harcourt, Rivers State. Port Harcourt is known as the Garden City of Nigeria and is an industrial hub and oil-rich state of the nation.      
          </Text>
          <Text fontSize="md" color="gray.600" lineHeight="1.7" mt={4}>
          At Rivers State University Business School, we pride ourselves on offering a dynamic learning environment, experienced faculty, and industry-relevant curriculum designed to prepare you for leadership roles in various sectors.  
          </Text>

          {/* Button */}
          <Button 
            mt={6} 
            colorScheme="blue" 
            size="lg" 
            _hover={{ bg: "blue.700" }}
            onClick={() => navigate('/about')} 
          >
            Learn More
          </Button>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default AboutSection;
