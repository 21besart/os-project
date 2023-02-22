import { createContext, useContext } from "react";

export interface ThemeContextValues {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const ThemeContext = createContext<ThemeContextValues>({
  darkMode: false,
  toggleDarkMode: () => {},
});

export const useThemeContext = () => {
  if (!ThemeContext) {
    throw new Error("useThemeContext must be used within ThemeContext");
  }

  return useContext(ThemeContext);
};
