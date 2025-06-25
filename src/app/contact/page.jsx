import React from 'react'
import GeneralHeroSection from '../shared/GeneralHeroSection'
import ContactSection from '../shared/ContactSection'

const page = () => {
  return (
    <div className='pt-[65px]'>
      <GeneralHeroSection title="Contact Us" />
      <ContactSection />
    </div>
  )
}

export default page
