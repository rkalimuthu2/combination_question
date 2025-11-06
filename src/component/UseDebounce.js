import { useEffect, useState } from "react";

// Standard hook name: useDebounce
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // cleanup function
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
};
