const { createContext, useContext, useState } = require("react");

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartitems] = useState([]);
  //login karon aur jo existing cart hai vo dekho hai ki nhi
  // if login hai toh existing cart nikalo
  function ifLogin() {
    //if token hai toh Setcartitems & true verna return  false
  }

  //  ifLogin()?

  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  useContext(CartContext);
};
