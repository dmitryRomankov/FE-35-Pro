import React, { ChangeEvent, useEffect, useState } from "react";
import { Input } from "../../ui";
import { loginUser } from "../../store/users/users-api-slice";
import "./styles.scss";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useRefreshToken } from "../../hooks/useRefreshToken";
import { useFetch } from "../../hooks/useFetch";

export const Main = () => {
  const [authData, setAuth] = useState({
    email: "midahad710@nazyno.com",
    password: "qwrc;slksl",
  });

  const [users, setUsers] = useState([]);

  const token = useAppSelector((state) => state.user.user?.token);
  const loading = useAppSelector((state) => state.user.loading);

  const dispatch = useAppDispatch();

  const refresh = useRefreshToken();

  const fetcher = useFetch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAuth((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    dispatch(loginUser(authData));
  };

  useEffect(() => {
    (async () => {
      const { err, result } = await fetcher(
        "https://studapi.teachmeskills.by/auth/users/"
      );

      setUsers(result.results || []);
    })();
  }, [fetcher, token]);

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
        <>
          <button style={{ padding: "10px" }} onClick={() => refresh()}>
            Refresh
          </button>
          <h2 style={{ wordBreak: "break-word" }}> User Token is {token}</h2>
          <div>
            {users.map((u) => (
              <h4 key={u.id}> Hello {u?.username}</h4>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
