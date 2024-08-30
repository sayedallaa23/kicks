import { createContext, useState, useEffect } from "react";

export const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {
  const liveCart = JSON.parse(window.localStorage.getItem("cartList")||"[]")
  const [cart, setCart] = useState(liveCart);
  // useEffect(() => {
  //   const liveCart = window.localStorage.getItem("cartList");
  //   if (liveCart !== null) {
  //     setCart(JSON.parse(liveCart));
  //   }
  // }, []);

  useEffect(() => {
    window.localStorage.setItem("cartList", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{cart, setCart}}>
      {children}
    </CartContext.Provider>
  );
};
