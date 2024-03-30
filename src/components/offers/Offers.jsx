import React from 'react';
import "./offers.css";
// import exculsive_image from "../Assets/exclusive_image.png";
import { Link } from 'react-router-dom';
import exculsive_image from "../Assets/headphones_2.png";

const Offers = () => {
    return (
        <div className='offers'>
            <div className="offers-right">
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <Link to="/headphone">
                    <button>Check Now</button>
                </Link>
            </div>
            <div className="offers-left">
                <img src={exculsive_image} alt="" />
            </div>
        </div>
    )
}

export default Offers;
