import { useEffect, useState, useTransition } from "react";

export const SearchWithUseTransition = () => {
  const [email, setEmail] = useState([]);
  const [filteredResult, setFilteredResult] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isPending, startTransition] = useTransition(true);

  useEffect(() => {
    try {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((ele) => ele.json())
        .then((user) => setEmail(user));
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleChange = (data) => {
    setSearchText(data);

    startTransition(() => {
      const filtered = email.filter((user) => {
        return user.email.toLowerCase().includes(searchText.toLowerCase());
      });
      console.log(filtered);
      setFilteredResult(filtered);
    });
  };

  return (
    <div>
      <input
        value={searchText}
        type="search"
        onChange={(e) => handleChange(e.target.value)}
      />

      {isPending ? (
        <div>...loading</div>
      ) : (
        filteredResult.map((user) => {
          return <div>{user.email}</div>;
        })
      )}

      {/* {email.map((user) => {
        return <div>{user.email}</div>;
      })} */}
    </div>
  );
};
