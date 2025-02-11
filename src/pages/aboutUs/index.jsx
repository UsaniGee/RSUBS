import { 
  Box, Heading, Text, Flex, Image, VStack, List, ListItem, Icon, Grid, GridItem, 
  Button
} from "@chakra-ui/react";
import { FaBullseye, FaGlobe, FaStar, FaShieldAlt, FaLightbulb, FaUsers, FaHandshake } from "react-icons/fa";
import React from 'react'
import AboutHero from './hero'
import School from "../../assets/images/HeroOne.jpeg"
import ManagementBoard from "./managementSection";

const AboutUs = () => {
  return (
    <Box>
        <AboutHero />


        <Box maxW="7xl" mx="auto" py={12} px={6}>
      
      {/* Hero Section */}
      <Flex direction="column" align="center" textAlign="center" mb={12}>
        <Heading fontSize="4xl" fontWeight="bold" color="blue.800">
          About Rivers State University Business School (RSUBS)
        </Heading>
        <Text fontSize="lg" mt={4} color="gray.600" maxW="4xl">
          Established in 2021, RSUBS is committed to delivering top-tier business education, fostering innovation, and shaping future leaders.
        </Text>
      </Flex>

      {/* About Section */}
      <Flex direction={{ base: "column", md: "row" }} align="center" gap={12} mb={12}>
        <Box flex="1">
          <Image 
            src={School}
            alt="RSUBS Campus"
            borderRadius="lg"
            boxShadow="lg"
          />
        </Box>
        <Box flex="1">
          <Text fontSize="md" color="gray.700" lineHeight="1.7">
          RSUBS is governed by a Board appointed by the Vice-Chancellor and chaired by the Deputy Vice-Chancellor of Administration of the University. The school's daily operations are managed by a Management Committee headed by the Director of the Business School. Prof. N. Gladson Nwokah, a seasoned Professor of Strategic and Internet Marketing is its current Director. 
          </Text>
          <Text fontSize="md" color="gray.700" mt={4} lineHeight="1.7">
          The school is situated on the main campus of the university in Nkpolu-Oroworukwu, Port Harcourt, Rivers State. Port Harcourt is known as the Garden City of Nigeria and is an industrial hub and oil-rich state of the nation.
          At Rivers State University Business School, we pride ourselves on offering a dynamic learning environment, experienced faculty, and industry-relevant curriculum designed to prepare you for leadership roles in various sectors..
          </Text>
        </Box>
      </Flex>

      {/* Mission & Vision Section */}
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8} mb={12}>
        <GridItem 
          bg="blue.50" 
          p={6} 
          borderRadius="lg" 
          boxShadow="md" 
          textAlign="center"
        >
          <Icon as={FaGlobe} boxSize={12} color="blue.700" mb={4} />
          <Heading fontSize="2xl" color="blue.800">Our Vision</Heading>
          <Text fontSize="md" color="gray.700" mt={3}>
            To be a globally recognized business school, dedicated to shaping future business leaders through excellence in education, research, and community engagement.
          </Text>
        </GridItem>
        
        <GridItem 
          bg="blue.50" 
          p={6} 
          borderRadius="lg" 
          boxShadow="md" 
          textAlign="center"
        >
          <Icon as={FaBullseye} boxSize={12} color="blue.700" mb={4} />
          <Heading fontSize="2xl" color="blue.800">Our Mission</Heading>
          <Text fontSize="md" color="gray.700" mt={3}>
            To provide a transformative business education that equips students with knowledge, skills, and ethical values needed for success in a rapidly evolving global economy.
          </Text>
        </GridItem>
      </Grid>

      {/* Core Values Section */}
      <Box textAlign="center" mb={8}>
        <Heading fontSize="3xl" color="blue.800">Our Core Values</Heading>
        <Text fontSize="lg" color="gray.600" mt={3}>
          We are guided by values that define our culture and drive our mission.
        </Text>
      </Box>

      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
        {[
          { icon: FaStar, title: "Excellence", desc: "Upholding the highest standards of academic excellence." },
          { icon: FaShieldAlt, title: "Integrity", desc: "Prioritizing honesty, ethics, and accountability in all endeavors." },
          { icon: FaLightbulb, title: "Innovation", desc: "Encouraging creativity, entrepreneurship, and continuous learning." },
          { icon: FaUsers, title: "Diversity", desc: "Embracing different perspectives and inclusive collaboration." },
          { icon: FaHandshake, title: "Collaboration", desc: "Building strong partnerships for shared success." }
        ].map((value, index) => (
          <GridItem 
            key={index} 
            p={6} 
            bg="gray.50" 
            borderRadius="lg" 
            boxShadow="md" 
            textAlign="center"
            _hover={{ transform: "scale(0.98)", transition: "0.3s" }}
          >
            <Icon as={value.icon} boxSize={10} color="blue.700" mb={3} />
            <Heading fontSize="xl" color="blue.800">{value.title}</Heading>
            <Text fontSize="md" color="gray.700" mt={2}>{value.desc}</Text>
          </GridItem>
        ))}
      </Grid>

    </Box>

   {/* ManagementBoard */}
   <ManagementBoard />
    </Box>
  )
}

export default AboutUs
