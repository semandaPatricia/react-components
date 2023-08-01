import React from "react";
import { createContext, useEffect, useState } from "react";
import {Bikinis} from '../data/products'

/*-----SHOP CONTEXT----  */
export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};


/*----SHOP CONTEXT PROVIDER----- */
const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart()); //state

    /*Total cost of items in cart */
    const getTotalCartAmount = () => {
      let totalAmount = 0;
      for (const item in cartItems) {
        if (cartItems[item] > 0) {
          let itemInfo = Bikinis.find((product) => product.id === Number(item));
          totalAmount += cartItems[item] * itemInfo.price;
        }
      }
      return totalAmount;
    };

   /*Logic about adding and removing items in the cart*/
    const addToCart = (itemId) => {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };
  
    const removeFromCart = (itemId) => {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };
  
    const updateCartItemCount = (newAmount, itemId) => {
      setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    };
  
    const checkout = () => {
      setCartItems(getDefaultCart());
    };
   
    /*React context  */
    const contextValue = {
      cartItems,
      addToCart,
      updateCartItemCount,
      removeFromCart,
      getTotalCartAmount,
      checkout,
    };
  return (
   <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export  default ShopContextProvider 

