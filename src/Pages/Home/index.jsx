import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import Card from '../../components/Card'
import ProductDetail from '../../components/ProductDetail'
import { api } from '../../api'


const Home = () => {
  const [items, setItems] = useState(null);

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

  return (
    <Layout>
      <ProductDetail/>
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          items?.map((item) => {
            return <Card key={item.id} {...item} />
          })
        }
      </div>
    </Layout>
  )
}

export default Home