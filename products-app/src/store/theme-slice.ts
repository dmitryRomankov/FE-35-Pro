import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITheme {
  currentTheme: string;
}

const themeInitialState: ITheme = {
  currentTheme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState: themeInitialState,
  reducers: {
    changeTheme(state, action: PayloadAction<string>) {
      state.currentTheme = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;

