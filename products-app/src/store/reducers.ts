import { PayloadAction } from "@reduxjs/toolkit";

interface ITheme {
  currentTheme: string;
}

const themeInitialState: ITheme = {
  currentTheme: "dark",
};

export const CHANGE_THEME = "CHANGE_THEME";

export const changeThemeAction = (theme: string) => ({
  type: CHANGE_THEME,
  payload: theme,
});

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
