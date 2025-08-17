import React from "react";
import { useDarkMood } from "../../contexts/AuthContext/ThemeContext";

const DarkMoodToggler = () => {
  const{darkMood, setDarkMood}=useDarkMood()
  return (
    <button onClick={()=>setDarkMood(!darkMood)} className="px-2 py-2 bg-gray-300 rounded-full transition-all dark:bg-white/10 cursor-pointer">
      {darkMood ? "☀️" : "🌙"}
    </button>
  );
};

export default DarkMoodToggler;
