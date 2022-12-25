import {BrowserRouter, Routes, Route} from "react-router-dom"

import {ThemeProvider} from "./context/ThemeContext"
import {Provider} from "react-redux"

import {store} from "./store"

import ErrorBoundary from "./components/errorboundary/ErrorBoundary"
import Header from "./components/header/Header"
import Nav from "./components/header/Nav"


import Home from "./pages/Home"
import Blog from "./pages/blog/Blog"
import SelectedPost from "./pages/blog/SelectedPost"
import SignIn from "./pages/SignIn"
import NotFound from "./pages/NotFound"

import './styles/reset.scss'
import './styles/global.scss'
import './styles/buttons.scss'

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ThemeProvider>
          <Provider store={store}>
            <Header>
              <Nav/>
            </Header>

            <Routes>
              <Route path={'/'} element={<Home/>}/>
              <Route path={'/blog'} element={<Blog/>}/>
              <Route path={'/blog/:id'} element={<SelectedPost/>}/>
              <Route path={'/signIn'} element={<SignIn/>}/>
              <Route path={'/*'} element={<NotFound/>}/>
            </Routes>
            </Provider>
        </ThemeProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
