import React from 'react'
import GeneralHeroSection from '../shared/GeneralHeroSection'
import GallerySection from '../components/gallery/GallerySection'

const page = () => {
  return (
    <div className='pt-[65px]'>
      <GeneralHeroSection title="Our Gallery" />
      <GallerySection />
    </div>
  )
}

export default page
