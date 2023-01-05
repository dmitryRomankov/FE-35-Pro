import React, { createContext, ReactNode, useCallback, useState } from "react";

interface ITheme {
  textColor: string;
  background: string;
}
interface IThemeContext {
  dark: ITheme;
  light: ITheme;
}
interface IThemeProvider {
  children: ReactNode;
}
const theme = {
  light: {
    background: "#eeee",
    textColor: "#222222",
  },
  dark: {
    textColor: "#ffffff",
    background: "#222222",
  },
};

export const ThemeContext = createContext(theme);

export const ThemeProvider = ({ children }: IThemeProvider) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
