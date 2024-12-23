import React, { useState } from 'react';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Category from './Category';
import Home from './Home';
import Addcart from './Addcart';
import CRUD from './CRUD';
import DELETE from './Delete';
import UPDATE from './Update';
import Fruit from './Fruit';
import Cooldrinks from './Cooldrinks';
import Meat from './Meat';
import Vegetables from './Vegetables';
import Dairyproducts from './Dairyproducts';
import Pantry from './Pantry';
import Snacks from './Snacks';

const App = () => {
  const [cart, setCart] = useState([]); // State to manage the cart items

  // Function to add items to the cart
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]); // Add item to cart
  };

  // Function to remove items from the cart
  const removeFromCart = (indexToRemove) => {
    setCart((prevCart) => prevCart.filter((_, index) => index !== indexToRemove));
  };

  return (
    <BrowserRouter>
      <Navbar cartCount={cart.length} /> {/* Pass cart count to Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/fruit" element={<Fruit addToCart={addToCart} />} />
        <Route path="/vegetables" element={<Vegetables addToCart={addToCart} />} />
        <Route path="/dairyproducts" element={<Dairyproducts addToCart={addToCart} />} />
        <Route path="/cooldrinks" element={<Cooldrinks addToCart={addToCart} />} />
        <Route path="/meat" element={<Meat addToCart={addToCart} />} />
        <Route path="/snacks" element={<Snacks addToCart={addToCart} />} />
        <Route path="/pantry" element={<Pantry addToCart={addToCart} />} />
        <Route path="/cart" element={<Addcart cart={cart} onRemove={removeFromCart} />} /> {/* Pass removeFromCart */}
        <Route path="/crud" element={<CRUD />} />
        <Route path="/delete" element={<DELETE />} />
        <Route path="/update" element={<UPDATE />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
