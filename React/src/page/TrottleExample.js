import { useEffect } from "react";
import { trotlle } from "../component/UseTrottling";

export const Trottle = () => {
  useEffect(() => {
    const handleScroll = trotlle(() => {
      console.log("call scroll");
    }, 10000);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ height: "2000px", padding: "20px" }}>
      Scroll to see trottle
    </div>
  );
};
