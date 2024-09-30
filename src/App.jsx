import React from 'react'
import Location from './components/Location'
import WeatherStats from './components/WeatherStats'
import Head from './components/Head'
import Foot from './components/Foot'
import AirQuality from './components/AirQuality'
import Graph from './components/Graph'
import Summmary from './components/Summmary'

function App() {
  return (
    <div className='w-full h-screen bg-custom-gradient box-border flex flex-col justify-center items-center py-6 px-4 gap-14'>
      <Head/>
      <div className='w-[75%] h-[80%] rounded-3xl bg-[url("src/assets/DarkClouds.jpg")] bg-center bg-cover flex overflow-hidden'>
        <div className='right flex-row h-full w-full bg-white bg-opacity-30 backdrop-blur-sm'>
          <div className='left flex flex-col h-full gap-6 w-[25%] backdrop-blur-sm backdrop-opacity-30 border-r-[1px] border-[rgba(255,255,255,0.3)] px-9 py-8'>
            <Location/>
            <WeatherStats/>
            <AirQuality/>
            <Graph/>
            <Summmary/>
          </div>
        </div>
      </div>
      <Foot/>
    </div>
  )
}

{/* 30th Sep */}

export default App
