import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState, NewUser, UserJWT, UserLogin } from "./interfaces";
import { registerUser, activateUser, loginUser } from "./users-api";

// https://studapi.teachmeskills.by/auth/jwt/create/

const initialState: InitialState = {
  user: {
    email: "",
    id: null,
    username: "",
    token: "",
  },
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "users",
  reducers: {
    setAccessToken(state: InitialState, action: PayloadAction<string>) {
      state.user.token = action.payload;
    },
    setUser(state: InitialState, action: PayloadAction<NewUser>) {
      state.user = action.payload;
    },
  },
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
      (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.user.token = action.payload;
      }
    );
    builder.addCase(activateUser.rejected, (state, action: any) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(
      loginUser.pending,
      (state, action: PayloadAction<UserLogin>) => {
        state.loading = true;
      }
    );
    builder.addCase(
      loginUser.fulfilled,
      (state, action: PayloadAction<UserJWT>) => {
        console.log("action", action);
        state.loading = false;
        state.user.token = action.payload.access;
      }
    );
    builder.addCase(loginUser.rejected, (state) => {
      state.loading = false;
    });
  },
  initialState,
});

export const { setAccessToken, setUser } = userSlice.actions;

export default userSlice.reducer;
