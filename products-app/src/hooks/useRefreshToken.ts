import { useCallback } from "react";
import { useAppDispatch } from "../store/store";
import { setAccessToken } from "../store/users/users-api-slice";

export const useRefreshToken = () => {
  const refreshTokenLocal = localStorage.getItem("refresh");
  const dispatch = useAppDispatch();

  const refreshToken = useCallback(async () => {
    const response = await fetch(
      "https://studapi.teachmeskills.by/auth/jwt/refresh/",
      {
        method: "POST",
        body: JSON.stringify({
          refresh: refreshTokenLocal,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const result = await response.json();
    localStorage.setItem("access", result.access);
    dispatch(setAccessToken(result.access));
    return result.access;
  }, [dispatch, refreshTokenLocal]);

  return refreshToken;
};
