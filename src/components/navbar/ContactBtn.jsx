import React, { useContext } from 'react'
import phoneIcon from './../../assets/ic_baseline-phone.png'
import { MenuContext } from './contexts/menuContext'

function ContactBtn() {
  const context = useContext(MenuContext);

  return (
    <button className={`contact-action ${context.isMenuActive ? '' : 'hidden'}  md:flex items-center gap-3 border border-BrightBlue rounded-md py-2 px-4`}> <img className='' src={phoneIcon} alt="phone icon" /> Talk to Us</button>
  )
}

export default ContactBtn