import React, { ChangeEvent, useEffect, useState } from "react";
import { Input } from "../../ui";
import { loginUser } from "../../store/users/users-api";
import "./styles.scss";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useRefreshToken } from "../../hooks/useRefreshToken";
import { useFetch } from "../../hooks/useFetch";
import { setAccessToken, setUser } from "../../store/users/users-api-slice";

export const Main = () => {
  const [authData, setAuth] = useState({
    email: "midahad710@nazyno.com",
    password: "qwrc;slksl",
  });

  const token = useAppSelector((state) => state.user.user?.token);
  const { user } = useAppSelector((state) => state.user) || {};
  const loading = useAppSelector((state) => state.user.loading);

  const dispatch = useAppDispatch();
  const fetcher = useFetch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAuth((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    dispatch(loginUser(authData));
  };

  useEffect(() => {
    const accessTokenLs = localStorage.getItem("access");

    if (accessTokenLs) {
      (async () => {
        const { err, result } = await fetcher(
          "https://studapi.teachmeskills.by/auth/users/me/"
        );
        dispatch(setUser(result));
        dispatch(setAccessToken(accessTokenLs));
      })();
    }
  }, [fetcher, dispatch]);

  return (
    <div className="login">
      {!user.username ? (
        <>
          <Input
            id="login"
            name="login"
            placeholder="Enter your email"
            type="text"
            value={authData.email}
            onChange={handleChange}
          />
          <Input
            id="password"
            name="password"
            placeholder="Enter your password"
            type="text"
            value={authData.password}
            onChange={handleChange}
          />
          <button
            onClick={handleSubmit}
            style={{ padding: "10px" }}
            disabled={loading}
          >
            {loading ? "...Loading" : "Login"}
          </button>
        </>
      ) : (
        <>
          <h2 style={{ wordBreak: "break-word" }}> User Token is {token}</h2>
          <div>
            <h4>
              {" "}
              Hello {user?.username} | email: {user.email}
            </h4>
          </div>
        </>
      )}
    </div>
  );
};
