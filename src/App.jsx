import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Final from './components/final'
import Header from './components/header'
import WeatherStats from './components/WeatherStats'
import AirQuality from './components/AirQuality'
import Forecast from './components/Forecast'
import CityForecastList from './components/CityForecastList'
import Footer from './components/Footer'
import TemperatureGraph from './components/TemperatureGraph'
import BackgroundImage from './components/BackgroundImage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>{/* the header file would contain the written word weather app */}
      <div /* mainScreen give bgImage according to weather in this*/>
        <div /* left part of the main screen. make the glassmorphism more opaque in this section */>
          <Location/>  {/* this is the search bar of the left section!! */}
          <WeatherStats/> {/* this is the part thet shows temperature */}
          <AirQuality/> {/* this is the part thet shows air quality */}

        </div>
        <div /* Right section of the main screen. make the glassmorphism normal */ >
          <Forecast/> {/* Thsi part shows the weather type in english */}
          <TemperatureGraph/> {/* This creates the graph of the temperature for the entire day */}
          <CityForecastList/> {/* This shows the temperature of the recent searched places */}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default App
