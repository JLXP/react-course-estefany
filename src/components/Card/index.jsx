import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

const Card = ({ id, title, price, description, category, image }) => {
    const context = useContext(ShoppingCartContext)

    const showProduct = () => {
        if (!context.isProductDetailOpen) context.toggleProductDetail()
        if (context.isCheckoutSideMenuOpen) context.toggleCheckoutSideMenu()
        context.setProductToShow({ id, title, price, description, category, image })
    }

    const addProductsToCart = (e) => {
        e.stopPropagation();
        if (!context.isCheckoutSideMenuOpen) context.toggleCheckoutSideMenu()
        if (context.isProductDetailOpen) context.toggleProductDetail()
        context.setCartProducts([...context.cartProducts, { id, title, price, description, category, image }])
        context.setCount(context.count + 1)
    }

    const renderIcon = (productId) => {

        const isInCart = context.cartProducts.filter((product) => product.id === productId).length > 0;

        if (isInCart) {
            return (
                <div className='absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                </div>
            )
        } else {
            return (
                <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2' onClick={(e) => addProductsToCart(e)}>
                    <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                    </svg>
                </div>
            )
        }
        return;
    }

    return (
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg' onClick={() => showProduct()}>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{category}</span>
                <img className='w-full h-full object-cover rounded-lg' src={image} alt={title} />
                {renderIcon(id)}
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{title}</span>
                <span className='text-sm font-medium'>${price}</span>
            </p>
        </div>
    )
}

export default Card;