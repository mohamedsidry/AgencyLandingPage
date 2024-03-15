import React from 'react'
import quoteIcon from './../../../../assets/testimonial/quotes-icon.png'
import rateIcon from './../../../../assets/testimonial/rate-stars-icon.png'
import profileImg from './../../../../assets/hero-img.jpg'



function TestimonialItem() {
  return (
    
    <div className='testimonial-cart p-2 text-blackBlack  '>
        <div className="testimonial-contnet px-2 py-3 bg-BrightBlue rounded-lg flex flex-col item-center justify-center gap-2">
            <img className='testimonial-quote-icon mx-auto w-10 h-10' src={quoteIcon} alt="quote icon for testimonial" />
            <p className='testimonial-text text-gray-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptates esse molestiae consectetur eligendi explicabo odio nam nisi quam dolore, optio adipisci at, mollitia vitae similique fugiat sapiente? Odit, nam.</p>
            <div className="profile flex items-center justify-center gap-3">
                <img className='w-10 h-10 bg-cover rounded-full' src={profileImg} alt="testimonial profile image " />
                <div className="name-rate-content flex flex-col justify-center">
                    <h3 className='testimonial-user-name font-bold'>Bondagani Haj Aatmani</h3>
                    <img src={rateIcon} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default TestimonialItem