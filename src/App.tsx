import { BrowserRouter } from "react-router-dom"
import { AppProvider } from "./contexts/AppProvider"
import { AppRoutes } from "./routes"
import { globalStyles } from "./util/globalStyle"

function App() {
  globalStyles()
  return (
    <AppProvider>
        <AppRoutes />
    </AppProvider>
  )
}

export default App
