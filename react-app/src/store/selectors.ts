import { RootState } from "./index"

const postsSelector = (state: RootState) =>
	state.postsReducer.posts

export {
	postsSelector,
}