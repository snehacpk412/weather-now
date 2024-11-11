import React, { useState } from 'react';
import axios from 'axios';
import WeatherDisplay from './WeatherDisplay';
import './WeatherApp.css'; // Import the CSS file

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  // List of cities with their coordinates
  const cities = [
    { name: 'New York', latitude: 40.7128, longitude: -74.006 },
    { name: 'London', latitude: 51.5074, longitude: -0.1278 },
    { name: 'Tokyo', latitude: 35.6895, longitude: 139.6917 },
    { name: 'Sydney', latitude: -33.8688, longitude: 151.2093 },
    // Add more cities as needed
  ];

  // Function to fetch weather data
  const fetchWeather = async (latitude, longitude) => {
    try {
      const response = await axios.get('https://api.open-meteo.com/v1/forecast', {
        params: {
          latitude,
          longitude,
          current_weather: true,
        },
      });
      setWeatherData(response.data);
      setError('');
    } catch (error) {
      setError('Error fetching weather data');
      setWeatherData(null);
      console.error('Error fetching weather data:', error);
    }
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedCity = cities.find((c) => c.name.toLowerCase() === city.toLowerCase());
    
    if (selectedCity) {
      fetchWeather(selectedCity.latitude, selectedCity.longitude);
    } else {
      setError('City not found in the list');
      setWeatherData(null);
    }
  };

  // Handler for input change
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="weather-app">
      <h1 className="title">Weather Now</h1>
      <form onSubmit={handleSubmit} className="weather-form">
        <input
          type="text"
          className="input"
          placeholder="Enter city"
          value={city}
          onChange={handleCityChange} // Corrected onChange handler
        />
        <button type="submit" className="button">Get Weather</button>
      </form>
      {error && <p className="error">{error}</p>}
      {weatherData && <WeatherDisplay weather={weatherData} />}
    </div>
  );
};

export default WeatherApp;
