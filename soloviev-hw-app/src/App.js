import Header from "./components/Header";
import Main from "./components/Main";
import Menu from "./components/Menu";
import Card from "./components/Card";
import CardList from "./components/CardList";
import {Registration} from "./components/Registration";
import {RegistrationFunc} from "./components/RegistrationFunc";
import { useState } from "react";

import './App.css';

function App() {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuChange = () => {
    setMenuActive(!menuActive)
  }

  const menuItems = [
    {value: "Main", href: "/main"}, {value: "Posts", href: "/posts"}, {value: "Sign In", href: "/sign-in"}, {value: "Contacts", href: "/contacts"}
  ]

  const cardData = {
    "id": 0,
    "image": "https://tms-studapi-dev.s3.amazonaws.com/media/unnamed_5c5gF9H.jpeg",
    "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "date": "2021-12-12",
    "lesson_num": 0,
    "title": "Talk with yourself",
    "author": 0
    }

  const cardListData = [
    {
      "id": 1,
      "image": "https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-08-04_%D0%B2_16.11.10.png",
      "text": "фыв",
      "date": "2021-10-06",
      "lesson_num": 123,
      "title": "фывфывфыв",
      "author": 7
    },
    {
      "id": 2,
      "image": "https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-08-04_%D0%B2_17.37.38.png",
      "text": "Text",
      "date": "2021-10-07",
      "lesson_num": 48,
      "title": "Title",
      "author": 7
    },
    {
      "id": 3,
      "image": "https://tms-studapi-dev.s3.amazonaws.com/media/unnamed.jpeg",
      "text": "Hello!",
      "date": "2021-10-07",
      "lesson_num": 23,
      "title": "B-52!",
      "author": 97
    }
  ]
    
  return (
    <>
      <Header items={menuItems} onMenuChange={handleMenuChange}></Header>
      <Main></Main>
      <div className="container">
        <Card data={cardData}/>
        <CardList data={cardListData}/>
      </div>
      <div className="container">
        <Registration/>
        <RegistrationFunc/>
      </div>
      <Menu items={menuItems} menuActive={menuActive}/>

    </>
  );
}

export default App;
