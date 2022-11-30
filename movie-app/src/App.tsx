import React from 'react';
import logo from './logo.svg';
import { ProductList } from './pages/products/Products';
import { Menu } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <ProductList />
    </div>
  );
}

export default App;
