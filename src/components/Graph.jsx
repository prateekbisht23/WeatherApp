import React from 'react'

const Graph = () => {
  return (
    <>
      <div className='flex flex-col gap-0'>  
        <div className='text-white font-extralight text-[8px] flex gap-3 '>
        <div className='flex flex-col col-span-2 pt-2 pb-3 tracking-widest leading-6'>
            <span>11pm</span>
            <span>1pm</span>
            <span>11am</span>
            <span>1am</span>
        </div>
        <div className='rounded-lg w-[100%] min-h-[90%] max-h-[90%] text-[#fde283fa] px-3 py-[5px] border-[1px] border-[#ffffff71]'>
            <span className='text-3xl font-thin'>21&deg;c</span>
        </div>
        </div>
        <div className='col-span-1 align-bottom text-white font-extralight text-[8px] flex gap-2 pl-9'>
            <span>-10</span>
            <span>-5</span>
            <span>0</span>
            <span>+5</span>
            <span>+10</span>
            <span>+15</span>
            <span>+20</span>
            <span>+25</span>
        </div>
      </div>
    </>
    
  )
}

export default Graph