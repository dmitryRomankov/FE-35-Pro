import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { URL } from "../components/appConstants";

interface IInitialState {
  posts: [];
  loading: boolean;
  error: null | string;
}
const initialState: IInitialState = {
  loading: null,
  posts: [],
  error: null,
};

export const getPosts = createAsyncThunk(
  "post/getPosts/",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("Server Error");
      }
      const posts = await response.json();
      return posts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getPosts.pending.type]: (state) => {
      state.loading = true;
    },
    [getPosts.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    [getPosts.rejected.type]: (state, action: any) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default postsSlice.reducer;
