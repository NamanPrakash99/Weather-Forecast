import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles.css"; 

const WeatherApp = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState([]);
    const [isDarkMode, setIsDarkMode] = useState(false); // 🌙 Dark Mode State

    // Function to toggle dark mode
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle("dark"); // Add/remove dark mode class to body
    };

    // Function to fetch weather
    const fetchWeather = async () => {
        if (!city) return;
        try {
            const apiKey = "82a8ddcd8bc27e05b66a0acb9b3f475b";
            const weatherRes = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
            );

            const forecastRes = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
            );

            setWeather(weatherRes.data);

            // Extract 5-day forecast (one per day)
            const dailyForecast = forecastRes.data.list.filter((item, index) => index % 8 === 0);
            setForecast(dailyForecast);
        } catch (error) {
            console.error("Error fetching weather data", error);
        }
    };

    return (
        <div className={`app-container ${forecast.length > 0 ? "expanded" : ""} ${isDarkMode ? "dark" : ""}`}>
            {/* 🌓 Dark Mode Toggle Button (Fixed at Top-Right) */}
            <button className="theme-toggle" onClick={toggleTheme}>
                {isDarkMode ? "☀️" : "🌙"}
            </button>

            <h1 className="title">Weather Dashboard</h1>
            
            {/* Search Bar */}
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Enter city name..."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button className="search-button" onClick={fetchWeather}>
                    Search
                </button>
            </div>

            {/* Weather Info */}
            {weather && (
                <div className="weather-card">
                    <h2>{weather.name}, {weather.sys.country}</h2>
                    <p>Temperature: {weather.main.temp}°C</p>
                    <p>Max Temp: {weather.main.temp_max}°C</p>
                    <p>Wind Speed: {weather.wind.speed} m/s</p>
                    <p>Condition: {weather.weather[0].description}</p>
                </div>
            )}

            {/* 5-Day Forecast */}
            {forecast.length > 0 && (
                <div className="forecast-container">
                    <h3>5-Day Forecast</h3>
                    <div className="forecast">
                        {forecast.map((day, index) => (
                            <div key={index} className="forecast-day">
                                <p>{new Date(day.dt_txt).toDateString()}</p>
                                <p>Temp: {day.main.temp}°C</p>
                                <p>Wind: {day.wind.speed} m/s</p>
                                <p>{day.weather[0].description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default WeatherApp;
