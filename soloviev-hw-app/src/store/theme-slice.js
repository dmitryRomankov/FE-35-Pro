import { createSlice } from "@reduxjs/toolkit";

const themeInitialState = {
  currentTheme: 'light',
  imageIsOpen: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: themeInitialState,
  reducers: {
    changeTheme(state, action) {
      state.currentTheme = action.payload;
    }
  },

});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;