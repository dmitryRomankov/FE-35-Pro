import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IPreview {
  isOpen: boolean;
}

const PreviewInitialState: IPreview = {
  isOpen: false,
};

const previewSlice = createSlice({
  name: "preview",
  initialState: PreviewInitialState,
  reducers: {
    viewPictureReducer(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
  },
});

export const { viewPictureReducer } = previewSlice.actions;
export default previewSlice.reducer;
