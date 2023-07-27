import { createContext, useEffect, useState } from "react";

export const userContext = createContext({
  userInfo: {},
  setUser: (users) => {
    return users;
  },
});

export const UserProvider = ({ children }) => {
  const [userInfo, setUser] = useState(null);
  const value = { userInfo, setUser };

  useEffect(() => {
    if (userInfo) {
        console.log(userInfo);
      fetch("https://lampo-backend.onrender.com/addcart", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({cart_items: userInfo.cartItemsInfo, username: userInfo.username}),
      });
    }
  }, [userInfo]);

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};
