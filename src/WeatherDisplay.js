import React from 'react';
import './WeatherDisplay.css'; // Import the CSS file

const WeatherDisplay = ({ weather }) => {
  return (
    <div className="weather-display">
      <h2 className="weather-title">Current Weather</h2>
      <div className="weather-details">
        <p>🌡 Temperature: {weather.temperature}°C</p>
        <p>💨 Wind Speed: {weather.windspeed} m/s</p>
        <p>☁️ Weather Code: {weather.weathercode}</p>
      </div>
    </div>
  );
};

export default WeatherDisplay;

