import React from "react";
import { CardBig } from "./components/CardBig/CardBig";
import "./App.css";
import { cardStoreBig } from "./data/cardBigInfo";
import { cardStoreMid } from "./data/cardMidInfo";
import { cardStoreSmall } from "./data/cardSmallInfo";
import { CardMid } from "./components/CardMid/CardMid";
import { CardSmall } from "./components/CardSmall/CardSMall";
import { Page } from "./components/CardPage/Page";
import { PageInfo } from "./data/pageInfo";

function App() {
  return (
    <>
      <div className="card-container">
        <div>
          {cardStoreBig.map((card, index) => {
            return (
              <CardBig
                className="card-big"
                key={card.id}
                card={cardStoreBig[index]}
              />
            );
          })}
        </div>
        <div className="card-flex">
          {cardStoreMid.map((card, index) => {
            return (
              <CardMid
                className="card-mid"
                key={card.id}
                card={cardStoreMid[index]}
              />
            );
          })}
          {cardStoreSmall.map((card, index) => {
            return (
              <CardSmall
                className="card-small"
                key={card.id}
                card={cardStoreSmall[index]}
              />
            );
          })}
        </div>
      </div>
      <div className="wrapper">
        {PageInfo.map((page, index) => {
          return <Page className="page" key={page.id} page={PageInfo[index]} />;
        })}
      </div>
    </>
  );
}

export default App;
