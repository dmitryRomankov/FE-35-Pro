import React from 'react';
import { Title } from './components/title/title';
import { Hamburger } from './components/burger/Hamburger';
import Search from './components/search/search';
import { Post } from "./components/post/post";
import { Article } from "./components/article/article";
import './App.css';
import data from "./response_1668708166439.json";

let Data = data.results;


function App() {
  return (
    <div className='container'>
      <nav className='header'>
        <Hamburger/>
        <Search/>
      </nav>
      
      <main>
      <Post data={Data[0]} />
      <Article data={Data[0]}/>
      </main>

    </div>
  );
}

export default App;
