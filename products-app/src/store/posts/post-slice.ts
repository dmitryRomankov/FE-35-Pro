import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createPostThunk, fetchPostsThunk, IPostsResponse } from "./posts-api";

export interface IPost {
  id: number;
  image: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  author: number;
  liked?: boolean;
}

interface InitialPostState {
  posts: IPost[];
  count: number;
  error: null | string;
  loading: boolean;
  isNewPostCreated: boolean;
}

const initialPostsState: InitialPostState = {
  posts: [],
  count: 0,
  error: null,
  loading: false,
  isNewPostCreated: false,
};

const postsSlice = createSlice({
  name: "posts",
  initialState: initialPostsState,
  reducers: {
    likePost(state: InitialPostState, action: PayloadAction<number>) {
      const post = state.posts.find((post) => post.id === action.payload);
      post.liked = !post.liked;
    },
    getPosts(state: InitialPostState) {
      return { ...state, loading: true };
    },
    setPostsSuccess(state: InitialPostState, action: PayloadAction<IPost[]>) {
      return {
        ...state,
        posts: action.payload,
        loading: false,
        isNewPostCreated: false,
      };
    },
    setPostsError(state: InitialPostState, action: PayloadAction<string>) {
      return { ...state, posts: [], loading: false, error: action.payload };
    },
  },

  extraReducers(builder) {
    builder.addCase(fetchPostsThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchPostsThunk.fulfilled,
      (state, action: PayloadAction<IPostsResponse>) => {
        state.loading = false;
        state.posts = action.payload.results;
        state.count = action.payload.count;
        state.isNewPostCreated = false;
      }
    );
    builder.addCase(fetchPostsThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(createPostThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createPostThunk.fulfilled, (state) => {
      state.loading = false;
      state.isNewPostCreated = true;
    });
    builder.addCase(createPostThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { likePost, getPosts, setPostsSuccess, setPostsError } =
  postsSlice.actions;

export default postsSlice.reducer;
