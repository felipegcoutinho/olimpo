import React, {useState, useEffect} from "react";
import {HiMoon, HiSun} from "react-icons/hi2";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true" ? true : false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", true);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", false);
    }
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button className="text-sm" onClick={handleToggle}>
      {darkMode ? <HiSun className="text-yellow-300 text-lg" /> : <HiMoon className="text-blue-400 text-lg" />}
    </button>
  );
};

export default DarkModeToggle;
