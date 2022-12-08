import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import { ProductList } from "./pages/products/Products";
import { Menu } from "./components";
import { Main } from "./pages/main/Main";
import { NotFound } from "./pages/not-found/NotFound";
import { ProductPage } from "./pages/products/product-page/ProductPage";
import { ThemeContext, ThemeProvider } from "./components/context/Context";
import { themeSelector } from "./store/selectors";
import { Posts } from "./pages/posts/Posts";
import "./App.css";

function App() {
  const theme = useSelector(themeSelector, (prevState, nextState) => {
    console.log("prevState", prevState);
    console.log("nextState", nextState);
    if (prevState === nextState) return true;
    return false;
  });

  const context = useContext(ThemeContext);
  const styles = {
    background: context[theme].background,
    color: context[theme].textColor,
  };

  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="App" style={styles}>
          <Menu />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
