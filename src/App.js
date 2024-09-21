import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import MyNavBar from './components/MyNavBar';



const App = () => {
  return (
    <BrowserRouter>
      <MyNavBar></MyNavBar>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/products' element={<Products></Products>} ></Route>
        <Route path='/cartpage' element={<Cart></Cart>} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App