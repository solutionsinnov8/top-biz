import React from 'react'
import GeneralHeroSection from '../shared/GeneralHeroSection'
import ServicesSection from '../components/services/ServicesSection'
import ContactSection from '../shared/ContactSection'

const page = () => {
  return (
    <div className='pt-[65px]'>
      <GeneralHeroSection title="Services We Offer" />
      <ServicesSection />
      <ContactSection />
    </div>
  )
}

export default page
