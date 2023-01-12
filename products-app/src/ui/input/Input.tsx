import React, { ChangeEvent } from "react";
import "./styles.scss";

type InputProps = {
  name: string;
  id?: string;
  value?: string;
  type?: string;
  placeholder?: string;
  className?: string;
  style?: { [key: string]: string };
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = (props: InputProps) => {
  return <input className="input" {...props} />;
};
