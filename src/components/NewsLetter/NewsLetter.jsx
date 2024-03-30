import React from 'react';
import "./news-letter.css";

const NewsLetter = () => {
    return (
        <div className='news-letter'>
            <h1>Get Exclusive Offers on Your Email</h1>
            <p>Subscribe to Stay Updated</p>
            <div className='container'>
                <input type="email" placeholder='Your Email' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter;
