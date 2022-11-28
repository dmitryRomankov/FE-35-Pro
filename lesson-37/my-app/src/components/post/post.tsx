import React from "react";
import "../post/post.css";

type Props = {
  data: any;
};

export function Post(props: Props): JSX.Element {
  return (
      <div className="post-container">
        <div className="text-section">
          <div className="post-date">{props.data.date} </div>
          <div className="post-title">{props.data.title}</div>
          <p className="post-text">{props.data.text}</p>
        </div>
        <div className="image-container">
          <img className="image" src={props.data.image} alt="#" />
        </div>
      </div>
  );
}