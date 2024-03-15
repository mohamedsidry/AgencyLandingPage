import React from 'react'
import ServiceSingleItem from './ServiceSingleItem'

function ServiceList() {
  return (
    <ul className=' grid grid-cols-1 md:grid-cols-4 gap-5'>
        <ServiceSingleItem/>
        <ServiceSingleItem/>
        <ServiceSingleItem/>
        <ServiceSingleItem/>
    </ul>
  )
}

export default ServiceList