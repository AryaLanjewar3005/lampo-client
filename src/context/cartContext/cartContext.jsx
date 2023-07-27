import { createContext, useState, useContext, useEffect } from "react";
import { userContext } from "../userContext/userContext";

export const CartContext = createContext({
  cartItems: [],
  cartTotal: 0,
  setCartItems: (cart) => {
    return cart;
  },
  removeItemFromCart: (cart) => {
    return cart;
  },
  deleteItemFromCart: () => {
    return null;
  },
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const { userInfo, setUser } = useContext(userContext);
  const [cartTotal, setCartTotal] = useState(0);
  useEffect(() => {
    let cartTotalAmount = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setCartTotal(cartTotalAmount);
  }, [cartItems]);

  const addItems = (item) => {
    let tempCartItem = [...cartItems];
    let itemIndex = null;
    if (tempCartItem.length === 0) {
      tempCartItem.push({ ...item, quantity: 1 });
    } else {
      for (let i = 0; i < tempCartItem.length; i++) {
        if (tempCartItem[i].productid === item.productid) {
          itemIndex = i;
        }
      }
      if (itemIndex !== null) {
        tempCartItem[itemIndex].quantity++;
      } else {
        tempCartItem.push({ ...item, quantity: 1 });
      }
    }

    return tempCartItem;
  };

  const removeItems = (item) => {
    let tempCartItem = cartItems;

    for (let i = 0; i < tempCartItem.length; i++) {
      if (tempCartItem[i].productid === item.productid) {
        tempCartItem[i].quantity--;
      }
    }
    const removeItem = (cartItem) => {
      if (cartItem.quantity > 0) {
        return cartItem;
      }
    };
    tempCartItem = tempCartItem.filter(removeItem);
    return tempCartItem;
  };

  const deleteItems = (item) => {
    let tempCartItem = cartItems;

    for (let i = 0; i < tempCartItem.length; i++) {
      if (tempCartItem[i].productid === item.productid) {
        tempCartItem[i].quantity = 0;
      }
    }
    const deleteItem = (cartItem) => {
      if (cartItem.quantity > 0) {
        return cartItem;
      }
    };
    tempCartItem = tempCartItem.filter(deleteItem);
    return tempCartItem;
  };

  const addItemsToUsersCart = () => {
    if (userInfo) {
      setUser({ ...userInfo, cartItemsInfo: cartItems });
    }
  };

  const addItemsToCart = (item) => {
    setCartItems(addItems(item));
    addItemsToUsersCart();
  };

  const removeItemFromCart = (item) => {
    setCartItems(removeItems(item));

    addItemsToUsersCart();
  };

  const deleteItemFromCart = (item) => {
    setCartItems(deleteItems(item));

    addItemsToUsersCart();
  };

  const value = {
    cartItems,
    addItemsToCart,
    removeItemFromCart,
    deleteItemFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
