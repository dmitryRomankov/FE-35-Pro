import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useParams } from "react-router-dom";
import { activateUser } from "../../store/users-api-slice";

export const Activate = () => {
  const { token, uid } = useParams();
  const dispatch = useAppDispatch();
  const userActivatedToken = useAppSelector((state) => state.user.user?.token);

  useEffect(() => {
    dispatch(activateUser({ token, uid }));
  }, [dispatch, token, uid]);
  return userActivatedToken ? (
    <div>User Activated! {userActivatedToken} </div>
  ) : (
    <div>Activation of user...</div>
  );
};
