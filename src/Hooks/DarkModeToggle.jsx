import React, {useState, useEffect} from "react";
import {HiMoon, HiSun} from "react-icons/hi2";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true" ? true : false
  );

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
    <button onClick={handleToggle}>
      <div className="flex items-center gap-2">
        {darkMode ? (
          <HiSun className="text-yellow-300 text-base" />
        ) : (
          <HiMoon className="text-blue-400 text-base" />
        )}
        {darkMode ? "tema light" : "tema dark"}
      </div>
    </button>
  );
};

export default DarkModeToggle;
