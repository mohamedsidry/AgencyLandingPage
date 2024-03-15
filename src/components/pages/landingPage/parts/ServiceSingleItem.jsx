import React from 'react'
import serviceIcon from './../../../../assets/PaintBrush.png'
import ReadMoreBtn from './ReadMoreBtn'

function ServiceSingleItem() {
  return (
    <li className='service-item flex flex-col items-center justify-center bg-BrightBlue rounded-lg p-5 gap-2'>
        <img className='service-icon' src={serviceIcon} alt="" />
        <h3 className='service-title text-2xl font-bold'>Branding and UI/UX</h3>
        <p className='service-text'>Lorem ipsum dolor sit amet consectetur. Quam diam augue lectus vivamus metus</p>
        <ReadMoreBtn/>
    </li>
  )
}

export default ServiceSingleItem