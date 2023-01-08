import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import postsSlice from "./api-slice";
import postreduser from "./favorite-slice";
import previewReducer from "./prewiew-slice";

export const store = configureStore({
  reducer: { preview: previewReducer, posts: postreduser, post: postsSlice },
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
