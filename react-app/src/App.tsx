import {BrowserRouter, Routes, Route} from "react-router-dom"
import {ThemeProvider} from "./context/ThemeContext"

import Header from "./components/Header/Header"
import {routes} from "./routes/routes"

function App() {
  return (
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
  )
}

export default App
