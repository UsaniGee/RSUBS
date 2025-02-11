import React from "react";
import HeroSection from "../../../components/HeroSlider/PagesHero";
import AboutImage from "../../../assets/images/AboutImage.jpeg";

const ContactUsHero = () => {
  return (
    <HeroSection
    imageSrc={AboutImage}
      title="Contact Us"
      breadcrumb={[
        { label: "Home", link: "/" },
        { label: "Contact Us", link: "/contact" }
      ]}
    />
  );
};

export default ContactUsHero;
