import React, { useContext, useState } from 'react'
import menuIcon from './../../assets/menu-icon.svg'
import { MenuContext } from './contexts/menuContext'

function MenuBtn() {

  const context = useContext(MenuContext)
  const menuHandler = ()=>{
    console.log(context)
    context.SetMenuActive((prev)=>!prev);
    console.log(context)
  }
  return (
    <button className='btn-search p-2 block md:hidden absolute top-0 right-0' onClick={menuHandler}>
        <img className='w-8 h-8' src={menuIcon} alt="search icon" />
    </button>
  )
}

export default MenuBtn