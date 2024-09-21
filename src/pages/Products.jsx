import React from 'react'
import { useContext } from 'react'
import { ProductContex } from '../context/ProductsProvider';
import Card from '../components/card/Card';


const Products = () => {
  let product = useContext(ProductContex);
 
  return (
    <>
      <h1 style={{textAlign:"center",margin:"30px"}}> Produts </h1>
      <div style={{ display: "flex", flexWrap: "wrap",margin:"20px" , gap:"40px",justifyContent:"center"}}>
        {product?.map((product) => {
          return (
            <Card product={product} key={product.id} />
          )
        })}
      </div>
    </>
  );
}

export default Products