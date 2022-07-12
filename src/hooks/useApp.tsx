import { useContext } from "react"
import { AppContext } from "../contexts/AppProvider"

export const useApp = () => {
    const context = useContext(AppContext)

    return context
}
