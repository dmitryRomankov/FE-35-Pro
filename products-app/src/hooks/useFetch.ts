import { useCallback } from "react";
import { useAppSelector } from "../store/store";
import { useRefreshToken } from "./useRefreshToken";

export const useFetch = () => {
  const refresh = useRefreshToken();
  const accessToken = useAppSelector((state) => state.user.user?.token);

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
          await refresh();
          return startFetch(input, init);
        }

        return { result: await response.json() };
      } catch (err) {
        return { err: err.message };
      }
    },
    [refresh, accessToken]
  );

  return startFetch;
};
