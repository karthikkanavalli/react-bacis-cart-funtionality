import React, { createContext, useEffect, useReducer } from 'react'
import reducer  from "../reducer/cartReducer";


let CartContex = createContext()

let InitialState = {
  cartItems: [],
  totalItems: 0,
}

const CartProvider = ({children}) => {
  let [state, dispatch] = useReducer(reducer, InitialState)

  let clearCart = ()=>{
    dispatch({type:"CLEAR_CART",payload:{}})
  }

  let addToCart = (id,qty,item) => { 
    dispatch({type:"ADD_TO_CART", payload:{id,qty,item}})
  }
  let increment = (id,qty,item) => { 
    dispatch({type:"INCREMENT", payload:{id,qty,item}})
  }
  let decrement = (id,qty,item) => { 
    dispatch({type:"DECREMENT", payload:{id,qty,item}})
  }
  let removeItem = (id,qty,item) => { 
    dispatch({type:"REMOVE_ITEM", payload:{id,qty}})
  }

//   useEffect(() => {
//   console.log("cart items changed",state)
// },[state])


  return (
    <>
        <CartContex.Provider  value={{state,addToCart,increment,decrement,removeItem,clearCart}}>
            {children}
        </CartContex.Provider>
    </>
  )
}

export default CartProvider

export {CartContex}