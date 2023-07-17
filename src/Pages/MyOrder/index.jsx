import { useContext } from "react"
import { Link } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import Layout from '../../components/Layout'
import OrderCard from '../../components/OrderCard'


const MyOrder = () => {

  const context = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname
  //En este apartado obtiene el id mediante la url
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if (index === 'last') index = context.order?.length - 1
  //Recupera el order dependieno del id asignado
  const latestOrderProducts = context.order?.[index].products || []


  return (
    <Layout>
      <div className='flex justify-center items-center w-80 relative mb-6'>
        <Link to='/my-orders' className='absolute left-0'>
          <div className="cursor-pointer" onClick={() => handleDelete(id)} >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </div>
        </Link>
        <h1>
          MyOrder
        </h1>
      </div>
      <div className="flex flex-col w-80">
        {
          latestOrderProducts?.map(product => (
            <OrderCard key={product.id} {...product} />
          ))
        }
      </div>
    </Layout>
  )
}

export default MyOrder