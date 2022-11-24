import { createContext, useContext } from "react";

const ThemeContext = createContext({
  defaultColor: "blue",
  defaultRadius: "sm",
});

export function useTheme() {
  const theme = useContext(ThemeContext);
  return theme
}

export const ThemeProvider = ThemeContext.Provider;
