import React from 'react'
import phoneIcon from './../../assets/ic_baseline-phone.png'

function ContactBtn() {
  return (
    <button className='contact-action hidden  md:flex items-center gap-3 border border-BrightBlue rounded-md py-2 px-4'> <img className='' src={phoneIcon} alt="phone icon" /> Talk to Us</button>
  )
}

export default ContactBtn