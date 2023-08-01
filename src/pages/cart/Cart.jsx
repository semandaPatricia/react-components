
import React from 'react'
import { ShopContext } from "../../context/ShopContext";

import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";
//import './Cart.css'
import { Bikinis } from '../../data/products';

const Cart = () => {
    const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
  
    const navigate = useNavigate();

  return (
    <div>
 <div className="cart flex flex-col justify-center items-center">
      <div>
        <h1 className='text-xl'>Your Cart Items</h1>
      </div>
      <div className="flex flex-col">
        {Bikinis.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button className='bg-gray-500 text-white border-r-4 m-2 cursor-pointer w-40 h-12'
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
    </div>
  )
}

export default Cart


