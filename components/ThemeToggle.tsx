"use client";
import React, { useEffect, useState } from "react";
import { Dark, Light } from "@/assets/svgs";
import { Theme } from "@/types/Interfaces";
import { navbarThemes, themes } from "@/constants/themes.constant";

function ThemeToggle() {
  const getStoredTheme = localStorage.getItem("theme");
  const initialTheme: keyof Theme = getStoredTheme === "dark" ? "dark" : "light";
  const [theme, setTheme] = useState<keyof Theme>(initialTheme);

  useEffect(() => {
    const root = document.documentElement;
    const themeVariables = themes[theme];
    const navbarThemesVariables = navbarThemes[theme];
    Object.entries(themeVariables).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });
    Object.entries(navbarThemesVariables).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });
  }, [theme]);

  const newTheme: keyof Theme = theme === "light" ? "dark" : "light";

  const toggleTheme = () => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div onClick={toggleTheme}>
      {theme === "light" ? <Dark height="20px" /> : <Light height="20px" />}
    </div>
  );
}

export default ThemeToggle;
