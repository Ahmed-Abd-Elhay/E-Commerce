import React, { useContext } from 'react';
import "./product-display.css";
import starImage from "../Assets/star-image.png";
import darkStar from "../Assets/dark-star.png"
import { ShopContext } from '../../Context/ShopContext';


const ProductDisplay = (props) => {
    const { product } = props;

    const { addToCart } = useContext(ShopContext);

    return (
        <div className='productDisplay'>
            <div className="productDisplay-left">
                <div className="image-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="image-display">
                    <img className='main-image' src={product.image} alt="" />
                </div>
            </div>

            <div className="productDisplay-right">
                <h1>{product.name}</h1>
                <div className="right-star">
                    <img src={starImage} alt="" />
                    <img src={starImage} alt="" />
                    <img src={starImage} alt="" />
                    <img src={starImage} alt="" />
                    <img src={darkStar} alt="" />
                    <p>(150)</p>
                </div>
                <div className="price">
                    <div className="old-price">
                        ${product.old_price}
                    </div>
                    <div className="new-price">
                        ${product.new_price}
                    </div>
                </div>
                <div className="description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur alias deleniti omnis asperiores, nihil quae eos ipsam
                    iure aspernatur sint quidem magni laboriosam.
                </div>
                <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default ProductDisplay;
