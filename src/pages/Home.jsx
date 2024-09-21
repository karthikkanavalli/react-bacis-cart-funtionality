import React, { useContext } from 'react'
import { ProductContex } from '../context/ProductsProvider'

const Home = () => {
  let products = useContext(ProductContex)
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", justifyContent: "center" , margin: "20px" }}>
      {
        products.map((product) => {
          return <img src={product.images[0]} style={{ width: "100px", height: "100px" }} alt={product.title} key={product.id} />
        })
      }
    </div>
  )
}

export default Home