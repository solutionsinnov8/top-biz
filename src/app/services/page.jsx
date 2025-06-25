import React from 'react'
import GeneralHeroSection from '../shared/GeneralHeroSection'
import ServicesSection from '../components/services/ServicesSection'

const page = () => {
  return (
    <div className='pt-[65px]'>
      <GeneralHeroSection title="Services We Offer" />
      <ServicesSection />
    </div>
  )
}

export default page
