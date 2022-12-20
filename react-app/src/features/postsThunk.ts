import {createAsyncThunk} from "@reduxjs/toolkit"
import {BASIC_API_URL} from "../variables"

export const getPosts = createAsyncThunk(
	"posts",
	async (limit: number = 10) => {
		try {
			const response = await fetch(`${BASIC_API_URL}/blog/posts/?limit=${limit}`)
			return await response.json()
		} catch (err) {
			// @ts-ignore
			return err.message
		}
	}
)