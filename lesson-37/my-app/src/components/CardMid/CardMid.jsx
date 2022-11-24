import React from "react";
import "./CardMid.css";

export function CardMid(props) {
  return (
    <div className="wrapper-cardMid">
      <img className="cardMid__img" src={props.card.image} />
      <p className="cardMid-info__date">{props.card.date}</p>
      <p className="cardMid-info__title">{props.card.title}</p>
    </div>
  );
}
