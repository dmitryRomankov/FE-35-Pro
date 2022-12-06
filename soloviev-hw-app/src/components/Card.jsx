import React from "react";
import { Link } from "react-router-dom";
import './Card.css';

export const Card = (props) => {

  return (
    <Link to={`/posts/${props.data.id}`}>
      <div className='card'>
        <div className="data-block">
          <div className="card-date">{props.data.date}</div>
          <div className="card-title">{props.data.title}</div>
          <div className="card-text">{props.data.text}</div>
        </div>
        <div className="card-image">
          <img src={props.data.image} alt='card-img'/>
        </div>
      </div>
    </Link>

  );
}
