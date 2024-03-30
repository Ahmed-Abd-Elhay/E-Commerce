import React from 'react';
import "./footer.css";
import logoMarket from "../Assets/logo-markety.png";
import instgramIcon from "../Assets/instagram-icon.png";
import pintrastIcon from "../Assets/pinterest-icon.png";
import whatsapIcon from "../Assets/whatsa.png";


const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={logoMarket} alt="" />
                <p>MARKETY</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social">
                <div className="icons">
                    <img src={instgramIcon} alt="" />
                </div>
                <div className="icons">
                    <img src={pintrastIcon} alt="" />
                </div>
                <div className="icons">
                    <img src={whatsapIcon} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer;
