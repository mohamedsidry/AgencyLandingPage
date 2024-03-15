import React from 'react'
import arrowRight from './../../../../assets/arrow-more.png'

function ReadMoreBtn() {
  return (
    <button className='read-more flex items-center justify-center hover:text-navyBlue'>
            <span className='btn-text text-nowrap'>View details</span>
            <img className='btn-icon' src={arrowRight} alt="" />
    </button>
  )
}

export default ReadMoreBtn