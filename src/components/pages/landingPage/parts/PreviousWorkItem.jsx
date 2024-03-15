import React from 'react'
import portfolioImg from './../../../../assets/portfolioes/hero.png'

function PreviousWorkItem() {
  return (
    <li className='portfolio-item p-2'>
        <img src={portfolioImg} alt="image of previouse work " />
    </li>
  )
}

export default PreviousWorkItem