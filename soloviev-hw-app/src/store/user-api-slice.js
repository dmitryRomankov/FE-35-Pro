import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiUrl = "https://studapi.teachmeskills.by/auth/users/";

const initialUserState = {
  user: null,
  loading: false,
  error: null,
};

export const registerUser = createAsyncThunk("user/registration", async (user) => {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(user),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    return error.toString();
  }
});

export const userSlice = createSlice({
  name: "users",
  reducers: {},
  extraReducers(builder) {
    builder.addCase(registerUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
  initialState: initialUserState,
});

export default userSlice.reducer;
