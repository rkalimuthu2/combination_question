import { useContext } from "react";
import { AuthContext } from "../component/Authcontext";
import { Navigate } from "react-router-dom";

export const ProductedRoute = ({ children }) => {
  const { authenticate } = useContext(AuthContext);
  console.log(authenticate);

  if (!authenticate) {
    return <Navigate to={"/login"} replace />;
  }

  return children;
};
