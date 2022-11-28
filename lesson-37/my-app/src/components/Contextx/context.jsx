import React, { createContext } from "react";

import { useContext } from "react";

export const theme = {
  dark: {
    textColor: "white",
    background: "black",
  },
  light: {
    textColor: "black",
    background: "white",
  },
};

export const ThemeConext = createContext(theme.dark);

export const ThemeProvider = ({ children }) => {
  return <ThemeConext.Provider value={theme}>{children}</ThemeConext.Provider>;
};
