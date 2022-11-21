import React from "react";
import "./CardBig.css";

export function CardBig(props) {
  return (
    <div className="wrapper-cardBig">
      <div className="cardBig-info">
        <p className="cardBig-info__date">{props.card.date}</p>
        <p className="cardBig-info__title">{props.card.title}</p>
        <p className="cardBig-info__description">{props.card.description}</p>
      </div>
      <img className="cardBig__img" src={props.card.image} />
    </div>
  );
}
