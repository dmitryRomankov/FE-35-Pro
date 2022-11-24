import React from "react";
import "./CardSmall.css";

export function CardSmall(props) {
  return (
    <div className="wrapper-cardSmall">
      <div className="cardSmall-info">
        <p className="cardSmall-info__date">{props.card.date}</p>
        <p className="cardSmall-info__title">{props.card.title}</p>
      </div>
      <img className="cardSmall__img" src={props.card.image} />
    </div>
  );
}
