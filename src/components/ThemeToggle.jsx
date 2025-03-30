import { useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button className="p-2" onClick={toggleTheme}>
      {dark ? <BsSun className="text-yellow-400" /> : <BsMoon className="text-gray-700" />}
    </button>
  );
};

export default ThemeToggle;
