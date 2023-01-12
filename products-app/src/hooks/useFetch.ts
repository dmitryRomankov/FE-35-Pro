import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { setAccessToken } from "../store/users/users-api-slice";
import { useRefreshToken } from "./useRefreshToken";

export const useFetch = () => {
  const refresh = useRefreshToken();
  const accessToken =
    useAppSelector((state) => state.user.user?.token) ||
    localStorage.getItem("access");
  const dispatch = useAppDispatch();

  const startFetch = useCallback(
    async (input: RequestInfo | URL, init?: RequestInit) => {
      try {
        const { headers, ...rest } = init || {};
        const appHeaders = headers ?? {};

        const controller = new AbortController();
        const timerId = setTimeout(() => controller.abort(), 10000);

        const response = await fetch(input, {
          ...rest,
          headers: {
            ...appHeaders,
            Authorization: `Bearer ${accessToken}`,
          },
          signal: controller.signal,
        });

        clearTimeout(timerId);

        if (accessToken && response.status === 401) {
          const newAccessToken = await refresh();
          dispatch(setAccessToken(newAccessToken));
          // return startFetch(input, init);
        }

        return { result: await response.json() };
      } catch (err) {
        return { err: err.message };
      }
    },
    [accessToken, dispatch, refresh]
  );

  return startFetch;
};
