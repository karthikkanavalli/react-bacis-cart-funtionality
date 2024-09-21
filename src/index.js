import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ProductsProvider from './context/ProductsProvider';
import CartProvider from './context/CartProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductsProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ProductsProvider>
);









