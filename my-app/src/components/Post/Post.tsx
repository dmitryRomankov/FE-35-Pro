import React from "react";
import { Link } from "react-router-dom";
import "../Post/post.css";

type Props = {
  data: any;
};

export function Post(props: Props): JSX.Element {
  return (
    <div className="container">
      <div className="post-wrap" id={props.data.id}>
        <div className="post-tittle">{props.data.title}</div>
        <div className="post-date">{props.data.date} </div>
        <div className="contant-container">
          <div className="post-image">
            <img className="image" src={props.data.image} alt="#" />
          </div>
          <span className="post-text">{props.data.text}</span>
        </div>
      </div>
    </div>
  );
}
