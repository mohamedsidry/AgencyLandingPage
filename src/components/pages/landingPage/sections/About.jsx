import React from 'react'
import AboutImgGrid from '../parts/AboutImgGrid'
import AboutTextGrid from '../parts/AboutTextGrid'

function About() {
  return (
    <section className='about-section relative p-10 text-center gap-5'>
        <div className="services-contnet flex flex-col gap-5">
            <p>ABOUT US</p>
            <h2 className='text-3xl font-bold'>Why we are best</h2>
        </div>

        <div className="about-content grid grid-cols-1 md:grid-cols-2 pt-10 gap-5">

            <AboutImgGrid/>
            <AboutTextGrid/>
           

        </div>

        
    </section>
  )
}

export default About