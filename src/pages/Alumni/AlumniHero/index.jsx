import React from "react";
import HeroSection from "../../../components/HeroSlider/PagesHero";
import AboutImage from "../../../assets/images/AboutImage.jpeg";

const AlumniHero = () => {
  return (
    <HeroSection
    imageSrc={AboutImage}
      title="Alumni"
      breadcrumb={[
        { label: "Home", link: "/" },
        { label: "Alumni", link: "/alumni" }
      ]}
    />
  );
};

export default AlumniHero;
