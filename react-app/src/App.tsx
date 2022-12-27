import {BrowserRouter, Routes, Route} from "react-router-dom"
import {routes} from "./routes/routes"

import {Provider} from "react-redux"
import {store} from "./store"

import {ThemeProvider} from "./context/ThemeContext"
import Header from "./components/Header/Header"

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <Header/>
          <Routes>
            {routes.map((route, i) =>
              <Route key={i} {...route}/>
            )}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App
