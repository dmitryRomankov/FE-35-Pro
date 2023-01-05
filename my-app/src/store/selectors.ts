import { RootState } from "./index";

export const openPreviewSelector = (state: RootState) =>
  state.viewPictureReducer.isOpen;
