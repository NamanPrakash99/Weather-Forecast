import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <form className="flex gap-2 items-center justify-center" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city name..."
        className="w-72 p-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-400 outline-none"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition">
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchBar;
