import React from 'react'
import heroImg from './../../../../assets/hero-img.jpg'

function HeroImgContent() {
  return (
    <div className="hero-image-grid">
        <img className='hero-img' src={heroImg} alt="" />
    </div>
  )
}

export default HeroImgContent