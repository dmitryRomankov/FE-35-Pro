import { combineReducers, configureStore } from "@reduxjs/toolkit"

import postsReducer from "../features/postsSlice"

const rootReducer = combineReducers({
	postsReducer,
})

export const store = configureStore({
	reducer: rootReducer,
})