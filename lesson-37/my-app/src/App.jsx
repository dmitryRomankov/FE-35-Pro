import React, { useState, useContext } from "react";
import { CardBig } from "./components/CardBig/CardBig";
import "./App.css";
import { cardStoreBig } from "./data/cardBigInfo";
import { cardStoreMid } from "./data/cardMidInfo";
import { cardStoreSmall } from "./data/cardSmallInfo";
import { CardMid } from "./components/CardMid/CardMid";
import { CardSmall } from "./components/CardSmall/CardSMall";
import { PageInfo } from "./data/pageInfo";
import { Page } from "./pages/page/Page";
import { Button } from "./components/Button/Button";
import { Counter } from "./components/Counter/Counter";
import { FormRegistarion } from "./components/Form/Form";
import { Modal } from "./components/Modal/Modal";
import { ThemeConext } from "./components/Contextx/context";
import { ThemeProvider } from "./components/Contextx/context";
import { SearchCard } from "./pages/Search/SearchCard";

function App() {
  const [modal, setModal] = useState(false);
  const theme = useContext(ThemeConext);

  return (
    <ThemeProvider>
      <div
        style={{
          color: theme.textColor,
          background: theme.background,
          border: theme.border,
        }}
        className="container"
      >
        <FormRegistarion />
        <Button onClick={() => setModal(true)} text="Sign In" />
        {modal && (
          <Modal close={() => setModal(false)} title={"Congratulation"} />
        )}
        <div className="card-container">
          <div className="card-big">
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
          </div>
        </div>
        <div className="wrapper">
          {PageInfo.map((page, index) => {
            return (
              <Page className="page" key={page.id} page={PageInfo[index]} />
            );
          })}
        </div>
        <SearchCard></SearchCard>
      </div>
    </ThemeProvider>
  );
}

export default App;
