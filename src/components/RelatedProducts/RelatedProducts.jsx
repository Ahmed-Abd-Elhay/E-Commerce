import React from 'react';
import "./relatedProducts.css";
import Item from "../items/Item";
import relatedProducts from "../Assets/relatedProduct";

const RelatedProducts = (props) => {
    return (
        <div className='related-products'>
            <h1>Related Products</h1>
            <hr />
            <div className="related-item">

                {relatedProducts.map((item, index) => {


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
                    }

                })}
            </div>
        </div>
    )
}

export default RelatedProducts;
