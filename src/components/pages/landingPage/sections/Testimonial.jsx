import React from 'react'
import TestimonialListSlider from '../parts/TestimonialListSlider';

function Testimonial() {
  return (
    <section className='testimonial-section relative p-10 text-center bg-blackBlack text-white'>
        <div className="testimonial-content flex flex-col gap-5">
            <p>PORTFOLIO</p>
            <h2 className='text-3xl font-bold'>Our previous works</h2>
            <TestimonialListSlider/>
        </div>
        
        
    </section>
  )
}

export default Testimonial