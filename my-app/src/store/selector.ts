import { RootState } from "./index";

export const preSelector = (state: RootState) => state.theme.currentTheme;
