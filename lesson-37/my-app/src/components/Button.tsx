import React from 'react';
import './button.css'

export function Button(props) {
  return (
    <button
      style={{backgroundColor: props.color}}
      className="button"
      onClick={props.onHandleClick}
      disabled={props.disabled}
      >
        {props.text}
    </button>
  );
};
