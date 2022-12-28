import { PayloadAction } from "@reduxjs/toolkit";
import { OPEN_PREVIEW } from "./action-types";

interface IPreview {
  isOpen: boolean;
}

const themeInitialState: IPreview = {
  isOpen: false,
};

export const viewPictureReducer = (state, action: PayloadAction<string>) => {
  switch (action.type) {
    case OPEN_PREVIEW:
      return {
        ...state,
        isOpen: action.payload,
      };
    default:
      return state;
  }
};
