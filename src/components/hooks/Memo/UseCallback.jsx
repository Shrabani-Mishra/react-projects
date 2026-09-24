
import { useCallback, useState, memo } from "react";

// Child component
// memo prevents unnecessary re-rendering when props are unchanged
const Button = memo(({ onClick, children }) => {
  console.log(`Rendering button: ${children}`);

  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
});

// Parent component
export const UseCallBack = () => {
  const [count, setCount] = useState(0);

  // Memoize the increment function
  const increment = useCallback(() => {
    console.log("increment inside");

    setCount((prev) => prev + 1);
  }, []);

  // Memoize the decrement function
  const decrement = useCallback(() => {
    console.log("decrement inside");

    setCount((prev) => prev - 1);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>

      <Button onClick={increment}>
        Increment
      </Button>

      <Button onClick={decrement}>
        Decrement
      </Button>
    </div>
  );
};



