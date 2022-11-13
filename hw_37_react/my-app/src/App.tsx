import React from 'react';
import { Title } from './components/Title';
import { Tabs } from './components/Tabs';



function App() {
  return (
    <>
    <div>My app</div>
    <Title>Sign in</Title>
    <Tabs>All</Tabs>
    <Tabs>My Favourites</Tabs>
    <Tabs>Popular</Tabs>
    </>
  );
}



export default App;
