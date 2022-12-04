import React from "react";
import { Link } from "react-router-dom";
import "../Post/post.css";

type Props = {
  data: any;
};

export function Post(props: Props): JSX.Element {
  return (
    <div className="post-wrap" id={props.data.id}>
      <div className="text-wrap">
        <div className="post-date">{props.data.date} </div>
        <div className="post-tittle">{props.data.title}</div>
        <p className="post-text">{props.data.text}</p>
      </div>
      <div className="post-image">
        <img className="image" src={props.data.image} alt="#" />
      </div>
    </div>
  );
}
