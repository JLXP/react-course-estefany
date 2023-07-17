import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import OrdersCard from '../../components/OrdersCard'
import Layout from '../../components/Layout'

function MyOrders() {
  const context = useContext(ShoppingCartContext)
  return (
    <Layout>
      <div className='flex justify-center items-center w-80 relative m-b4'>
        <h1 className='font-medium text-xl'>
          MyOrders
        </h1>
      </div>
      {
        context.order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard  {...order} />
          </Link>
        ))
      }
    </Layout>
  )
}

export default MyOrders