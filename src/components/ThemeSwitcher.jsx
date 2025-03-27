// ThemeSwitcher.js
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Switch } from '@mui/material';
import { Sun, Moon } from 'lucide-react';

const ThemeSwitcher = () => {
  // const [darkMode, setDarkMode] = useState(false);
  const dispatch = useDispatch();

  
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // useEffect(() => {
  //   // Check for saved preference or system preference
  //   const saved = localStorage.getItem('darkMode');
  //   const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  //   setDarkMode(saved === 'true' || (!saved && systemPrefersDark));
  // }, []);
 

  // useEffect(() => {
  //   // Update localStorage and dispatch theme change
  //   localStorage.setItem('darkMode', darkMode);
  //   dispatch({ type: 'theme/setDarkMode', payload: darkMode });
  // }, [darkMode, dispatch]);

  // const toggleTheme = () => {
  //   setDarkMode(!darkMode);
  // };

  return (
    <div className="flex items-center gap-2">
       <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
        Toggle Dark Mode
      </button>
      {darkMode ? (
        <Moon className="h-5 w-5 text-white" />
      ) : (
        <Sun className="h-5 w-5 text-white" />
      )}
    </div>
  );
};

export default ThemeSwitcher;