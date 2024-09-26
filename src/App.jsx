import React from 'react'
import Location from './components/Location'

function App() {
  return (
    <div className='w-full h-screen bg-zinc-800 flex justify-center items-center'>
      <div className='w-[75%] h-[80%] rounded-3xl bg-[url("src/assets/DarkClouds.jpg")] bg-center bg-cover flex overflow-hidden'>
        <div className='right flex-row h-full w-full bg-white bg-opacity-30 backdrop-blur-sm'>
          <div className='left flex-row h-full w-[25%] backdrop-blur-sm backdrop-opacity-30 border-r-[1px] border-[rgba(255,255,255,0.3)] px-9 py-12'>
            <Location/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App