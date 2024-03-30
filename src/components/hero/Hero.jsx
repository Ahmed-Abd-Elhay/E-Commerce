import React from 'react';
import "./hero.css";
import MainPhoto from "../Assets/headphone-1.png";
import { Link } from 'react-scroll';
import arrowRight from "../Assets/arrow-right.png";


const Hero = () => {


    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>NEW ARRIVALS </h2>
                <div className="hand-icon">
                    <p>New</p>
                </div>
                <p>Collections</p>
                <p>For Everyone</p>

                {/* <div className="hero-latest-btn">Latest Collection</div> */}

                <Link
                    to="new-collections"
                    spy={true}
                    offset={50 - 60}
                    duration={500} >
                    <div className="hero-latest-btn">Latest Collection
                        <img className='arrow-right' src={arrowRight} alt="" />
                    </div>
                </Link>

            </div>
            <div className="hero-right">
                <img src={MainPhoto} alt="" />
            </div>
        </div>
    )
}

export default Hero;
