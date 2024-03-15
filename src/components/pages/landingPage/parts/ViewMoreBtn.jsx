import React from 'react'
import btnIcon from './../../../../assets/arrow-right.png'


function ViewMoreBtn() {
  return (

    <button className='read-more mx-auto flex items-center justify-center gap-2 py-2 px-5 rounded-md bg-navyBlue text-white'>
            <span className='btn-text text-nowrap'>View more</span>
            <img className='btn-icon w-5 h-5' src={btnIcon} alt="" />
    </button>
  )
}

export default ViewMoreBtn