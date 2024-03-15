import React from 'react'
import menuIcon from './../../../../assets/menu-icon.svg'

function MenuBtn() {
  return (
    <button className='btn-search p-2 block md:hidden'>
        <img className='w-8 h-8' src={menuIcon} alt="search icon" />
    </button>
  )
}

export default MenuBtn