import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme-slice";
import postReducer from "./post-slice";
import postImageReducer from "./post-image-slice";
import userReducer from "./user-api-slice"


export const store = configureStore({
  reducer: {
    themeReducer,
    postReducer,
    postImageReducer,
    userReducer,
  },
  devTools: true,
});
