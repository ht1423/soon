import React from 'react'

function Section({main,sub,color = 'text-white'}) {
  return (
    <div className='flex flex-col space-y-1'>
        <div className={`font-bold ${color} `}>{main}</div>
        <div className='text-xs text-gray-600'>{sub}</div>
    </div>
  )
}

export default Section