import React from 'react'

import {ThemeProver} from "./context/ThemeContext"

import Header from "./components/Header/Header"
import Blog from "./pages/blog"
import Read from "./pages/blog/read"
import SignIn from "./pages/signIn"

function App() {
  return (
    <ThemeProver>
      <Header/>
      <Blog/>
      <Read/>
      <SignIn/>
    </ThemeProver>
  )
}

export default App
