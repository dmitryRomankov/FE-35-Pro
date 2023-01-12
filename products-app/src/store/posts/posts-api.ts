import { objectToFormData } from "./../../helpers/objectToFormData";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { buildUrl } from "../../helpers/buildUrl";
import { IPost } from "./post-slice";

const postApiUrl = "https://studapi.teachmeskills.by/blog/posts/";

export interface IPostsResponse {
  results: IPost[];
  count: number;
}

export interface INewPost {
  [key: string]: string | any;
}

export const fetchPostsThunk = createAsyncThunk<
  IPostsResponse,
  string | Record<string, string> | string[][] | URLSearchParams
>("posts/fetchPosts", async (postUrlParams, thunkApi) => {
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
});

export const createPostThunk = createAsyncThunk<IPost, INewPost>(
  "posts/createPost",
  async (newPost, thunkApi) => {
    try {
      const accessToken = localStorage.getItem("access");

      const formData = objectToFormData(newPost);

      const result = await fetch(postApiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      });
      return await result.json();
    } catch (err) {
      return thunkApi.rejectWithValue({
        message: err.message,
      });
    }
  }
);
