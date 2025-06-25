import React from 'react'
import GeneralHeroSection from '../shared/GeneralHeroSection'
import AboutSection from '../components/about/AboutSection'
import MissionSection from '../components/about/MissionSection'
import VisionSection from '../components/about/VisionSection'
import ValuesSection from '../components/about/ValuesSection'
import ContactSection from '../shared/ContactSection'

const page = () => {
  return (
    <div className='pt-[65px]'>
      <GeneralHeroSection title="About Us"  />
      <AboutSection />
      <MissionSection />
      <VisionSection />
      <ValuesSection />
      <ContactSection />
    </div>
  )
}

export default page
