import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { postsReducer } from "./reducers"

const rootReducer = combineReducers({
	postsReducer,
})

export const store = configureStore({
	reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
