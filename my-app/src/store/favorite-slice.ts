import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialFavoritesState = {};

const fovoritesSlice = createSlice({
  name: "favorites",
  initialState: initialFavoritesState,
  reducers: {},
});
