import { CHANGE_THEME } from "./action-types";

export const changeThemeAction = (theme: string) => ({
  type: CHANGE_THEME,
  payload: theme,
});
