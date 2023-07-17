import { useContext } from "react"
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context"
import OrderCard from "../OrderCard";
import { totalPrice } from "../../utils";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id !== id);
    context.setCartProducts(filteredProducts);
  }

  const handleCheckout = () => {
    const orderToAdd = {
      data: '01.02.23',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }
    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
    context.setCount(0);
  }

  return (
    <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col z-[99999] fixed right-0 border border-black rounded-lg w-[360px] bg-white h-[calc(100vh-68px)]`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div className="cursor-pointer" onClick={() => context.toggleCheckoutSideMenu()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </div>
      <div className="px-6 overflow-y-scroll flex-1">
        {
          context.cartProducts.map((product) => (
            <OrderCard key={product.id} {...product} handleDelete={handleDelete} />
          ))
        }
      </div>
      <div className='px-6 mb-6'>
        <p className='flex justify-between items-center mb-2'>
          <span className='font-light'>Total:</span>
          <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
        </p>
        <Link to='my-orders/last'>
          <button className='bg-black py-3 text-white w-full rounded' onClick={() => handleCheckout()}>
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu