import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContex } from '../context/CartProvider'

let myStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  backgroundColor: "black",
  padding: "10px",
}
let btnStyle = {
  backgroundColor: "acqua",
  color: "black",
  border: "none",
  width: "100px",
  padding: "10px",
  fontSize: "20px",
  fontweight: "800",
  borderRadius: "5px",
  cursor: "pointer",
}
const MyNavBar = () => {
  let nav = useNavigate()
  let { state } = useContext(CartContex)
  
  return (
      <div style={myStyle}>
          <button style={btnStyle} onClick={()=>{nav("/")}}>Home</button>
          <button style={btnStyle} onClick={()=>{nav("/products")}}>Products</button>
      <button style={btnStyle} onClick={() => { nav("/cartpage") }}>Cart {state.totalItems}</button>
    </div>
  )
}

export default MyNavBar