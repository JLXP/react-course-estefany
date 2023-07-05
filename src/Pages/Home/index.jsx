import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import Card from '../../components/Card'
import { api } from '../../api'

const Home = () => {
  const [items, setItems] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`${api}/products`)
      const data = await response.json()
      console.log(data)
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
      {
        items?.map((item) => {
           return <Card key={item.id} data={item} />
        })
      }

    </Layout>
  )
}

export default Home