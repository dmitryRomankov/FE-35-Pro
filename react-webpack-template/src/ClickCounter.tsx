import { useState } from "react";

export const ClickCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Click</button>
      <h3>Count {count}</h3>
    </div>
  );
};
