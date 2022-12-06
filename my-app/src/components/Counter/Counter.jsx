import React, { Component, useState } from "react";
import { Button } from "../Button";
import "./counter.css";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(count + 1);

  const handleDecrease = () => setCount((prevState) => prevState - 1);

  return(
    <div className="example">
      <p>{count}</p>
      <div className="example__buttons">
        <Button text="Increase" onClick={handleIncrease} />
        <Button text="Decrease" onClick={handleDecrease} />
      </div>
    </div>
  );
};
