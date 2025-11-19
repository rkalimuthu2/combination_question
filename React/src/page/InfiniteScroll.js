import { useEffect, useRef, useState } from "react";

export const InfiniteScroll = () => {
  const [records, setRecords] = useState([]);
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=50&skip=${page}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRecords(data.products);
      });
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver((entity) => {
      if (entity[0].isIntersecting) {
        setPage((prev) => prev + 1);
      }
    });
    if (loader.current) observer.observe(loader.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {records?.map((user, i) => {
        return <p key={i}>{user?.brand}</p>;
      })}

      <div ref={loader}>Loading...</div>
    </div>
  );
};
