import {createSlice, PayloadAction, createAsyncThunk} from "@reduxjs/toolkit"
import type {IModels} from "../interfaces"


export const getPosts = createAsyncThunk(
  'postsThunk' ,
  async (limit: number = 10) => {
    try {
      const response = await fetch(`https://studapi.teachmeskills.by/blog/posts/?limit=${limit}`)
      return await response.json()
    } catch (err) {
      // @ts-ignore
      return err.message
    }
  })

export const getPost = createAsyncThunk(
  'postThunk' ,
  async (id: number) => {
    try {
      const response = await fetch(`https://studapi.teachmeskills.by/blog/posts/${id}/`)
      return await response.json()
    } catch (err) {
      // @ts-ignore
      return err.message
    }
  }
)

interface IInitialStatePostingSlice {
  posts: IModels[]
  post: null | IModels
  favorites: number[]
  popular: number[]
  loading: boolean
  error: string
}
interface IAction {
  results: IModels[]
}

const initialState: IInitialStatePostingSlice = {
  posts: [],
  post: null,
  favorites: [],
  popular: [],
  loading: false,
  error: '',
}

const postingSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setFavorites: (state: IInitialStatePostingSlice, action: PayloadAction<number>) => {
      state.favorites = state.favorites.includes(action.payload)
        ? state.favorites.filter(id => id !== action.payload)
        : [...state.favorites, action.payload]
    }
  },
  extraReducers(builder) {
    builder.addCase(getPosts.pending, (state:IInitialStatePostingSlice) => {
      state.loading = true
    })
    builder.addCase(getPosts.fulfilled, (state:IInitialStatePostingSlice, action:PayloadAction<IAction>) => {
      state.posts = action.payload.results
      state.loading = false
    })
    builder.addCase(getPosts.rejected, (state:IInitialStatePostingSlice, action:PayloadAction<any>) => {
      state.loading = false
      state.error = action.payload.toString()
    })
    builder.addCase(getPost.pending, (state:IInitialStatePostingSlice) => {
      state.loading = true
    })
    builder.addCase(getPost.fulfilled, (state:IInitialStatePostingSlice, action:PayloadAction<IModels>) => {
      state.post = action.payload
      state.loading = false
    })
    builder.addCase(getPost.rejected, (state:IInitialStatePostingSlice, action:PayloadAction<any>) => {
      state.loading = false
      state.error = action.payload.toString()
    })
  }


})

export const {setFavorites} = postingSlice.actions

export default postingSlice.reducer
