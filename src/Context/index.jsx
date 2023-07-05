import { createContext, useState } from "react"

//se crea el context o state
export const ShoppingCartContext = createContext()

//se crea el provider el cual crea el state
export const ShoppingCartProvider = ({ children }) => {
    const [count, setCount] = useState(0)
    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}