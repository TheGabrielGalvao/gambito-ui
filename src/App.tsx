import { BrowserRouter } from "react-router-dom"
import { Menu } from "./components/Menu"
import { NavigationProvider } from "./hooks/useNavigation"
import { AppRoutes } from "./routes"
import { globalStyles } from "./util/globalStyle"

function App() {
  globalStyles()
  return (
    <NavigationProvider>
        <Menu />
        <AppRoutes />
    </NavigationProvider>
  )
}

export default App
