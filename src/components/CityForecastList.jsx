import React, { useState, useEffect } from "react";
import axios from 'axios';

const popularCities = [
  "London",
  "New York",
  "Tokyo",
  "Paris",
  "Dubai",
  "Singapore"
];

const CityForecastList = ({ selectedCity, onCitySelect }) => {
  const [cityTemps, setCityTemps] = useState({});
  const WEATHER_API_KEY = '169f17ee08751cc2c53e2fb23c300d88';

  useEffect(() => {
    const fetchCityTemps = async () => {
      const temps = {};
      await Promise.all(
        popularCities.map(async (city) => {
          try {
            const response = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${WEATHER_API_KEY}`
            );
            temps[city] = Math.round(response.data.main.temp);
          } catch (error) {
            temps[city] = null;
          }
        })
      );
      setCityTemps(temps);
    };

    fetchCityTemps();
  }, []);

  return (
    <div className="w-full bg-black/20 backdrop-blur-sm rounded-xl p-[2vh]">
      <h3 className="text-[1.3vh] text-white/60 mb-[2vh]">Popular Cities</h3>
      <div className="grid grid-cols-3 gap-[2vh]">
        {popularCities.map((city) => (
          <button
            key={city}
            onClick={() => onCitySelect?.(city)}
            className={`text-left transition-all duration-300 ${
              selectedCity === city ? 'opacity-100' : 'opacity-60 hover:opacity-80'
            }`}
          >
            <div className="flex flex-col">
              <span className="text-[1.3vh] text-white">{city}</span>
              {cityTemps[city] !== undefined && (
                <span className="text-[1.1vh] text-white/70">
                  {cityTemps[city] !== null ? `${cityTemps[city]}°C` : 'N/A'}
                </span>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CityForecastList;