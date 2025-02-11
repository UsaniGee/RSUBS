import React from "react";
import HeroSection from "../../../components/HeroSlider/PagesHero";
import AboutImage from "../../../assets/images/AboutImage.jpeg";

const AboutHero = () => {
  return (
    <HeroSection
    imageSrc={AboutImage}
      title="About RSUBS"
      breadcrumb={[
        { label: "Home", link: "/" },
        { label: "About RSUBS", link: "/about" }
      ]}
    />
  );
};

export default AboutHero;
