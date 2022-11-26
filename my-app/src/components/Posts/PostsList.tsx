import React from "react";
import "../Posts/posts.css";
type Props = {
  data: any;
};

export function PostsList(props: Props): JSX.Element {
  return (
    <div className="posts-wrap">
      <div className="posts-item-image">
        <img className="post-image" src={props.data.image} alt="#" />
      </div>
      <div className="posts-item-tittle">{props.data.title}</div>
      <div className="posts-item-date">{props.data.date} </div>
    </div>
  );
}
