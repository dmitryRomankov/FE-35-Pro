import React from "react";
import "./ModalImage.css";

export const ModalImage = ({image, active, setActive}) => {
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className="modal__content">
        <img src={image} alt="post" />
      </div>
    </div>
  );
};
