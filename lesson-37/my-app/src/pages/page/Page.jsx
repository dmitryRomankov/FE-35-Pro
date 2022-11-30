import React from "react";
import "./Page.css";
export function Page(props) {
  return (
    <div className="content">
      <h1 className="title">{props.page.title}</h1>
      <img className="image" src={props.page.image} />
      <p className="description">{props.page.description}</p>
    </div>
  );
}
