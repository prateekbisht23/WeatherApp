# 🌦️ Modern Weather Dashboard

> 🎨 A sleek and modern weather application built with React that provides real-time weather information with a beautiful user interface. The app features a glass-morphism design and detailed weather information for cities worldwide.

## ✨ Features

### 🌡️ Real-Time Weather Data

- 🌤️ Current temperature and weather conditions
- 🌡️ Feels like temperature
- 💨 Wind speed and humidity levels
- 🌅 Sunrise and sunset times (adjusted to local timezone)
- 🌫️ Air quality indicators
- 📊 Hourly and daily forecasts

### 🎯 User Interface

- 🎨 Glass-morphism design with smooth animations
- 🖼️ Dynamic weather-based background images
- 📱 Responsive layout that works on all screen sizes
- 〰️ Custom curved line background patterns
- ✨ Smooth transitions and hover effects
- 🎯 Modern minimalist design approach

### 🔍 Search Functionality

- 🌍 Search for any city worldwide
- ⚡ Real-time weather data updates
- 🎯 Clean and intuitive search interface
- 🌡️ Thermometer icon indicating weather focus

### 📊 Detailed Weather Information

- 📈 Temperature graphs showing hourly trends
- 📅 7-day forecast with high and low temperatures
- 🕒 Local time display based on city timezone
- 📝 Detailed weather descriptions
- 🔗 Quick access to Google Weather for more details

### 🛠️ Technical Features

- ⚡ Real-time data from OpenWeatherMap API
- 🌐 Timezone-aware date and time displays
- ⚠️ Error handling and loading states
- 🚀 Efficient API usage with data caching
- 📦 Modular component architecture

## 💻 Technology Stack

- **Frontend Framework**: ⚛️ React
- **Styling**: 🎨 TailwindCSS
- **API**: 🌤️ OpenWeatherMap
- **HTTP Client**: 🔄 Axios
- **Icons**: 🎯 Heroicons
- **Date Handling**: ⏰ Native JavaScript Date API

## 📁 Project Structure

```bash
src/
├── components/           # 🧩 UI Components
│   ├── Head.jsx         # 📱 Header Component
│   ├── Location.jsx     # 🔍 Search Component
│   ├── WeatherStats.jsx # 📊 Weather Stats
│   ├── Forecast.jsx     # 🌤️ Weather Forecast
│   ├── DetailsButton.jsx # 🔘 Details Button
│   ├── TemperatureGraph.jsx # 📈 Temperature Graph
│   └── CityForecastList.jsx # 📋 City List
├── hooks/               # 🎣 Custom Hooks
│   └── useWeatherInfo.js # 🌤️ Weather Data Hook
└── App.jsx             # 📱 Main App Component
```

## 📚 Key Learnings

1. **🔌 API Integration**

   - Working with weather APIs
   - Handling API responses and errors
   - Managing API keys securely

2. **⚛️ React Best Practices**

   - Custom hook creation for data fetching
   - Component composition and reusability
   - State management and props drilling
   - Effect handling and cleanup

3. **🎨 UI/UX Design**

   - Implementing glass-morphism effect
   - Creating responsive layouts
   - Managing loading states
   - Error handling and user feedback

4. **🎯 Advanced CSS**

   - TailwindCSS configuration
   - Custom SVG backgrounds
   - Dynamic styling based on data
   - Responsive design principles

5. **💡 JavaScript/React Concepts**
   - Async/await operations
   - Date and time manipulation
   - Array manipulation and data transformation
   - Component lifecycle management

## 🚀 Setup and Installation

1. Clone the repository

```bash
git clone https://github.com/prateekbisht23/WeatherApp.git
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file and add your OpenWeatherMap API key

```env
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

4. Start the development server

```bash
npm start
```

## 👥 Credits

- **Design & Development**: 👨‍💻 Prateek Bisht
- **Co-Developer**: 👨‍💻 Abu Bakar
- **Weather Data**: 🌤️ OpenWeatherMap API
- **Icons**: 🎯 Heroicons
- **Background Images**: 🖼️ Unsplash

## 🚀 Future Improvements

- ⚡ Add weather alerts and notifications
- 📍 Implement geolocation for automatic city detection
- 🗺️ Add more detailed weather maps
- 📊 Include historical weather data
- 🎮 Add weather-based animations
- 📱 Implement PWA capabilities

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

> _Note: This project was created as a learning exercise and demonstration of modern web development techniques. Special thanks to Abu Bakar for the brainstorming and co-development throughout the process._ 🙏
