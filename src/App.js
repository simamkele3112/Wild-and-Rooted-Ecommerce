import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import Food from './Pages/Food';
import About from './Components/About';
import CartProvider  from './Pages/cartContext';
import Cart from './Pages/Cart';
import Orders from './Pages-Staff/Orders';
import Menu from './Components/Menu';
import Inventory from './Pages-Staff/Inventory';
import Vegetable from './Pages/vegetables';
import Fruits from './Pages/Fruits';
import axios from 'axios'

const apiCall = () => {
  axios.get('http://localhost:8080').then((data) => {
    console.log(data)
  })
}
function App() {
  return (
    <CartProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Inventory" element={<Inventory />} />
            <Route path="/Orders" element={<Orders />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/Categories/Fruits" element={<Fruits />} />
            <Route path="/Categories/Food" element={<Food />} />
            <Route path="/Categories/Vegetables" element={<Vegetable />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
