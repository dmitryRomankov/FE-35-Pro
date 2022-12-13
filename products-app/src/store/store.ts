import { configureStore } from "@reduxjs/toolkit/";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import themeReducer from "./theme-slice";
import postReducer from "./post-slice";
import userSlice from "./users-api-slice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    posts: postReducer,
    user: userSlice,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
