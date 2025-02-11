import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import HeroSlider from '../../components/HeroSlider'
import AboutSection from '../../components/AboutSection'
import ProgramGrid from '../../components/ProgramCard'
import AlumniSection from '../../components/AlumniSection'

const LandingPage = () => {
  return (
      <Box>
       {/* HeroSection */}
       <Box>
        <HeroSlider />
       </Box>
       {/* AboutSection */}
       <Box>
        <AboutSection />
       </Box>
       {/* ProgrammesSection */}
       <Box>
        <ProgramGrid />
       </Box>

       {/* AlumniSection */}
       <Box>
        <AlumniSection />
       </Box>

      </Box>
    
  )
}

export default LandingPage
