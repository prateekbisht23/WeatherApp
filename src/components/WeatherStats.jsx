import React from "react";

const WeatherStats = ({ 
  temperature, 
  windSpeed, 
  humidity, 
  description, 
  main,
  feelsLike,
  sunrise,
  sunset,
  timezone 
}) => {
  const formatTime = (timestamp) => {
    if (!timestamp) return 'N/A';
    // Convert UTC timestamp to city's local time using timezone offset
    const date = new Date(timestamp * 1000);
    const utcTime = date.getTime() + (date.getTimezoneOffset() * 60000);
    return new Date(utcTime + (timezone * 1000)).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="text-white font-sans space-y-[2.5vh] w-full">
      {/* Temperature */}
      <div>
        <div className="flex items-baseline gap-[1vh]">
          <span className="text-[7vh] font-extralight tracking-tighter">
            {Math.round(temperature)}°
          </span>
        </div>
        <div>
          <h2 className="text-[2.2vh] font-light capitalize">{main}</h2>
          <p className="text-[1.5vh] opacity-70 capitalize">{description}</p>
        </div>
      </div>

      {/* Main Stats */}
      <div className="space-y-[1.2vh] text-[1.5vh] bg-white/5 rounded-xl p-[2vh]">
        <div className="flex justify-between">
          <span className="opacity-70">Feels Like</span>
          <span>{Math.round(feelsLike)}°C</span>
        </div>
        <div className="flex justify-between">
          <span className="opacity-70">Wind Speed</span>
          <span>{windSpeed} mph</span>
        </div>
        <div className="flex justify-between">
          <span className="opacity-70">Humidity</span>
          <span>{humidity}%</span>
        </div>
      </div>

      {/* Sun Times */}
      <div className="space-y-[1.2vh] text-[1.5vh] bg-white/5 rounded-xl p-[2vh]">
        <div className="flex justify-between">
          <span className="opacity-70">Sunrise</span>
          <span>{formatTime(sunrise)}</span>
        </div>
        <div className="flex justify-between">
          <span className="opacity-70">Sunset</span>
          <span>{formatTime(sunset)}</span>
        </div>
      </div>

      {/* Risk Indicators */}
      <div className="bg-white/5 rounded-xl p-[2vh]">
        <h3 className="text-[1.4vh] opacity-70 mb-[1.2vh]">Air Quality</h3>
        <div className="flex gap-2">
          {['Low', 'Moderate', 'High', 'Very High'].map((level, i) => (
            <div
              key={level}
              className={`flex-1 h-1 rounded-full ${
                i === Math.floor((humidity / 100) * 4)
                  ? 'bg-white'
                  : 'bg-white/20'
              }`}
            />
          ))}
        </div>
        <div className="mt-[1.2vh] text-[1.3vh] opacity-70">
          Current Level: {['Low', 'Moderate', 'High', 'Very High'][Math.floor((humidity / 100) * 4)]}
        </div>
      </div>
    </div>
  );
};

export default WeatherStats;