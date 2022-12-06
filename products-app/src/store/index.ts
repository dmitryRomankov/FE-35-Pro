import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./reducers";

const reducers = combineReducers({
  themeReducer,
});

export const store = configureStore({
  reducer: reducers,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
