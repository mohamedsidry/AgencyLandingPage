import React from 'react'
import NavLinks from './NavLinks'
import Brand from './Brand'
import Actions from './Actions'


function NavBar() {
  return (
    <nav className='nav-bar container mx-auto py-2'>
        <div className="nav-bar-content flex items-center justify-between">
            <Brand/>
            <NavLinks/>
            <Actions/>
        </div>
    </nav>
  )
}

export default NavBar