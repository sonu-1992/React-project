import React from 'react';
import Header from './components/header';
import Contact from './pages/ContactUs/Contact';
import About from './pages/AboutUs/About';
import Home from './pages/OurHome/Home';
import Product from './pages/Product/Product';

import {
BrowserRouter,
Routes,
Route }
 from 'react-router-dom';

function App(){

  return (
  <div className='Head'>
    <Header />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
    </Routes>
    
  </div>);
}

export default App;