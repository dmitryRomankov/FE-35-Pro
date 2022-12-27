import {createAsyncThunk} from "@reduxjs/toolkit"
import {BASIC_API_URL} from "../variables"

export const getPost = createAsyncThunk(
	'post',
	async (id: number) => {
		try {
			const response = await fetch(`${BASIC_API_URL}/blog/posts/${id}`)
			return await response.json()
		} catch (err) {
			// @ts-ignore
			return err.message
		}
	}
)