import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { likePost, favPost } from "../store/post-slice";

import "./Card.css";

export const Card = (props) => {
  const dispatch = useDispatch();

  return (
    <Link to={`/posts/${props.data.id}`}>
      <div className="card">
        <div className="data-block">
          <div className="card-date">{props.data.date}</div>
          <div className="card-title">{props.data.title}</div>
          <div className="card-text">{props.data.text}</div>
        </div>
        <div className="card-image">
          <img src={props.data.image} alt="card-img" />
          <div className="posts__signs">
          <p
              className={
                props.data?.fav ? "posts__fav posts__fav--faved" : "posts__fav"
              }
              title="Add to favorites"
              onClick={() => dispatch(favPost(props.data.id))}
            >
              ★
            </p>
            <p
              className={
                props.data.liked ? "posts__like posts__like--liked" : "posts__like"
              }
              title="Add like"
              onClick={() => dispatch(likePost(props.data.id))}
            >
              ♥
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
