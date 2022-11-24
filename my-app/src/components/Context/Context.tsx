import { createContext, ReactNode } from "react";

interface ITheme {
  textColor: string;
  background: string;
}

interface IThemeContex {
  dark: ITheme;
}

interface IThemeProvider {
  children: ReactNode;
}

const theme = {
  dark: {
    textColor: "yellow",
    background: "#222222"
  }
};

export const ThemeContext = createContext<IThemeContex>(theme);

export const ThemeProvider = ({ children }: IThemeProvider) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
};