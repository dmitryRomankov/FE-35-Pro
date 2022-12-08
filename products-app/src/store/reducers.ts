import { PayloadAction } from "@reduxjs/toolkit";
import { CHANGE_THEME } from "./action-types";

interface ITheme {
  currentTheme: string;
}

const themeInitialState: ITheme = {
  currentTheme: "dark",
};

export const themeReducer = (
  state: ITheme = themeInitialState,
  action: PayloadAction<string>
) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        currentTheme: action.payload,
      };
    default:
      return state;
  }
};

