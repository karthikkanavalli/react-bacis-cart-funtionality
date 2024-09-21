import React, { createContext, useEffect, useState } from 'react'
import axios   from "axios";


let ProductContex = createContext()

const ProductsProvider = ({children}) => {
 let [Products, setProducts] = useState([])

  let getData = async () => {
    let result = await axios.get("https://dummyjson.com/products");
    setProducts(result.data.products);
  }
    
  // let category = Products.map((item) => item.category);

  // console.log(category);
  // console.log(category.filter(item => item !== "beauty").length);

  useEffect(()=> {
  getData()
  }, [])
  
  return (
    <ProductContex.Provider value={Products}>
      {children}
    </ProductContex.Provider>
  )
}

export default ProductsProvider
export {ProductContex}