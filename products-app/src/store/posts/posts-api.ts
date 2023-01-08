import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPost } from "./post-slice";

// TODO: 1. Keypress Search;
// TODO: 2. Keydown enter Search;

const postApiUrl = "https://studapi.teachmeskills.by/blog/posts/";

export interface IPostsResponse {
  results: IPost[];
  count: number;
}

const buildUrl = (url: string, params: string | Record<string, string> | string[][] | URLSearchParams): string => {
  const p = new URLSearchParams(params);

  p.forEach((key, value) => {
    if (!value) p.delete(key);
  });

  return url + "?" + p.toString();
};

export const fetchPostsThunk = createAsyncThunk<IPostsResponse, string | Record<string, string> | string[][] | URLSearchParams>(
  "posts/fetchPosts",
  async (postUrlParams, thunkApi) => {
    try {
      const url = buildUrl(postApiUrl, postUrlParams);
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      return await response.json();
    } catch (err) {
      return thunkApi.rejectWithValue({
        message: err.message,
      });
    }
  }
);
