import React from 'react'

import HeroTextContent from '../parts/HeroTextContent'
import HeroImgContent from '../parts/HeroImgContent'
import SocialProof from '../parts/SocialProof'

function Hero() {
  return (
    <section className='hero-section relative bg-blackBlack text-white md:pt-20 '>
        <div className="hero-content grid grid-cols-1 md:grid-cols-2 items-center gap-5 p-10 z-20">
            <HeroTextContent/>
            <HeroImgContent/>
        </div>
        <SocialProof/>
    </section>
  )
}

export default Hero