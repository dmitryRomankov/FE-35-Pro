import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ProductList } from "./pages/products/Products";
import { Menu } from "./components";
import { Main } from "./pages/main/Main";
import { NotFound } from "./pages/not-found/NotFound";
import { ProductPage } from "./pages/products/product-page/ProductPage";
import "./App.css";
import { ThemeProvider } from "./components/context/Context";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="App">
          <Menu />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
