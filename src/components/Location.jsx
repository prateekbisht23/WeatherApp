import React from 'react'
import { FaTemperatureHigh } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

function Location() {
  return (
    <div className='border-b-[1px] border-white text-white'>
        <div className='flex items-center'>
        <span><FaTemperatureHigh /></span>
        <h2>Seoul City, South Korea</h2>
        <span className='ml-3'> <FaSearch /></span>
        

        </div>
        {/* <input type="text" className='text-white placeholder="Locaion" placeholder-white focus:outline-none bg-transparent'/> */}
    </div>
  )
}

export default Location