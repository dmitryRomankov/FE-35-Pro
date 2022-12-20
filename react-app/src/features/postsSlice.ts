import {createSlice, PayloadAction} from "@reduxjs/toolkit"

import {IPostsInitialState} from "../interfaces"
import db from "../db/db.json"

const initialState: IPostsInitialState = {
	posts: db.results,
	favorites: [],
	popular: [],
	likes: {}
}

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		addFavorites: (state: IPostsInitialState, action: PayloadAction<number>) => {
			const postId = action.payload

			state.favorites = state.favorites.includes(postId)
				? state.favorites.filter(id => id !== postId)
				: [...state.favorites, postId]
		},
		increaseLike: (state: IPostsInitialState, action: PayloadAction<number>) => {
			const postId = action.payload

			state.likes[postId] = state.likes.hasOwnProperty(postId)
				? state.likes[postId] + 1
				: 1

			if (state.likes[postId] >= 5 && !state.popular.includes(postId)) {
				state.popular = [
					...state.popular,
					postId,
				]
			}
		},
		decreaseLike: (state: IPostsInitialState, action: PayloadAction<number>) => {
			const postId = action.payload

			state.likes[postId] = state.likes.hasOwnProperty(postId)
				? state.likes[postId] - 1
				: -1

			if (state.likes[postId] < 5 && state.popular.includes(postId)) {
				state.popular = state.popular.filter(id => id !== postId)
			}
		},
	}
})

export const {addFavorites, increaseLike, decreaseLike} = postsSlice.actions

export default postsSlice.reducer