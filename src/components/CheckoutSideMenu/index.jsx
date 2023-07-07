import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import OrderCard from "../OrderCard";
import { totalPrice } from "../../utils";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id !== id);
    context.setCartProducts(filteredProducts);
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
      <div className="px-6 overflow-y-scroll">
        {
          context.cartProducts.map((product) => (
            <OrderCard key={product.id} {...product} handleDelete={handleDelete} />
          ))
        }
        <div className='px-6 '>
          <p className='flex justify-between items-center'>
            <span className='font-light'>Total:</span>
            <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
          </p>
        </div>
      </div>

    </aside>
  )
}

export default CheckoutSideMenu