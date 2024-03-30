import React, { useContext } from 'react';
import "./Css/shopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Bunner from '../components/Bunner/Bunner';
import Item from '../components/items/Item';


const ShopCategory = (props) => {
    const { allProduct } = useContext(ShopContext);
    return (
        <div className='shop-category'>
            <Bunner image={props.bunner} />
            <div className="product">Products</div>
            <div className="shopcategory-products">
                {allProduct.map((item, index) => {
                    if (props.category === item.category) {

                        return <Item
                            key={index}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}
                        />
                    } else {
                        return null;
                    };
                })}
            </div>
            <div className="more">
                Expolre More
            </div>
        </div>
    )
}

export default ShopCategory;
