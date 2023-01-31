import { useEffect, useState } from "react";

export function useCounter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const localValue = localStorage.getItem("counter" ?? "0");
    setCount(Number(localValue));

    console.log("Mounting counter...", { count });
    return () => {
      console.log("Unounting counter...", { count });
    };
  }, []);

  useEffect(() => {
    console.log({ count });

    if (Number.isInteger(count)) {
      localStorage.setItem("counter", count);
    }
  }, [{ count }]);

  const increment = () => setCount((n) => n + 1);
  const decrement = () => setCount((n) => n - 1);
  const reset = () => setCount(0);

  return { count, increment, decrement, reset }; // { count: count, ... }
}
