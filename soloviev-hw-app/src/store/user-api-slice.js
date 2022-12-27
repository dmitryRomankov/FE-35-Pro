import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiUrl = "https://studapi.teachmeskills.by/auth/users/"

const initialUserState = {
  user: null,
  loading: false,
  error: null,
};

