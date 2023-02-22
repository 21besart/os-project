import React, { useState } from "react";
import { ThemeContext, ThemeContextValues } from "./ThemeContext";

interface Props {
  children: React.ReactNode;
}

export const ThemeContextProvider = ({ children }: Props) => {
  const [darkMode, setDarkMode] = useState(() => {
    const localTheme = localStorage.getItem("theme");

    if (localTheme != null) {
      return localTheme == "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const toggleDarkMode = () => {
    setDarkMode(darkMode => {
      localStorage.setItem("theme", darkMode ? "light" : "dark");

      return !darkMode;
    });
  };

  const context: ThemeContextValues = {
    darkMode,
    toggleDarkMode,
  };

  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
};
