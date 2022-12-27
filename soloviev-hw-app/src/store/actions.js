import { CHANGE_THEME, OPEN_IMAGE_PREVIEW } from "./action-types";


export const changeThemeAction = (theme) => (
  {
    type: CHANGE_THEME,
    payload: theme,
  }
);

export const openImagePreviewAction = (isOpen) => (
  {
    type: OPEN_IMAGE_PREVIEW,
    payload: isOpen,
  }
);