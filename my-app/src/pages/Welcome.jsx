import React from "react";
import { Button } from "../components/Button";

export function Welcome(props) {
  console.log(props);
  return (
    <>
      <Button
        text={props.text}
        color="black"
        isActive={true}
        onClick={() => {}}
      />
      <div>{props.content}</div>
      <h1>{props.title}</h1>
    </>
  );
}
