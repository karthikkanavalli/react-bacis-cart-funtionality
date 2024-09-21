import React ,{useContext, useState} from 'react'
import { CartContex } from '../../context/CartProvider'
import "./card.css"

const Card = ({ product }) => {
  const[qty, setQty] = useState(1)
  const { addToCart } = useContext(CartContex)
  
    return (
        <>
        <div className='card-container'>
          <div  className='image-container'>
          <img src={product.images[0]} alt="product-img" />
          </div>
          <div className='product-details'>
            <h3>{product.title}</h3>
            <h5>{product.description.slice(0,70)+"..."}</h5>
            <div style={{display:"flex",justifyContent:"space-around",height:"50%"}}>
              <h3>₹{product.price}</h3>
              <h3>{product.id}</h3>
            </div>
            <div className='card-btn'>
              <button onClick={() => setQty(qty+1)}>+</button>
              <h5>{qty}</h5>
              <button onClick={() => setQty((prev)=>prev>1?prev-1:prev)}>-</button>
              <button onClick={() => addToCart(product.id,qty,product)}>Add to cart</button>
            </div>
          </div>
        </div>
        
        </>
  )
}

export default Card