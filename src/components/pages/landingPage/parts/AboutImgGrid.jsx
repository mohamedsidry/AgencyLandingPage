import React from 'react'
import img0 from '../../../../assets/about/about-img-0.png'
import img1 from '../../../../assets/about/about-img-1.png'
import img2 from '../../../../assets/about/about-img-2.png'


function AboutImgGrid() {
  return (
    <div className='grid grid-rows-3 grid-flow-col gap-2'>

        <div className=" row-span-2   col-span-1">
            <img className=' bg-cover w-full h-full rounded-md' src={img0} alt="" />
        </div>
        <div className=" col-span-1  ">
            <img className=' bg-cover w-full h-full rounded-md' src={img1} alt="" />
        </div>
        <div className="row-span-3 ">
            <img className=' bg-cover w-full h-full rounded-md' src={img2} alt="" />
        </div>
        

    </div>
  )
}

export default AboutImgGrid