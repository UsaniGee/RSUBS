import React from "react";
import { Box, Button, Heading, Text, Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import HeroOne from "../../assets/images/HeroOne.jpeg"; 
import HeroTwo from "../../assets/images/HeroTwo.jpeg"; 

const slides = [
  {
    image: HeroOne, 
    title: "Welcome to RSUBS",
    subtitle: "Africa’s Leading Business School",
    buttonText: "Learn More About Us",
  },
  {
    image: HeroTwo, 
    title: "Welcome to RSUBS",
    subtitle: "Africa’s Leading Business School",
    buttonText: "Learn More About Us",
  },

];

const HeroSlider = () => {
  return (
    <Box position="relative" w="100%" h={{ base: "60vh", md: "80vh" }}>
      <Swiper
        modules={[Navigation, Autoplay]}
        // navigation
        autoplay={{ delay: 5000 }}
        loop
        style={{ width: "100%", height: "100%" }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              backgroundImage={`url(${slide.image})`} 
              backgroundSize="cover"
              backgroundPosition="center"
              w="100%"
              h="100%"
              position="relative"
            >
              <Flex
                direction="column"
                position="absolute"
                top="50%"
                left={{base: "5%", md: "10%"}}
                transform="translateY(-50%)"
                bg="rgba(255, 255, 255, 0.7)"
                p={6}
                borderRadius="md"
              >
                <Heading fontSize={{ base: "xl", md: "4xl" }} color="blue.900">
                  {slide.title}
                </Heading>
                <Text fontSize={{ base: "16px", md: "4xl" }} mt={2} color="gray.700">
                  {slide.subtitle}
                </Text>
                <Button
                  mt={4}
                  colorScheme="blue"
                  size="lg"
                  _hover={{ bg: "blue.700" }}
                >
                  {slide.buttonText}
                </Button>
              </Flex>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default HeroSlider;
