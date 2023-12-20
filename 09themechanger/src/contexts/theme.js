import { useContext } from "react";
import { createContext } from "react";

export const ThemeContext = createContext({
  themeMode: "",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
