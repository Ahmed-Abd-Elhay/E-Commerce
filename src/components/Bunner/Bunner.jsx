import React from 'react';
import "./bunner.css";

const Bunner = (props) => {
    return (
        <div className='bunner'>
            <div className='container'>
                <div className='text'>
                    <h1>FLAT 50% OFF</h1>
                    <p><span>12</span> Hours <span>20</span> Mins</p>
                    <button>Explore Now</button>
                </div>

                <img src={props.image} alt="" />

            </div>
        </div>
    )
}

export default Bunner
