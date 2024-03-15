import React from 'react'
import phoneIcon from './../../../../assets/ic_baseline-phone.png'
function HeroTextContent() {
  return (
    <div className="hero-text-grid flex flex-col items-center md:items-start justify-between gap-5 z-20">
                <h1 className=' text-3xl md:text-6xl font-extrabold'>#1 Worldwide Digital Solution Agency</h1>
                <h2>Revolutionize your global digital strategy with the #1 Worldwide Digital Solution Agency, pioneering innovative solutions for unparalleled success.</h2>
                <button className='btn btn-book flex justify-center items-center gap-3 py-3 px-5 bg-navyBlue border border-transparent rounded-lg hover:border-blueBlue '> <img src={phoneIcon} alt=" phone icon" />Book or Call</button>
                <div className="facts-about-us grid grid-cols-3 gap-3">
                    <div className="fact-card p-2 rounded-md  border border-BrightBlue text-center">
                        <h3 className='text-2xl font-bold'>70K+</h3>
                        <p>projects complated </p>
                    </div>
                    <div className="fact-card p-2 rounded-md  border border-BrightBlue text-center">
                        <h3 className='text-2xl font-bold'>4+</h3>
                        <p>Years of Experience </p>
                    </div>
                    <div className="fact-card p-2 rounded-md  border border-BrightBlue text-center">
                        <h3 className='text-2xl font-bold'>400+</h3>
                        <p>Clients Worldwide </p>
                    </div>
                    
                </div>
            </div>
  )
}

export default HeroTextContent