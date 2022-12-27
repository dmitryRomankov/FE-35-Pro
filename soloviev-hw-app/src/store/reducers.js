
import { CHANGE_THEME, OPEN_IMAGE_PREVIEW } from "./action-types";

const initialState = {
  currentTheme: 'light',
  imageIsOpen: false,
};

export const themeReducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        currentTheme: action.payload,
      };
    default:
      return state;
  }
};

export const imagePreviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_IMAGE_PREVIEW:
      return {
        ...state,
        imageIsOpen: action.payload,
      };
    default:
      return state;
  }
}