import React from "react";
import "../PostSmall/postsSmall.css";
type Props = {
  data: any;
};

export function PostsSmall(props: Props): JSX.Element {
  return (
    <div className="posts-small-wrapp">
      <div className="posts-small-text">
        <div className="posts-small-date">{props.data.date} </div>
        <div className="posts-small-tittle">{props.data.title}</div>
      </div>
      <div className="posts-small-image">
        <img src={props.data.image} alt="#" />
      </div>
    </div>
  );
}
