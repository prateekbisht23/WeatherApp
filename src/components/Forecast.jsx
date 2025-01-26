import React from "react";
import DetailsButton from "./DetailsButton";
import TemperatureGraph from "./TemperatureGraph";
import CityForecastList from "./CityForecastList";

const Forecast = ({ weatherData, loading, error, onCitySelect, timezone }) => {
  if (loading) return <div className="text-white/80">Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!weatherData) return null;

  const { current, forecast } = weatherData;
  const weather = current?.weather?.[0];
  
  // Get local time for the city
  const getLocalTime = () => {
    const localTime = new Date();
    const utcTime = localTime.getTime() + (localTime.getTimezoneOffset() * 60000);
    return new Date(utcTime + (timezone * 1000)).toLocaleString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  // Get hourly temperatures from the forecast list
  const hourlyTemps = forecast?.hourly?.map(item => item.temp) || [];

  return (
    <div className="h-full flex flex-col p-[4vh]">
      {/* Fixed Header Section */}
      <div className="flex-none space-y-[2vh]">
        <span className="text-[1.5vh] text-white opacity-80">Weather Forecast</span>
        <h1 className="text-[5vh] font-light leading-tight text-white">
          {weather?.description}
        </h1>
        
        <div className="flex items-center gap-2 text-[1.5vh] text-white opacity-80">
          <span>{getLocalTime()}</span>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar mt-[2vh] pr-2">
        <div className="space-y-[4vh]">
          <p className="text-[1.5vh] text-white opacity-80 leading-relaxed">
            Temperature: {Math.round(current?.temp)}°C<br />
            Wind Speed: {current?.wind_speed} mph<br />
            Humidity: {current?.humidity}%<br />
            Feels Like: {Math.round(current?.feels_like)}°C
          </p>

          <div>
            <DetailsButton city={weatherData.city} />
          </div>

          {/* Temperature Graph */}
          <div className="h-[25vh]">
            <TemperatureGraph data={hourlyTemps} />
          </div>

          {/* Temperature Range */}
          <div className="grid grid-cols-7 gap-4 text-[1.3vh] text-white opacity-80">
            {forecast?.daily?.map((day, i) => {
              const date = new Date(day.timestamp * 1000);
              return (
                <div key={i}>
                  <div className="text-[1.1vh] opacity-70 mb-1">
                    {date.toLocaleDateString('en-US', { weekday: 'short' })}
                  </div>
                  <div>high {Math.round(day.high)}°C</div>
                  <div>low {Math.round(day.low)}°C</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Fixed Footer */}
      <div className="flex-none mt-[4vh]">
        <CityForecastList 
          selectedCity={weatherData.city}
          onCitySelect={onCitySelect}
        />
      </div>
    </div>
  );
};

export default Forecast;