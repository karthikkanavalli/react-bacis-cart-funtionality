import React,{useContext} from "react";
import "./cartcard.css";
import { CartContex } from "../../context/CartProvider";
const CartCard = ({ product }) => {
  const {increment,decrement,removeItem} = useContext(CartContex)
  return (
    <>
      <div className="cart-card-container ">
        <div className="cart-card-wrapper">
          <div className="card-image-container">
            <img src={product.images[0]} alt="product-img" />
          </div>
          <div className="cart-btns-wrapper">
            <div className="cart-card-btn">
              <button onClick={() => increment(product.id,product.qty,product)}>+</button>
              <h5>{product.qty}</h5>
              <button onClick={() => decrement(product.id,product.qty,product)}>-</button>
              <button className="remove" onClick={() => removeItem(product.id,product.qty)}>
                Remove
              </button>
            </div>
          </div>
        </div>
        <div className="cart-itemDetails-amount">
          <h3>{product.title}</h3>
          <h5>{product.description.slice(0, 70) + "..."}</h5>
          <h3>₹{product.price}</h3>
          <h3>{product.id}</h3>
          <div
            style={{
              textAlign: "center",
              backgroundColor: "yellow",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <h2
              style={{
                color: "black",
                width: "200px",
              }}
            >
              ₹{product.price * product.qty}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCard;
