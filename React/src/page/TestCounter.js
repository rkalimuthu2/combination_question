import { useDispatch, useSelector } from "react-redux";
import { decrement, fetchUsers, increment } from "../reducer/userReducer";
import { useEffect, useMemo, useState } from "react";

export const Counter = () => {
  const { counter, list, error, loading } = useSelector((state) => state.users);
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const filteredResult = useMemo(() => {
    return list.filter((item) => {
      return item.name.toLowerCase().includes(searchText.toLowerCase());
    });
  }, [searchText, list]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      count:{counter}
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(fetchUsers())}>getUsers</button>
      <h2>Users</h2>
      <input
        value={searchText}
        type="search"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <ul>
        {filteredResult.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
        {/* {list.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))} */}
      </ul>
    </div>
  );
};

export default Counter;
