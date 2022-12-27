import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit/";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import themeReducer from "./theme-slice";
import postReducer from "./posts/post-slice";
import userSlice from "./users/users-api-slice";
import { watcherSaga } from "./posts/posts-sagas";

const sagaMiddleWare = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    posts: postReducer,
    user: userSlice,
  },
  devTools: true,
  // middleware: (getDefaultMiddleware) => {
  //   return [...getDefaultMiddleware({ thunk: false }), sagaMiddleWare];
  // },
});
// sagaMiddleWare.run(watcherSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
