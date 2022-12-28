import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../components/Card";
import { postSelector } from "../../store/selectors";
import { getPosts } from "../../store/post-slice";

import "./CardList.css";

export const CardList = () => {
  const posts = useSelector(postSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="card-list">
      {posts.map((post) => {
        return <Card key={post.id} data={post} />;
      })}
    </div>
  );
};