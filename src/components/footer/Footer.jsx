import React from 'react'
import Brand from '../navbar/Brand'
import mediaIcon from './../../assets/hero-img.jpg'
import emailIcon from './../../assets/email-icon.png'

function Footer() {
  return (
    <footer className='footer bg-blackBlack p-10 text-white'>
        <div className="footer-contnet grid grid-cols-1  md:grid-cols-3 gap-5">
            <div className="brand-info-media flex flex-col  gap-2">
                <Brand/>
                <p className='email'>mohamed.sidry1999@gmail.com</p>
                <p className='number'>Phone : +01 23456789</p>
                <div className="media flex  gap-2">
                    <img className='w-5 h-5 rounded-full' src={mediaIcon} alt="media icon" />
                    <img className='w-5 h-5 rounded-full' src={mediaIcon} alt="media icon" />
                    <img className='w-5 h-5 rounded-full' src={mediaIcon} alt="media icon" />
                    <img className='w-5 h-5 rounded-full' src={mediaIcon} alt="media icon" />
                    <img className='w-5 h-5 rounded-full' src={mediaIcon} alt="media icon" />
                </div>
            </div>
            <div className="quick-links ">
                
                <h2 className='text-xl'>Quick Links</h2>
                <ul className=' text-gray-300'>
                    <li>Service</li>
                    <li>rojects</li>
                    <li>About us</li>
                    <li>Testimonial</li>
                </ul>
            </div>
            <div className="resource-links ">
                
                <h2 className='text-xl'>Resources</h2>
                <ul className=' text-gray-300'>
                    <li>Support</li>
                    <li>Privacy Policy</li>
                    <li>FAQ's</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>

            <div className="subscribe md:col-span-3">
                <h2 className='text-xl'>Subscribe</h2>
                <div className="container-input flex items-center justify-between p-2 bg-gray-900 rounded-md gap-2">
                    <img className='w-5 h-5' src={emailIcon} alt="email-icon" />
                    <input className='grow bg-transparent outline-none' type="email" name="email" id="email"  placeholder='email@gmail.com'/>
                    <button className='rounded bg-navyBlue px-2 py-1'>Send</button>
                </div>
            </div>
            
        </div>
    </footer>
  )
}

export default Footer