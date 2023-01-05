import React, { useEffect, useState } from "react";
import "./modal.css";
interface IModal {
  modalImg: string;
  active: boolean;
  setModalActive: boolean | any;
}
export function ModalWindow(props: IModal) {
  return (
    <div
      className={props.active ? "modal active" : "modal"}
      onClick={() => props.setModalActive(false)}
    >
      <img className="modal-img" src={props.modalImg} alt="#" />
    </div>
  );
}
