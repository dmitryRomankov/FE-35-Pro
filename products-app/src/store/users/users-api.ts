import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUserActivationData, User, UserJWT, UserLogin } from "./interfaces";

const tmsApiUrl = "https://studapi.teachmeskills.by/auth/";

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
