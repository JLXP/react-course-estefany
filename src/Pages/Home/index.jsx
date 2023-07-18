import React, { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../components/Layout'
import Card from '../../components/Card'
import ProductDetail from '../../components/ProductDetail'


const Home = () => {
  const context = useContext(ShoppingCartContext)
  const renderView = () => {
      if (context.filteredItems?.length > 0) {
        return (
          context.filteredItems?.map((item) => {
            return <Card key={item.id} {...item} />
          })
        )
      }else{
        return(
          <div>We don´t have anything :( </div>
        )
      }
  }

  return (
    <Layout>
      <div className='flex justify-center items-center w-80 relative m-b4'>
        <h1 className='font-medium text-xl'>
          Exclusive Products
        </h1>
      </div>
      <input type="text" placeholder='Search a product' className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none' onChange={(event) => context.setSearchByTitle(event.target.value)} />
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home