import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ProductList } from "./pages/products/Products";
import { Menu } from "./components";
import { Main } from "./pages/main/Main";
import { NotFound } from "./pages/not-found/NotFound";
import { ProductPage } from "./pages/products/product-page/ProductPage";
import { ThemeContext, ThemeProvider } from "./components/context/Context";
import { themeSelector } from "./store/selectors";
import { Posts } from "./pages/posts/Posts";
import { Registration } from "./pages/registration";
import "./App.css";
import { Activate } from "./pages/activate/Activate";
import { CreatePost } from "./pages/create-post";
import { useAppSelector } from "./store/store";

function App() {
  const theme = useAppSelector(themeSelector, (prevState, nextState) => {
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
            <Route path="/registration" element={<Registration />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/create" element={<CreatePost />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/activate/:uid/:token" element={<Activate />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
