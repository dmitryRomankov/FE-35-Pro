import React from "react";
import { Title } from "./components/Title";
import { Post } from "../src/components/Post/Post";
import { Header } from "../src/components/Header/Header";
import { Posts } from "../src/components/Posts/Posts";
import { SignIn } from "../src/components/SignIn/SignIn";
import { Success } from "../src/components/Sucsess/Success";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import data from "./response_1668708166439.json";
import { RegistrationForm } from "./components/registration/RegistrationForm";
export let postsData = data.results;

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RegistrationForm />
      <Routes>
        <Route path="/Success" element={<Success />}></Route>
        <Route
          path="/SignIn"
          element={
            <SignIn title="Sign in" name="User Name" password="Password" />
          }
        ></Route>
        <Route
          path="/"
          element={
            <>
              <Title content="Blog" />
              <Posts data={postsData} />
            </>
          }
        ></Route>
        <Route path={`post/:id`} element={<Post data={postsData[0]} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
