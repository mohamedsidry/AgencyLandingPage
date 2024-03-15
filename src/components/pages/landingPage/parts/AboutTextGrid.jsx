import React from 'react'
import eyeIcon from './../../../../assets/Eye.png'
import targetIcon from './../../../../assets/Target.png'
import ViewMoreBtn from './ViewMoreBtn'

function AboutTextGrid() {
  return (
    <div className='text-grid text-left flex flex-col items-center gap-5'>
        <p>Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla volutpat lectus amet. Integer sed pretium odio lectus at malesuada sed eget nunc. Viverra malesuada viverra id vel tortor dui adipiscing. Bibendum cras fringilla amet suspendisse. Duis mattis hac urna fames in ante.</p>
        <div className="vesion flex item-center justify-between gap-5 p-5">
                <img src={eyeIcon} alt="" />
            <div className="text-content  grow justify-self-start">
                <h3 className='text-2xl font-bold'>Our Vision </h3>
                <p>Lorem ipsum dolor sit amet consectetur. Ut elementum ac eget at. Id et at dui arcu risus.</p>
            </div>
        </div>
        <div className="mession flex item-center justify-between gap-2 p-5">
        
            <img src={targetIcon} alt="" />
            
            <div className="text-content grow justify-self-start">
                <h3 className='text-2xl font-bold'>Our Mession </h3>
                <p>Lorem ipsum dolor sit amet consectetur. Ut elementum ac eget at. Id et at dui arcu risus.</p>
            </div>
        </div>
        <div className='w-full'>
        <ViewMoreBtn/>
        </div>
        
    </div>
  )
}

export default AboutTextGrid