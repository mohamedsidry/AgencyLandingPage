import React from 'react'
import PreviousWorkItem from './PreviousWorkItem'

function PreviousWorkList() {
  return (
    <ul className=' portfolio-list grid grid-cols-2 md:grid-cols-3 gap-5 '>
        <PreviousWorkItem/>
        <PreviousWorkItem/>
        <PreviousWorkItem/>
        <PreviousWorkItem/>
        <PreviousWorkItem/>
        <PreviousWorkItem/>
    </ul>
  )
}

export default PreviousWorkList