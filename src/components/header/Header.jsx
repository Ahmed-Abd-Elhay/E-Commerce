import React, { useContext, useState } from 'react';
import "./header.css";
import Logo from "../Assets/logo-markety.png";
import cart from "../Assets/cart-icon.png";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';


const Header = () => {

    const [menu, setMenu] = useState("shop");

    const { getTotalCartItems } = useContext(ShopContext);

    const [burgerClass, setBurgerClass] = useState("overflow");

    const [closeIcon, setCloseIcon] = useState("icon");

    function updateIcon() {
        if (burgerClass === "overflow") {
            setBurgerClass("overflow checked");
            setCloseIcon("icon close");
        } else {
            setBurgerClass("overflow");
            setCloseIcon("icon");
        }
    };

    return (
        <div className='header'>
            <div className="navbar">
                <div className="logo">
                    <Link to="/" className='link-text'>
                        <img src={Logo} alt="logo_photo"
                            onClick={() => { setMenu("shop") }}
                            className="photo-logo" />
                    </Link>
                    <Link to="/" className='link-text'>
                        <h1 onClick={() => { setMenu("shop") }}>MARKETY</h1>
                    </Link>
                </div>

                <ul className="links">
                    <li
                        className={menu === "shop" ? "active" : null}
                        onClick={() => { setMenu("shop") }}>
                        <Link to="/" className='link-text'>
                            Shop
                        </Link>
                        {menu === "shop" ? <hr /> : null}
                    </li>
                    <li
                        className={menu === "headphones" ? "active" : null}
                        onClick={() => { setMenu("headphones") }}>
                        <Link to="/headphone" className='link-text'>
                            Headphone
                        </Link>
                        {menu === "headphones" ? <hr /> : null}
                    </li>
                    <li
                        className={menu === "laptops" ? "active" : null}
                        onClick={() => { setMenu("laptops") }}>
                        <Link className='link-text' to="/laptop">
                            Laptop
                        </Link>
                        {menu === "laptops" ? <hr /> : null}
                    </li>
                    <li
                        className={menu === "Keyboards" ? "active" : null}
                        onClick={() => { setMenu("Keyboards") }}>
                        <Link to="/Keyboard" className='link-text'>
                            Keyboard
                        </Link>
                        {menu === "Keyboards" ? <hr /> : null}
                    </li>
                    <li
                        className={menu === "Mouse" ? "active" : null}
                        onClick={() => { setMenu("Mouse") }}>
                        <Link to="/Mouse" className='link-text'>
                            Mouse
                        </Link>
                        {menu === "Mouse" ? <hr /> : null}
                    </li>
                </ul>

                <div className="login-cart">
                    <Link to="/login" className='link-text'>
                        <button>Login</button>
                    </Link>
                    <Link to="/cart" className='link-text'>
                        <img src={cart} alt="" />
                    </Link>
                    <div className="counter-cart">{getTotalCartItems()}</div>

                    <div className="burger-icon">

                        <div className={closeIcon} onClick={updateIcon} >
                            <div className='first'></div>
                            <div className='second'></div>
                            <div className='last'></div>
                        </div>

                        <div className={burgerClass}>
                            <ul className="links-burger">
                                <li
                                    className="shop"
                                    onClick={() => {
                                        setMenu("shop");
                                        setBurgerClass("overflow");
                                        setCloseIcon("icon");
                                    }}>
                                    <Link to="/" className='link-texts'>
                                        Shop
                                    </Link>

                                </li>
                                <li
                                    className="headphones"
                                    onClick={() => {
                                        setMenu("headphones");
                                        setBurgerClass("overflow");
                                        setCloseIcon("icon");
                                    }}>
                                    <Link to="/headphone" className='link-texts'>
                                        Headphone
                                    </Link>

                                </li>
                                <li
                                    className="laptops"
                                    onClick={() => {
                                        setMenu("laptops");
                                        setBurgerClass("overflow");
                                        setCloseIcon("icon");
                                    }}>
                                    <Link className='link-texts' to="/laptop">
                                        Laptop
                                    </Link>

                                </li>
                                <li
                                    className="Keyboards"
                                    onClick={() => {
                                        setMenu("Keyboards");
                                        setBurgerClass("overflow");
                                        setCloseIcon("icon");
                                    }}>
                                    <Link to="/Keyboard" className='link-texts'>
                                        Keyboard
                                    </Link>
                                </li>
                                <li
                                    className="Mouse"
                                    onClick={() => {
                                        setMenu("Mouse");
                                        setBurgerClass("overflow");
                                        setCloseIcon("icon");
                                    }}>
                                    <Link to="/Mouse" className='link-texts'>
                                        Mouse
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Header;
