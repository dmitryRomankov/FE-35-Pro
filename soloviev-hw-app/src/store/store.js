import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme-slice";
import postReducer from "./post-slice";

export const store = configureStore({
  reducer: {
    themeReducer,
    postReducer,
  },
  devTools: true,
});
