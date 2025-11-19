import { useContext, useState } from "react";
import { useDebounce } from "../component/UseDebounce";
// import { userContext } from "./UseReducerAndUseContrext";
import { AuthContext } from "../component/Authcontext";

export const UseEffectandDebounce = () => {
  const { user } = useContext(AuthContext);

  const [name, setName] = useState("ram");

  const debounceValue = useDebounce(name, 500);
  console.log(debounceValue);

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      value: {name} <br />
      Debounce :{debounceValue}
      context:{user?.user_name}
    </div>
  );
};
