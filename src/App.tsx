import { BrowserRouter } from "react-router-dom"
import { Menu } from "./components/Menu"
import { AppRoutes } from "./routes"
import { globalStyles } from "./util/globalStyle"

function App() {
  globalStyles()
  return (
    <BrowserRouter>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Menu />
        <AppRoutes />
      </div>
    </BrowserRouter>
  )
}

export default App
