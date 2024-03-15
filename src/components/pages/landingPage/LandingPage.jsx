import React from 'react'

import Hero from './sections/Hero'
import Services from './sections/Services'
import PortFolio from './sections/PortFolio'
import About from './sections/About'
import Testimonial from './sections/Testimonial'
import Blog from './sections/Blog'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'

function LandingPage() {
  return (
    <>
        <Header/>
        <Hero/>
        <Services/>
        <PortFolio/>
        <About/>
        <Testimonial/>
        <Blog/>
        <Footer/>
    </>
    
  )
}

export default LandingPage