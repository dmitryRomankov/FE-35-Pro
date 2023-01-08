import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getPosts } from "./api-slice";

interface IPost {
  createdAt: string;
  title: string;
  date: string;
  image: string;
  text: string;
  id: number;
  favorite: boolean;
}

interface IInitialFavoritesState {
  posts: IPost[];
}

const initialState: IInitialFavoritesState = {
  posts: [],
};

export const favoritesPosts = createAsyncThunk(
  "post/favoritesPosts/",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`${URL}${id}`);
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

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: initialState,
  reducers: {
    favoritePost(state: IInitialFavoritesState, action: PayloadAction<number>) {
      state.posts.forEach((post) => {
        if (action.payload === post.id) {
          post.favorite = !post.favorite;
        }
      });
    },
  },
});
export const { favoritePost } = favoritesSlice.actions;
export default favoritesSlice.reducer;
