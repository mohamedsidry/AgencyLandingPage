import React, { useContext } from 'react'
import { MenuContext } from './contexts/menuContext'

function NavLinks() {

  const context = useContext(MenuContext)
  return (
                <ul className={`nav-links ${context.isMenuActive ? '':'hidden'} md:flex items-center gap-5 `}>
                    <li className="nav-link">Service</li>
                    <li className="nav-link">Portfolio</li>
                    <li className="nav-link">About</li>
                    <li className="nav-link">Testimonial</li>
                </ul>
  )
}

export default NavLinks