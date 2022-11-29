import React from 'react'

import {ThemeProvider} from "./context/ThemeContext"

import Header from "./components/Header/Header"
import Blog from "./pages/blog"
import Read from "./pages/blog/read"
import SignIn from "./pages/signIn"

function App() {
  return (
    <ThemeProvider>
      <Header/>
      <Blog/>
      <Read/>
      <SignIn/>
    </ThemeProvider>
  )
}

export default App
