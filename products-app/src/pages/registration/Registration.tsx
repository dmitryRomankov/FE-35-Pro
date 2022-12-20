import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../store/store";
import { registerUser } from "../../store/users-api-slice";

import "./styles.scss";

export const Registration = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { user } = useAppSelector((state) => state.user);

  const token = "bghlj4-c871d1dd772416bfd3a60e3c98ee9885";
  const uid = 'NTY4MQ';

  const handleChangeUser = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submit = () => {
    dispatch(registerUser(userData));
  };

  const handleActivate = () => navigate(`/activate/${uid}/${token}`);

  const isUserRegistered = user && user.username && user.id;

  return (
    <div className="registration">
      {isUserRegistered ? (
        <div className="registration__success">
          <h2>Hello {user.username}</h2>
          <button style={{ padding: "10px" }} onClick={handleActivate}>
            Activate account
          </button>
        </div>
      ) : (
        <div className="registration__inputs">
          <input
            className="registration__input"
            type="text"
            placeholder="username"
            value={userData.username}
            name="username"
            onChange={handleChangeUser}
          />
          <input
            className="registration__input"
            type="email"
            placeholder="email"
            value={userData.email}
            name="email"
            onChange={handleChangeUser}
          />
          <input
            className="registration__input"
            type="password"
            placeholder="password"
            value={userData.password}
            name="password"
            onChange={handleChangeUser}
          />
          <button onClick={submit}>Submit</button>
        </div>
      )}
    </div>
  );
};
