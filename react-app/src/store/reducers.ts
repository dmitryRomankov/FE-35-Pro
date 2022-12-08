import db from "../db/db.json"
import {IPostsInitialState} from "../interfaces"

const initialState: IPostsInitialState = {
	posts: db.results,
}

const postsReducer = (state = initialState) => state

export {
	postsReducer,
}