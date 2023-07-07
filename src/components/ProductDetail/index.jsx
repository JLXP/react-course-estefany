import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  const {title, description,image,price} = context.productToShow;
  return (
    <aside className={`${context.isProductDetailOpen ? 'flex':'hidden'} flex-col z-[9999] fixed right-0 border border-black rounded-lg w-[360px] bg-white h-[calc(100vh-68px)]`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div className="cursor-pointer" onClick={()=>context.toggleProductDetail()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </div>
      <figure className="px-6">
        <img className="w-full h-full rounded" src={image} alt={title}/>
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">{price}</span>
        <span className="font-medium text-md">{title}</span>
        <span className="font-light text-sm">{description}</span>
      </p>
    </aside>
  )
}

export default ProductDetail