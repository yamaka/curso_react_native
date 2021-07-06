import React, { createContext, useState, useEffect } from "react";


//Consumer
const UserContext = createContext({});
export default UserContext;
//Provider
export const UserProvider = ({ children }) => {
  const [userStateContext, setUserStateContext] = useState({
    username: "",
    email: "",
  });

  return (
    <UserContext.Provider value={[userStateContext, setUserStateContext]}>
      {children}
    </UserContext.Provider>
  );
};



