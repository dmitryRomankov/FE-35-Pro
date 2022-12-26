import { createSlice } from "@reduxjs/toolkit";

const initialPostImageState = {
  imageIsOpen: false,
  imageUrl: "",
};

const postImageSlice = createSlice({
  name: "post-image",
  initialState: initialPostImageState,
  reducers: {
    postImagePreview(state, action) {
      state.imageUrl = action.payload;
      state.imageIsOpen = !state.imageIsOpen;
    },
  },
});

export const { postImagePreview } = postImageSlice.actions;

export default postImageSlice.reducer;