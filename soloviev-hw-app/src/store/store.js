import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme-slice";
import postReducer from "./post-slice";
import postImageReducer from "./post-image-slice";


export const store = configureStore({
  reducer: {
    themeReducer,
    postReducer,
    postImageReducer,
  },
  devTools: true,
});
