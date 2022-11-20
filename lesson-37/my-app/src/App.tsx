import React, { useState } from 'react';

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";



const Input = ({ handleChange, value }) => <input onChange={handleChange} defaultValue={value} type="text" />;

function App() {

  return (
    <>
      <Header></Header>

      <Main />
      

      <Footer />

    </>
  );
}

export default App;
