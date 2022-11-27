import React, { useState } from "react";
import { CardBig } from "./components/CardBig/CardBig";
import "./App.css";
import { cardStoreBig } from "./data/cardBigInfo";
import { cardStoreMid } from "./data/cardMidInfo";
import { cardStoreSmall } from "./data/cardSmallInfo";
import { CardMid } from "./components/CardMid/CardMid";
import { CardSmall } from "./components/CardSmall/CardSMall";
import { Page } from "./pages/page/Page";
import { PageInfo } from "./data/pageInfo";
import { Button } from "./components/Button/Button";
import { Counter } from "./components/Counter/Counter";
import { FormRegistarion } from "./components/Form/Form";
import { Modal } from "./components/Modal/Modal";

function App() {
  const [modal, setModal] = useState(false);

  return (
    <div className="container">
      {/* HOMEWORK38 START 
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
      </div> */}

      {/* HOMEWORK38 END  */}

      {/* HOMEWORK40 START */}
      <FormRegistarion />
      <Button onClick={() => setModal(true)} text="Sign In" />
      {modal && (
        <Modal close={() => setModal(false)} title={"congratulaiont"} />
      )}
      {/* HOMEWORK40 END */}
    </div>
  );
}

export default App;
