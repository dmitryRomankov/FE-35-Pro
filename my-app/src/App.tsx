import React from "react";
import { Title } from "./components/Title";
import { Post } from "../src/components/Post/Post";
import { Header } from "../src/components/Header/Header";
import { Posts } from "../src/components/Posts/Posts";
import "./App.css";
import data from "./response_1668708166439.json";

let postsData = data.results;
console.log(postsData);
function App() {
  return (
    <>
      <Header />
      <Title content="Blog" />
      <Posts data={postsData} />
    </>
  );
}

export default App;
