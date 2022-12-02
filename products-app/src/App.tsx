import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ProductList } from "./pages/products/Products";
import { Menu } from "./components";
import { Main } from "./pages/main/Main";
import { NotFound } from "./pages/not-found/NotFound";
import { ProductPage } from "./pages/products/product-page/ProductPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
