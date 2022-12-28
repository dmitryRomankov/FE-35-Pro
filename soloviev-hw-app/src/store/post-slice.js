import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postsUrl } from "../constants";

const posts = [];

const favoritePostsId = [];

const popularPostsId = [];

const initialPostsState = {
  posts,
  popularPostsId,
  favoritePostsId,
  status: null,
  error: null,
};

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async () => {
    const response = await fetch(postsUrl);
    const result = await response.json();
    const posts = result.results.map((post) => {
      post.liked = false;
      post.fav = false;
      return post;
    })
    return posts;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: initialPostsState,
  reducers: {
    likePost(state, action) {
      const post = state.posts.find((post) => post.id === action.payload)
      post.liked = !post.liked;
      if (post.liked) {
        console.log(post.id);
        state.popularPostsId.push(post.id);
      }
      else if (state.popularPostsId.includes(post.id)) {
        state.popularPostsId.splice(state.popularPostsId.indexOf(post.id, 1));
      }

    },
    favPost(state, action) {
      const post = state.posts.find((post) => post.id === action.payload)
      post.fav = !post.fav;
      if (post.fav) {
        console.log(post.id);
        state.favoritePostsId.push(post.id);
      }
      else if (state.favoritePostsId.includes(post.id)) {
        state.favoritePostsId.splice(state.favoritePostsId.indexOf(post.id, 1));
      }
    },
  },
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.posts = action.payload;
    },
    [getPosts.rejected]: (state, action) => {},
  },
});

export const { likePost, favPost } = postsSlice.actions;

export default postsSlice.reducer;