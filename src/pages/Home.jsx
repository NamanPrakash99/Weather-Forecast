import { useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import { fetchWeather } from "../api/weather";

const Home = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (err) {
      setError("City not found or API issue!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6 w-full">
      <SearchBar onSearch={handleSearch} />
      {loading && <p className="text-lg animate-pulse">Loading...</p>}
      {error && <p className="text-red-500 text-lg">{error}</p>}
      <WeatherCard weather={weather} />
    </div>
  );
};

export default Home;
