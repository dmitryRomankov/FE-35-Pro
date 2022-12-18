import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Title } from "./components/Title";
import { Post } from "./components/Posts/post/Post";
import { Header } from "./components/header/Header";
import { Posts } from "../src/components/Posts/Posts";
import { SignIn } from "./pages/signIn/SignIn";
import { Success } from "./components/sucsess/Success";
import "./App.css";
import { RegistrationForm } from "./pages/registration/RegistrationForm";
import { ThemeContext } from "./components/context/Context";
import { HomePage } from "./pages/homePage/HomePage";
import { NotFound } from "./pages/notFound/NotFound";

function App() {
  const theme = useContext(ThemeContext);

  return (
    <BrowserRouter>
      <div
        style={{
          background: theme.light.background,
          color: theme.light.textColor,
        }}
      >
        <Header />
        <Routes>
          <Route path="/registrate" element={<RegistrationForm />}></Route>
          <Route path="/Success" element={<Success />}></Route>
          <Route
            path="/SignIn"
            element={
              <SignIn title="Sign in" name="User Name" password="Password" />
            }
          ></Route>

          <Route
            path="/posts"
            element={
              <>
                <Title content="Blog" />
                <Posts />
              </>
            }
          ></Route>
          <Route
            path="/"
            element={<HomePage title={"Welcome to blog"}></HomePage>}
          ></Route>
          <Route path={`posts/:id`} element={<Post />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
