import React from 'react';
import "./discription.css";

const DescriptionBox = () => {
    return (
        <div className='description-box'>
            <div className="navigator">
                <div className="nav-box">description</div>
                <div className="nav-box fade">Reviews (989)</div>
            </div>
            <div className="description">
                A website that allows people to buy and sell physical goods,
                services, and digital products over the internet rather than
                at a brick-and-mortar location. Through an e-commerce website,
                a business can process orders, accept payments,
                manage shipping and logistics, and provide customer service .
            </div>
        </div>
    )
}

export default DescriptionBox;
