import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../store/store";
import { registerUser } from "../../store/users-api-slice";

import "./styles.scss";

export const Registration = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const dispatch = useAppDispatch();

  const handleChangeUser = (e) => {
    setUser((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const submit = () => {
    dispatch(registerUser(user))
  };

  return (
    <div className="registration">
      <div className="registration__inputs">
        <input
          className="registration__input"
          type="text"
          placeholder="username"
          value={user.username}
          name="username"
          onChange={handleChangeUser}
        />
        <input
          className="registration__input"
          type="email"
          placeholder="email"
          value={user.email}
          name="email"
          onChange={handleChangeUser}
        />
        <input
          className="registration__input"
          type="password"
          placeholder="password"
          value={user.password}
          name="password"
          onChange={handleChangeUser}
        />
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  );
};
