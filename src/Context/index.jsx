import { createContext, useState, useEffect } from "react"
import { api } from "../api"

//se crea el context o state
export const ShoppingCartContext = createContext()

//se crea el provider el cual crea el state
export const ShoppingCartProvider = ({ children }) => {
    // Shopping Cart . Increment quanty
    const [count, setCount] = useState(0)

    //Get products
    const [items, setItems] = useState(null)

    const [filteredItems, setFilteredItems] = useState(null)

    //Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null)

    //Get Products by Category
    const [searchByCategory, setSearchByCategory] = useState(null)

    //Product Detail . Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const toggleProductDetail = () => setIsProductDetailOpen(!isProductDetailOpen)

    //Product Detail . Show Product
    const [productToShow, setProductToShow] = useState({})

    //Shopping Cart . Add products to cart
    const [cartProducts, setCartProducts] = useState([])

    //Checkout Side Menu . Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const toggleCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(!isCheckoutSideMenuOpen)

    //Shopping Cart . Order
    const [order, setOrder] = useState([])



    //funcion para obtener el api
    const fetchData = async () => {
        try {
            const response = await fetch(`${api}/products`)
            const data = await response.json()
            setItems(data)
        } catch (error) {
            console.error(`Oh no, ocurrió un error: ${error}`);
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title?.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredItemsByCategory = (items, searchByCategory) => {
        console.log(items)
        return items?.filter(item => item.category?.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if (searchType === 'BY_TITLE') {
            return filteredItemsByTitle(items, searchByTitle)
        }

        if (searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory)
        }

        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title?.toLowerCase().includes(searchByTitle.toLowerCase()))
        }

        if (!searchType) {
            return items
        }

    }

    useEffect(() => {
        if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
        if (searchByCategory && !searchByTitle) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
        if (!searchByCategory && !searchByTitle) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
        
    }, [items, searchByTitle, searchByCategory]);

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
            setOrder,
            items,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            searchByCategory,
            setSearchByCategory
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}