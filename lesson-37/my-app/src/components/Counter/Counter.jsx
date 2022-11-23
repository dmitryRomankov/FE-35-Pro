import React, { useState } from "react";
import { Button } from "../Button/Button";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount((prevState) => prevState + 1);
  const handleDecrease = () => setCount((prevState) => prevState - 1);

  return (
    <div>
      <p>{count}</p>
      <Button text={"PLUS"} onClick={handleIncrease} />
      <Button text={"Minus"} onClick={handleDecrease} />
    </div>
  );
};
