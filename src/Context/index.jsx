import { createContext, useState } from "react"

//se crea el context o state
export const ShoppingCartContext = createContext()

//se crea el provider el cual crea el state
export const ShoppingCartProvider = ({ children }) => {
    // Shopping Cart . Increment quanty
    const [count, setCount] = useState(0)

    //Product Detail . Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const toggleProductDetail = () =>  setIsProductDetailOpen(!isProductDetailOpen)

    //Product Detail . Show Product
    const [productToShow, setProductToShow] = useState({})

    //Shopping Cart . Add products to cart
    const [cartProducts, setCartProducts] = useState([])

    //Checkout Side Menu . Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const toggleCheckoutSideMenu = () =>  setIsCheckoutSideMenuOpen(!isCheckoutSideMenuOpen)

    //Shopping Cart . Order
    const [order, setOrder] = useState([])

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            toggleProductDetail,
            setProductToShow,
            productToShow, 
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            toggleCheckoutSideMenu,
            order,
            setOrder

        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}