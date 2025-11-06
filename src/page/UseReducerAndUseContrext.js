import { createContext } from "react";

export const userContext = createContext({ user: { user_name: "" } });

export const UserProvider = ({ children }) => {
  const user = { user_name: "ram" };

  return (
    <userContext.Provider value={{ user }}>{children}</userContext.Provider>
  );
};
