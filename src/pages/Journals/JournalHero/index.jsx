import React from "react";
import HeroSection from "../../../components/HeroSlider/PagesHero";
import AboutImage from "../../../assets/images/AboutImage.jpeg";

const JournalsHero = () => {
  return (
    <HeroSection
    imageSrc={AboutImage}
      title="Journals"
      breadcrumb={[
        { label: "Home", link: "/" },
        { label: "Journals", link: "/journals" }
      ]}
    />
  );
};

export default JournalsHero;
