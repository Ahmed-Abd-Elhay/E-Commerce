import React, { useContext } from 'react';
import "./cartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import removeIcon from "../Assets/remove-icon.png";

const CartItems = () => {

    const { getTotalCartAmount, allProduct, cartItem, removeFromCart } = useContext(ShopContext);

    return (
        <div className='cart-items'>
            <div className="main-format">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {allProduct.map((e) => {
                if (cartItem[e.id] > 0) {
                    return <div>
                        <div className="format main-format">
                            <img src={e.image} alt="" className='product-icon' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className="quantity">{cartItem[e.id]}</button>
                            <p>${e.new_price * cartItem[e.id]}</p>
                            <img className='remove-icon'
                                onClick={() => { removeFromCart(e.id) }}
                                src={removeIcon} alt="" />
                        </div>
                        <hr />
                    </div>
                }
                return null;
            })}
            <div className="cart-down">
                <div className="cart-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cart-total-item">
                            <p>Subtatal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-item">
                            <p>Shiping Free</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cart-total-item">
                            <h3>Total</h3>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cart-ptomocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="promo-box">
                        <input type="text" placeholder='Promo Code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems;
