import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { viewPictureReducer } from "./reducer";

const reducers = combineReducers({
  viewPictureReducer,
});

export const store = configureStore({
  reducer: reducers,
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;
