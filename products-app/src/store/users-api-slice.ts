import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

const tmsApiUrl = "https://studapi.teachmeskills.by/auth/";

interface User {
  password: string;
  username: string;
  email: string;
}

interface NewUser {
  username: string;
  email: string;
  id: number;
  token?: string
}

interface InitialState {
  user: NewUser | null;
  loading: boolean;
  error: null | string;
}

interface IUserActivationData {
  uid: string;
  token: string;
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
      const response = await fetch(`${tmsApiUrl}users/`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      return await response.json();
    } catch (err) {
      return err.toString();
    }
  }
);

export const activateUser = createAsyncThunk(
  "user/activation",
  async (userData: IUserActivationData) => {
    try {
      const response = await fetch(`https://studapi.teachmeskills.by/auth/users/activation/`, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
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
    builder.addCase(
      registerUser.fulfilled,
      (state, action: PayloadAction<NewUser>) => {
        state.loading = false;
        state.user = action.payload;
      }
    );
    builder.addCase(registerUser.rejected, (state, action: any) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(activateUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      activateUser.fulfilled,
      (state, action: PayloadAction<IUserActivationData>) => {
        state.loading = false;
        state.user.token = action.payload.token;
      }
    );
    builder.addCase(activateUser.rejected, (state, action: any) => {
      state.loading = false;
      state.error = action.payload;
    });
  
  },
  initialState,
});

export default userSlice.reducer;
