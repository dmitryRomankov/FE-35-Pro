import React, { ChangeEvent, useState } from "react";
import { Input } from "../../ui";
import { loginUser } from "../../store/users-api-slice";
import "./styles.scss";
import { useAppDispatch, useAppSelector } from "../../store/store";

export const Main = () => {
  const [authData, setAuth] = useState({
    email: "midahad710@nazyno.com",
    password: "qwrc;slksl",
  });

  const token = useAppSelector((state) => state.user.user?.token);
  const loading = useAppSelector((state) => state.user.loading);

  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAuth((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    dispatch(loginUser(authData));
  };

  return (
    <div className="login">
      {!token ? (
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
        <h2> User Token is {token}</h2>
      )}
    </div>
  );
};
