import React from 'react';
import './App.scss';
import Title from "./components/Title/Title";
import Burger from "./components/Burger/Burger";
import Header from "./components/header/Header";
import Card from "./components/Card/Card";
import db from './db.json'

console.log(db.results)
export interface IModels {
    id?: number
    title: string
    text: string
    date: string
    image: string
    lesson_num?: number
    author?: number
}




function App() {
  return (
   <>
       <Header>
        <Title text='Sign In'></Title>
           <Burger/>
       </Header>
       <div className='main'>
       {db.results.map(({ id, ...rest }: IModels, i) => <Card key={id} {...rest}  />)}
       </div>
   </>
  );
}

export default App;
