import { createContext } from "react";

const theme = {
  dark: {backgroundColor: "black", textColor: "white"},
  light: {backgroundColor: "rgb(241, 241, 241)", textColor: "black"}
}

export const ThemeContext = createContext(theme);

export const ThemeContextProvider = ({children}) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}