import { Box } from '@chakra-ui/react'
import React from 'react'
import ContactUsHero from './ContactUsHero'
import ContactSection from './contactSection'

const ContactUs = () => {
  return (
   <Box>
    {/* HeroSection */}
    <Box>
        <ContactUsHero />
    </Box>
    
    {/* ContactSection */}
    <Box>
        <ContactSection />
    </Box>

   </Box>
  )
}

export default ContactUs
