"use client";

import { useState } from "react";
import cart from "/public/assets/img/misc/cart.svg";
import Image from "next/image";

export const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeItemFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="flex items-center justify-between px-6">
      <Image src={cart} width={20} height={20} alt="logo" />
      <div className="flex items-center justify-between">
        <h2 className="text-base font-outfit font-thin ">&nbsp;&nbsp;Cart&nbsp;</h2>
        <p>({cartItems.length})</p>
      </div>
    </div>
  );
};

export default Cart;
