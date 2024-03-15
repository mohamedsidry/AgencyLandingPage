import React from 'react'
import PreviousWorkList from '../parts/PreviousWorkList'
import ViewMoreBtn from '../parts/ViewMoreBtn'

function PortFolio() {
  return (
    <section className='portfolio-section bg-blackBlack text-center text-white p-10'>

        <div className="services-contnet flex flex-col gap-5">
            <p>PORTFOLIO</p>
            <h2 className='text-3xl font-bold'>Our previous works</h2>
            <PreviousWorkList/>
            <ViewMoreBtn />
        </div>
        
    </section>
  )
}

export default PortFolio