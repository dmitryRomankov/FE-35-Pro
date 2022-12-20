import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {getPosts} from "./postsThunk"
import {getPost} from "./postThunk"

import {IPosts, IPost, IPostsInitialState} from "../interfaces"

const initialState: IPostsInitialState = {
	posts: [],
	post: undefined,
	favorites: [],
	popular: [],
	likes: {},
	loading: false,
	error: '',
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
	},

	extraReducers(builder) {
		builder.addCase(getPosts.pending, (state) => {
			state.loading = true
		})
		builder.addCase(getPosts.fulfilled, (state, action: PayloadAction<IPosts>) => {
			state.loading = false
			state.posts = action.payload.results
		})
		builder.addCase(getPosts.rejected, (state, action: any) => {
			state.loading = false
			state.error = action.payload
		})

		builder.addCase(getPost.pending, (state) => {
			state.loading = true
		})
		builder.addCase(getPost.fulfilled, (state, action: PayloadAction<IPost>) => {
			state.loading = false
			state.post = action.payload
		})
		builder.addCase(getPost.rejected, (state, action: any) => {
			state.loading = false
			state.error = action.payload
		})
	}
})

export const {addFavorites, increaseLike, decreaseLike} = postsSlice.actions

export default postsSlice.reducer