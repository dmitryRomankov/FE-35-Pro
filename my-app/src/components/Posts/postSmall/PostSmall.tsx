import React from "react";
import "./postsSmall.css";
import { IPost } from "../postPreview/PostPreview";
import { Link } from "react-router-dom";

interface IPropsSmall {
  data: IPost;
}
export function PostsSmall(props: IPropsSmall): JSX.Element {
  return (
    <Link to={`/posts/${props.data.id}`}>
      <div className="posts-small-wrapp">
        <div className="posts-small-text">
          <div className="posts-small-date">{props.data.date} </div>
          <div className="posts-small-tittle">{props.data.title}</div>
        </div>
        <div className="posts-small-image">
          <img src={props.data.image} alt="#" />
        </div>
      </div>
    </Link>
  );
}
