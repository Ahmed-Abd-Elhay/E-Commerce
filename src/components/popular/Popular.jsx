import React from 'react';
import "./popular.css";
import Item from '../items/Item';

import dataProduct from '../Assets/data';

const Popular = () => {
    return (
        <div className='popular'>
            <h1>Popular Products</h1>
            <hr />
            <div className="popular-item">
                {dataProduct.map((item, index) => {
                    return <Item
                        key={index}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                    />
                })}
            </div>
        </div>
    )
}

export default Popular;
