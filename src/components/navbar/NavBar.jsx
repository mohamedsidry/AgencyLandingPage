import React, { useState } from 'react'
import NavLinks from './NavLinks'
import Brand from './Brand'
import Actions from './Actions'
import { MenuContext } from './contexts/menuContext';
import MenuBtn from './MenuBtn';


function NavBar() {

  const [isMenuActive, SetMenuActive] = useState(false)

  return (
    <MenuContext.Provider value={{isMenuActive, SetMenuActive}}>
    <nav className='nav-bar container mx-auto py-2 relative'>
        <div className={`nav-bar-content flex ${isMenuActive? 'flex-col':'flex-row'} items-start md:items-center  justify-between gap-2 p-2`}>
            <Brand/>
            <NavLinks/>
            <Actions/>
            
        </div>
        <MenuBtn/>
    </nav>
    </MenuContext.Provider>
    
  )
}

export default NavBar