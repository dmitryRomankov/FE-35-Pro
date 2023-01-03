import { PayloadAction } from "@reduxjs/toolkit";
import { OPEN_PREVIEW } from "./action-types";

interface IPreview {
  isOpen: boolean;
}

const themeInitialState: IPreview = {
  isOpen: false,
};

export const viewPictureReducer = (
  state: IPreview = themeInitialState,
  action: PayloadAction<boolean>
) => {
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
