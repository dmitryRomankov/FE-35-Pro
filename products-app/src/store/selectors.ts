import { RootState } from "./index";

export const themeSelector = (state: RootState) =>
  state.themeReducer.currentTheme;
