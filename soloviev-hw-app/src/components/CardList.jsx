import React from "react";
import Card from "./Card";
import './CardList.css';



class CardList extends React.Component {
  // constructor(props) {
  //   super(props);
   
  // }

  render() {
    return (
      <ul>
        {this.props.data.map((card, index) => {
           return (
           <li key={index}>
             <Card data={card}/>
           </li>
           )
         })}
      </ul>

    );
  }
}

export default CardList;