import { createContext } from "react"

//se crea el context
const ShoppingCartContext = createContext()

//se crea el provider el cual crea el state
export const ShoppingCartProvider = ({children}) =>{
    return (
        <ShoppingCartContext.Provider>
            {children}
        </ShoppingCartContext.Provider>
    )
}