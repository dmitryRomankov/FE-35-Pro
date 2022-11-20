import React from 'react';
import './Button.css'

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
