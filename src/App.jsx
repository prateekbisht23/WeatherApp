import React, { useState } from 'react'
import Location from './components/Location'
import WeatherStats from './components/WeatherStats'
import Head from './components/Head'
import Forecast from './components/Forecast'
import useWeatherInfo from './hooks/useWeatherInfo'

function App() {
  const [city, setCity] = useState('Delhi');
  const { weatherData, loading, error } = useWeatherInfo(city);

  const handleSearch = (searchQuery) => {
    setCity(searchQuery);
  };

  if (loading) return <div className="h-screen w-screen flex items-center justify-center text-white">Loading...</div>;
  if (error) return <div className="h-screen w-screen flex items-center justify-center text-red-500">{error}</div>;

  return (
    <div 
      className='min-h-screen w-screen relative bg-[#151515]'
      style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='100%'%3E%3Cstop offset='0%' style='stop-color:%23222222;stop-opacity:0.9' /%3E%3Cstop offset='100%' style='stop-color:%23222222;stop-opacity:0.3' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M-100 150 C 200 50, 300 250, 600 100' stroke='url(%23grad)' fill='none' stroke-width='2.5' /%3E%3Cpath d='M100 300 C 400 150, 500 400, 900 200' stroke='url(%23grad)' fill='none' stroke-width='2.5' /%3E%3Cpath d='M-200 400 C 100 300, 300 500, 600 300' stroke='url(%23grad)' fill='none' stroke-width='2.5' /%3E%3Cpath d='M300 0 C 400 200, 600 150, 800 350' stroke='url(%23grad)' fill='none' stroke-width='2.5' /%3E%3Cpath d='M-300 250 C 0 350, 200 100, 500 200' stroke='url(%23grad)' fill='none' stroke-width='2.5' /%3E%3Cpath d='M-150 500 C 100 450, 300 600, 700 450' stroke='url(%23grad)' fill='none' stroke-width='2.5' /%3E%3Cpath d='M200 600 C 400 500, 600 550, 900 500' stroke='url(%23grad)' fill='none' stroke-width='2.5' /%3E%3Cpath d='M-200 650 C 0 600, 200 700, 500 600' stroke='url(%23grad)' fill='none' stroke-width='2.5' /%3E%3Cpath d='M300 700 C 500 650, 700 700, 900 650' stroke='url(%23grad)' fill='none' stroke-width='2.5' /%3E%3Cpath d='M-100 750 C 100 700, 300 800, 600 700' stroke='url(%23grad)' fill='none' stroke-width='2.5' /%3E%3Cpath d='M400 800 C 600 750, 800 800, 1000 750' stroke='url(%23grad)' fill='none' stroke-width='2.5' /%3E%3C/svg%3E")`,
        backgroundSize: '1200px 1200px',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center'
      }}
    >
      {/* Content */}
      <div className='relative h-screen flex flex-col items-center justify-between p-[2vh]'>
        <Head />
        <main className='w-[95vw] h-[85vh] rounded-[2.5rem] overflow-hidden flex items-center justify-center'>
          {/* Glass Card Container */}
          <div 
            className='w-[95%] h-[95%] backdrop-blur-md bg-black/30 rounded-[2.5rem] overflow-hidden flex relative'
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=1600')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            {/* Background Overlay for Card */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-[2px]" />

            {/* Left Panel */}
            <div className='relative w-[400px] h-full border-r border-white/20 flex flex-col'>
              <div className="p-[3vh] pb-[1vh] mt-[2vh] mb-[2vh]">
                <Location onSearch={handleSearch} />
              </div>
              <div className='px-[3vh] flex-1 flex flex-col'>
                <WeatherStats 
                  temperature={weatherData?.current?.temp}
                  windSpeed={weatherData?.current?.wind_speed}
                  humidity={weatherData?.current?.humidity}
                  description={weatherData?.current?.description}
                  main={weatherData?.current?.main}
                  feelsLike={weatherData?.current?.feels_like}
                  sunrise={weatherData?.current?.sunrise}
                  sunset={weatherData?.current?.sunset}
                  timezone={weatherData?.timezone}
                />
              </div>
            </div>

            {/* Right Panel */}
            <div className='relative flex-1 h-full overflow-hidden'>
              <Forecast 
                weatherData={weatherData}
                loading={loading}
                error={error}
                onCitySelect={handleSearch}
                timezone={weatherData?.timezone}
              />
            </div>
          </div>
        </main>

        {/* Bottom Info */}
        <div className="w-[95vw] flex justify-between items-center text-white">
          <div className="text-[2.3vh] font-thin">
            {Math.round(weatherData?.current?.temp || 0)}°C
          </div>
          <div className="text-[2.3vh] font-thin">
            {weatherData?.city} Weather
          </div>
        </div>
      </div>
    </div>
  )
}


export default App
