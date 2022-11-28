import React from "react";
import "../article/article.css";

type Props = {
  data: any;
};

export function Article(props: Props): JSX.Element {
  return (
      <div className="article-container">
        <div className="article">
        <div className="image-article">
          <img className="image-art" src={props.data.image} alt="#" />
        </div>
          <div className="article-date">{props.data.date} </div>
          <h2 className="article-title">{props.data.title}</h2>
        </div>
        <div className="article">
        <div className="image-article">
          <img className="image-art" src={props.data.image} alt="#" />
        </div>
          <div className="article-date">{props.data.date} </div>
          <h2 className="article-title">{props.data.title}</h2>
        </div>
      </div>
  );
}