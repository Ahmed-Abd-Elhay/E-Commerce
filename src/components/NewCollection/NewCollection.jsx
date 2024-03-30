import React from 'react';
import "./new-collection.css";
import newCollection from '../Assets/new_Collection';
import Item from '../items/Item';

const NewCollection = () => {
    return (
        <div className='new-collection' id='new-collections'>
            <h1>new collections</h1>
            <hr />
            <div className="collections">
                {newCollection.map((item, index) => {
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

export default NewCollection;
