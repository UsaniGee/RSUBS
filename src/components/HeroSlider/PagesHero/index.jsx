import React from "react";
import { Box, Text, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Image } from "@chakra-ui/react";

const HeroSection = ({ imageSrc, title, breadcrumb }) => {
  return (
    <Box position="relative" w="100%" h={{ base: "300px", md: "400px" }}>
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={title}
        objectFit="cover"
        w="100%"
        h="100%"
        filter="brightness(50%)"
      />
      
      {/* Overlay Text */}
      <Box
        position="absolute"
        top="50%"
        left="5%"
        transform="translateY(-50%)"
        color="white"
      >
        <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
          {title}
        </Text>

        {/* Breadcrumb Navigation */}
        <Breadcrumb fontSize="sm" color="blue.300" mt={2}>
          {breadcrumb.map((item, index) => (
            <BreadcrumbItem key={index} isCurrentPage={index === breadcrumb.length - 1}>
              <BreadcrumbLink href={item.link}>{item.label}</BreadcrumbLink>
            </BreadcrumbItem>
          ))}
        </Breadcrumb>
      </Box>
    </Box>
  );
};

export default HeroSection;
