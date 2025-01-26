import { useState, useEffect } from 'react';
import axios from 'axios';

const WEATHER_API_KEY = '169f17ee08751cc2c53e2fb23c300d88';

const useWeatherInfo = (city = 'Delhi') => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setLoading(true);
        
        // Fetch current weather and forecast
        const [currentResponse, forecastResponse] = await Promise.all([
          axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${WEATHER_API_KEY}`),
          axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${WEATHER_API_KEY}`)
        ]);

        // Get weather info
        const weather = currentResponse.data.weather[0];

        // Format weather description to be more readable
        const formatWeatherDescription = (desc) => {
          return desc.split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        };

        // Process forecast data with timezone
        const timezone = currentResponse.data.timezone;
        const hourly = forecastResponse.data.list.slice(0, 8).map(item => ({
          time: new Date((item.dt + timezone) * 1000),
          temp: item.main.temp,
          weather: item.weather[0]
        }));

        const daily = forecastResponse.data.list.reduce((acc, item) => {
          const date = new Date((item.dt + timezone) * 1000).getDate();
          if (date >= new Date().getDate() && acc.length < 7) {
            const existingDay = acc.find(d => d.date === date);
            if (!existingDay) {
              acc.push({ 
                date,
                timestamp: item.dt + timezone,
                high: item.main.temp,
                low: item.main.temp,
                weather: item.weather[0]
              });
            } else {
              existingDay.high = Math.max(existingDay.high, item.main.temp);
              existingDay.low = Math.min(existingDay.low, item.main.temp);
            }
          }
          return acc;
        }, []);

        setWeatherData({
          current: {
            temp: currentResponse.data.main.temp,
            feels_like: currentResponse.data.main.feels_like,
            humidity: currentResponse.data.main.humidity,
            wind_speed: currentResponse.data.wind.speed,
            weather: currentResponse.data.weather,
            description: formatWeatherDescription(weather.description),
            main: weather.main,
            sunrise: currentResponse.data.sys.sunrise,
            sunset: currentResponse.data.sys.sunset
          },
          forecast: { hourly, daily },
          city: currentResponse.data.name,
          timezone
        });
        
        setError(null);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch weather data');
        setWeatherData(null);
      } finally {
        setLoading(false);
      }
    };

    if (city) {
      fetchWeatherData();
    }
  }, [city]);

  return { weatherData, loading, error };
};

export default useWeatherInfo;