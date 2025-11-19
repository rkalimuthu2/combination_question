import { useContext } from "react";
import { AuthContext } from "../Authcontext";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const { login, authenticate } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(authenticate);

  return (
    <div>
      <button onClick={login}>login</button>

      <button
        onClick={() => {
          navigate("/desh");
        }}
      >
        desh
      </button>
    </div>
  );
};
