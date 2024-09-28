import React from 'react'

function Location() {
  return (
    <div className='border-b-[1px] h-9 border-white flex flex-row justify-between items-center overflow-hidden box-content'>
        {/* Image of a thermometer */}
        <h1 className='text-white'>T</h1> {/* Add a thermometer icon here */}
        <input type="text" className='text-white font-thin text-xl placeholder-white focus:outline-none focus:font-light bg-transparent w-[70%] h-full' placeholder="Location"/>
        <h1 className='text-white'>S</h1> {/* Add a Search icon here */}
    </div>
  )
}

export default Location