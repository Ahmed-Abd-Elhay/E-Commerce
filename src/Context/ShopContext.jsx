import React, { createContext, useState } from "react";
import allProduct from "../components/Assets/allProducts";

export const ShopContext = createContext(null);

const getDefaultValue = () => {
    let cart = {};
    for (let i = 0; i < allProduct.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [cartItem, setCartItem] = useState(getDefaultValue());

    const addToCart = (itemId) => {
        setCartItem((prev) =>
            ({ ...prev, [itemId]: prev[itemId] + 1 })
        );

    };

    const removeFromCart = (itemId) => {
        setCartItem((prev) =>
            ({ ...prev, [itemId]: prev[itemId] - 1 })
        )
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;

        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let itemInfo = allProduct.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItem[item];
            };
        }
        return totalAmount;
    };

    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                totalItems += cartItem[item];
            }
        };
        return totalItems;
    }

    const contextValue = { getTotalCartAmount, allProduct, cartItem, addToCart, removeFromCart, getTotalCartItems };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;