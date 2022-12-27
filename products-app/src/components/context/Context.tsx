import { createContext, ReactNode } from "react";

interface ITheme {
  textColor: string;
  background: string;
}

interface IThemeContex {
  dark: ITheme;
  light: ITheme;
}

interface IThemeProvider {
  children: ReactNode;
}

const theme = {
  dark: {
    textColor: "#ffff",
    background: "#222222"
  },
  light: {
    textColor: "#22222",
    background: "#e9e5e5"
  }
};

export const ThemeContext = createContext<IThemeContex>(theme);

export const ThemeProvider = ({ children }: IThemeProvider) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
};