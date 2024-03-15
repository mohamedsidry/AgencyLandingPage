import React from 'react'

function SocialProof() {
  return (
    <div className="social-proof flex items-center justify-between gap-10 bg-navyBlue py-5 px-10">
            <div className='content flex flex-col justify-between items-start'>
                <p className='text-blueBlue'>trusted by : </p>
                <h3 className='font-bold'>Top Companies</h3>
            </div>
            <ul className='flex items-center justify-end gap-5 grow font-bold overflow-x-clip'>
                <li className="company">Amazon</li>
                <li className="company">Facebook</li>
                <li className="company">Youtube</li>
                <li className="company">Shopyfy</li>
                <li className="company">Pinterest</li>
                <li className="company">Redit</li>
            </ul>
    </div>
  )
}

export default SocialProof