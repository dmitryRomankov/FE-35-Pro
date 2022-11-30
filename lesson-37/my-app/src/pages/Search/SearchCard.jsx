import React, { useState } from "react";
import { CardSmall } from "../../components/CardSmall/CardSMall";
import { cardStoreSmall } from "../../data/cardSmallInfo";
import "./Search.css";

export function SearchCard() {
  const [value, setValue] = useState("");

  const filteredCard = cardStoreSmall.filter((card) => {
    return card.title.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <div className="conatiner-search">
      <p className="container-Serach__title">UseSearch</p>
      <div className="search-input">
        <input
          type="text"
          placeholder="Search...."
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
      <div className="container-small">
        {filteredCard.map((card, index) => {
          return (
            <CardSmall
              className="card-small"
              key={index}
              date={card.date}
              title={card.title}
              image={card.image}
            />
          );
        })}
      </div>
    </div>
  );
}
