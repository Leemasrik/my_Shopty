import React,{useContext, useState} from 'react';
import './Navbar.css';

import logo from '../Assets/logo.png';

import cartIcon from '../Assets/cart_icon.png';

import {Link} from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';




 const Navbar = () => {
   const [menu,setMenu]=useState("Shop");
   const {getTotalCartItems }= useContext(ShopContext );
  return (
     <div className="navbar">
      <div className="navLogo">
        <img src={logo} alt="logo" />
        <p>SHOPTY</p>
      </div>

      <ul className="navMenu">
        <li onClick={() => setMenu("Shop")}>
          <Link to="/" style={{textDecoration:'none',color:'black'}}>Shop</Link> {menu === "Shop" && <hr />}
        </li>
        <li onClick={() => setMenu("Men")}>
          <Link to="/mens" style={{textDecoration:'none',color:'black'}}>Men</Link> {menu === "Men" && <hr />}
        </li>
        <li onClick={() => setMenu("Women")}>
          <Link to="/womens" style={{textDecoration:'none',color:'black'}}>Women</Link> {menu === "Women" && <hr />}
        </li>
        <li onClick={() => setMenu("Kids")}>
          <Link to="/kids" style={{textDecoration:'none',color:'black'}}>Kids</Link> {menu === "Kids" && <hr />}
        </li>
      </ul>
         <div className="nav-login-cart">
              <Link to='/login'> <button>Login</button></Link>
                <Link to='/cart'><img src={cartIcon} alt="" /></Link>
               <div className="nav-cart-count">{getTotalCartItems()} </div>
             </div>
      
    </div>
  )


     
  
}
export default Navbar;
