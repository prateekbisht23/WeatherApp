import React from 'react'
import Location from './components/Location'
import WeatherStats from './components/WeatherStats'
import Head from './components/Head'
import Foot from './components/Foot'
import AirQuality from './components/AirQuality'
import Graph from './components/Graph'
import CityDetails from './components/CityDetails'

function App() {
  return (
    <div className='w-full h-screen bg-custom-gradient flex flex-col gap-6 justify-center p-4'>
      <Head/>
      <div className='w-[85%] h-[85%] rounded-3xl bg-[url("src/assets/Sunset.jpg")] bg-center bg-cover flex overflow-hidden ml-32 items-center  '>
        <div className='right flex-row h-full w-full bg-white bg-opacity-10 backdrop-blur-sm'>
          <div className='left flex-row h-full w-[25%] backdrop-blur-sm backdrop-opacity-30 border-r-[1px] border-[rgba(255,255,255,0.3)] px-9 py-12'>
            <Location/>
            <WeatherStats/>
            <AirQuality/>
            <Graph/>
            <CityDetails/>
          </div>
        </div>
      </div>
      <Foot/>
    </div>
  )
}

export default App