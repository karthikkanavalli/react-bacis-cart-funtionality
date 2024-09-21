import React, { useContext } from "react";
import { CartContex } from "../context/CartProvider";
import CartCard from "../components/cartItemsCard/CartCard";

const Cart = () => {
  const { state, clearCart } = useContext(CartContex);
  const cartItems = state.cartItems;
  return (
    <>
      <div
        style={{
          width: "100%",
          textAlign: "center",
          height: "100px",
          margin: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <h1>Cart Page</h1>
        {cartItems.length ? (
          <button
            style={{
              backgroundColor: "crimson",
              color: "white",
              borderRadius: "5px",
              padding: "10px",
              width: "200px",
              height: "40px",
              border: "none",
              fontSize: "20px",
            }}
            onClick={() => clearCart()}
          >
            Clear Cart
          </button>
        ) : null}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CartCard product={item} key={item.id} />;
          })
        ) : (
          <>
            <div
              style={{
                margin: "150px",
                border: " 4px double black",
                borderRadius: "5px",
                width: "300px",
                height: "100px",
                display: "grid",
                placeItems: "center",
              }}
            >
              <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
                cart is empty
              </h1>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
