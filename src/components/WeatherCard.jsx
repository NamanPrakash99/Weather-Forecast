import { motion } from "framer-motion";

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  return (
    <motion.div
      className="bg-white/10 backdrop-blur-md shadow-lg rounded-lg p-6 text-center mt-6 w-80 mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold">{weather.name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
        alt={weather.weather[0].description}
        className="mx-auto"
      />
      <p className="text-lg capitalize">{weather.weather[0].description}</p>
      <p className="text-4xl font-bold">{Math.round(weather.main.temp)}°C</p>
      <div className="flex justify-between mt-4 text-sm">
        <p>💧 Humidity: {weather.main.humidity}%</p>
        <p>🌬️ Wind: {weather.wind.speed} km/h</p>
      </div>
    </motion.div>
  );
};

export default WeatherCard;
