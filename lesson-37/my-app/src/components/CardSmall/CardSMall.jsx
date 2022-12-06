import React from "react";
import "./CardSmall.css";

export function CardSmall({ id, date, title, image }) {
  return (
    <div className="wrapper-cardSmall">
      <div className="cardSmall-info">
        <p className="cardSmall-info__date">{date}</p>
        <p className="cardSmall-info__title">{title}</p>
      </div>
      <img className="cardSmall__img" src={image} />
    </div>
  );
}
