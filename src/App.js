
 import React from 'react';
 import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Footer from './components/Footer/Footer';
import men_banner from './components/Assets/banner_mens.png';
import women_banner from './components/Assets/banner_women.png';
import kid_banner from './components/Assets/banner_kids.png';
import ShopContextProvider from './context/ShopContext';





function App() {
  return (
    <div>
      <ShopContextProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory banner={men_banner} category="Men" />} />
        <Route path="/womens" element={<ShopCategory banner={women_banner} category="Women" />} />
        <Route path="/kids" element={<ShopCategory  banner={kid_banner} category="Kid" />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:productId" element={<Product />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />





      </Routes>
      <Footer/>
      
      </BrowserRouter>
      </ShopContextProvider>
      
  
    </div>
    
  );
}

export default App;
