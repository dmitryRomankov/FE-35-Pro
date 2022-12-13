import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

const apiUrl = "https://studapi.teachmeskills.by/auth";
const usersApi = 'https://638631a2875ca3273d531789.mockapi.io/products-list/users'
const token =
  "LJwR2IPAvwttTv30TJMl8XJYAzQAsQW23YF8GTEftonWQFDnlrY617vvwvMs7Ye9";

interface User {
  password: string;
  username: string;
  email: string;
}

interface InitialState {
  user: User | null;
  loading: boolean;
  error: null | string;
}

const initialState: InitialState = {
  user: null,
  loading: false,
  error: null,
};

export const registerUser = createAsyncThunk(
  "user/registration",
  async (user: User) => {
    try {
      const response = await fetch(usersApi, {
        method: "POST",
        body: JSON.stringify(user),
      });
      return await response.json();
    } catch (err) {
      return err.toString();
    }
  }
);

export const userSlice = createSlice({
  name: "users",
  reducers: {},
  extraReducers(builder) {
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(registerUser.rejected, (state, action: any) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
  initialState,
});

// const { userRegistering } = userSlice.actions;

// export const registerUser =
//   ({ dispatch }) =>
//   () =>
//   async (user: User) => {
//     dispatch(userRegistering());

//     try {
//       const response = await fetch(apiUrl, {
//         method: "POST",
//         body: JSON.stringify(user),
//       });
//       const result = await response.json();
//       dispatch(userRegistrationSuccess(result));
//     } catch (err) {
//       dispatch(userRegistrationFailed(err.message));
//     }
//   };

export default userSlice.reducer;
