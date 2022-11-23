import React from "react";
import './Card.css';



class Card extends React.Component {
  // constructor(props) {
  //   super(props);
   
  // }

  render() {
    return (
      <div className='card'>
        <div className="data-block">
          <div className="card-date">{this.props.data.date}</div>
          <div className="card-title">{this.props.data.title}</div>
          <div className="card-text">{this.props.data.text}</div>
        </div>
        <div className="card-image">
          <img src={this.props.data.image} alt='card-img'/>
        </div>
        
     
      </div>
    );
  }
}

export default Card;