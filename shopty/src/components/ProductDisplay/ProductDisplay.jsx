import React, {useContext} from 'react'
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import {ShopContext} from '../../context/ShopContext';
 const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img'  src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>


            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-prices-old">${product.old_price}</div>
                <div className="productdisplay-right-prices-new">${product.new_price}</div>

            </div>
            <div className="productdisplay-right-description">
                A lightweight usually knitted, pullover shirt, close-fitting and a round neckline and short sleeves, worn as an undershirt or outer garment.

            </div>
            <div className="productdisplay-right-size">
                <h1>Select size</h1>
                <div className="productdisplay-right-size-list">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXl</div>
                </div>


            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <div className="productdisplay-category-both">
            <p className="productdisplay-right-category">
                <span>Category: </span>Women,T-shirt,crop-top
            </p>
            <p className="productdisplay-right-tag">
                <span>Tags: </span>modern,latest
            </p>
            </div>
        </div>
    </div>
  )
}
export default ProductDisplay;

