import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
    cart[index] = 0;
  }
  return cart;
}

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems(prev => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  }

  const removeFromCart = (itemId) => {
    setCartItems(prev => ({ ...prev, [itemId]: Math.max((prev[itemId] || 0) - 1, 0) }));
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  }
  const getTotalCartItems = () =>{
    let totalItem = 0;
    for(const item in cartItems)
      {
        if(cartItems[item]>0)
          {
            totalItem+= cartItems[item]
          }
      }
      return totalItem;
  }

  const contextValue = { all_product,getTotalCartItems ,getTotalCartAmount, cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
