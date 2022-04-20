import React, { useState, useContext } from "react";

const MyContext = React.createContext();
export function UseMyContext() {
  return useContext(MyContext);
}
const Provider = ({ children }) => {
  const [user, setUser] = useState({});
  return (
    <MyContext.Provider value={{ user, setUser }}>
      {children}
    </MyContext.Provider>
  );
};

export default Provider;
