import React from 'react'
import ContactBtn from './ContactBtn'
import MenuBtn from './MenuBtn'

function Actions() {
  return (
    <div className='nav-actions flex items-center gap-2'>
        
        <ContactBtn/>
        <MenuBtn/>
    </div>
  )
}

export default Actions