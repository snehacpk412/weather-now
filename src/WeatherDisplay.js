import React from 'react';
import './WeatherDisplay.css'; // Import the CSS file

const WeatherDisplay = ({ weather }) => {
  return (
    <div className="weather-display">
      <h2 className="weather-title">Current Weather</h2>
      <div className="weather-details">
        <p>🌡 Temperature: {weather.current_weather.temperature}°C</p>
        <p>💨 Wind Speed: {weather.current_weather.windspeed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherDisplay;

