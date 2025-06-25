import React from 'react'
import HeroSection from './components/home/HeroSection'
import AboutSection from './components/home/AboutSection'
import PartnersSection from './components/home/PartnersSection'
import ServicesSection from './components/home/ServicesSection'
import ContactSection from './shared/ContactSection'

const page = () => {
  return (
    <div className='pt-[65px]'>
      <HeroSection />
      <AboutSection />
      <PartnersSection />
      <ServicesSection />
      <ContactSection />
    </div>
  )
}

export default page
