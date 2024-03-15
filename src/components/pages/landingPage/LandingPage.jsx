import React from 'react'
import Header from './parts/Header'
import Hero from './sections/Hero'
import Services from './sections/Services'
import PortFolio from './sections/PortFolio'
import About from './sections/About'
import Testimonial from './sections/Testimonial'
import Blog from './sections/Blog'
import Footer from './parts/Footer'

function LandingPage() {
  return (
    <>
        <Header></Header>
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