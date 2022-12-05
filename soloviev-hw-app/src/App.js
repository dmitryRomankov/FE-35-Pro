import { React } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Main } from "./pages/main/Main";
import { Menu } from "./components/Menu";
import { menuLinks } from "./constants";
import { CardList } from "./pages/posts/CardList";
import { CardPage } from "./pages/posts/card-page/CardPage";
import { Registration } from "./pages/sign-in/Registration";
import { useState } from "react";
import { Success } from "./pages/success/Success";
import { PageNotFound } from "./pages/page-not-found/PageNotFound";
import { ThemeContextProvider } from "./components/Context/Context";
// import { ThemeContext } from "./components/Context/Context";

import './App.css';

function App() {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuChange = () => {
    setMenuActive(!menuActive)
  }

  const Favorites = () => <div><h2>Favorites posts</h2></div>

  return (
    <BrowserRouter>
      <div className="App">
        <ThemeContextProvider>
            <Header items={menuLinks} menuActive={menuActive} onMenuChange={handleMenuChange}></Header>
        </ThemeContextProvider>
        <Menu items={menuLinks} menuActive={menuActive} setActive={setMenuActive}/>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/posts" element={<CardList/>}/>
          <Route path="/posts/:id" element={<CardPage/>}/>
          <Route path="/sign-in" element={<Registration/>}/>
          <Route path="/success" element={<Success/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
          <Route path="/*" element={<PageNotFound />}/>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
