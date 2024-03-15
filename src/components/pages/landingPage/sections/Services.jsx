import React from 'react'
import ServiceList from '../parts/ServiceList'



function Services() {
  return (
    <section className="services-section text-center p-10 pb-20">
      <div className="services-contnet flex flex-col gap-5">
        <p>OUR SERVICES</p>
        <h2 className='text-3xl font-bold'>Growth based services</h2>
        <ServiceList/>
      </div>
    </section>
  )
}

export default Services