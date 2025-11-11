import { createContext, useState } from "react";

export const AuthContext = createContext();

export const RouterContext = ({ children }) => {
  const [authenticate, setAuthenticate] = useState(false);
  const user = { user_name: "ram" };

  const login = () => {
    console.log("calling");
    setAuthenticate(true);
  };

  const logout = () => {
    setAuthenticate(false);
  };

  return (
    <div>
      <AuthContext.Provider value={{ user, authenticate, login, logout }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};
