import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

const tmsApiUrl = "https://studapi.teachmeskills.by/auth/";

// https://studapi.teachmeskills.by/auth/jwt/create/

interface UserLogin {
  email: string;
  password: string;
}

interface User extends UserLogin {
  username: string;
}

interface NewUser {
  username: string;
  email: string;
  id: number;
  token?: string;
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

interface UserJWT {
  refresh: string;
  access: string;
}

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
      const response = await fetch(`${tmsApiUrl}activation/`, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (response.status > 200) {
        return "User Activated Successfully";
      } else {
        return "User was not activated";
      }
    } catch (err) {
      return err.toString();
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async (authData: UserLogin) => {
    try {
      const response = await fetch(`${tmsApiUrl}jwt/create/`, {
        method: "POST",
        body: JSON.stringify(authData),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const result: UserJWT = await response.json();

      localStorage.setItem("access", result.access);
      localStorage.setItem("refresh", result.refresh);

      return result;
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

export default userSlice.reducer;
