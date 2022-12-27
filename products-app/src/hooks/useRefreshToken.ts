import { useAppDispatch } from "../store/store";
import { setAccessToken } from "../store/users/users-api-slice";

export const useRefreshToken = () => {
  const refreshTokenLocal = localStorage.getItem("refresh");
  const dispatch = useAppDispatch();

  const refreshToken = async () => {
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
    dispatch(setAccessToken(result.access));
    return result.access;
  };

  return refreshToken;
};
