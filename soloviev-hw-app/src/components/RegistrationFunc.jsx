import React, { useState } from "react";
import { Form } from "./Form";
import { Input } from "./Input";

export const RegistrationFunc = () => {
  const [state, setState] = useState({
    isDefaultAvatar: false,
    isEditMode: false,
    password: '',
    email: '',
    name: '',
  });

  const handleSubmit = (data) => {
    console.log('lifted state', data);
    console.log('state', state);
    console.log('REGISTRATION COMPLETE');
  };

  const handleChange = (event) => {
      setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  
  return (   
    <Form onSubmit={handleSubmit} name="name" action="" method="">
      <Input name="password" type="password" placeholder="password" onChange={handleChange} />
      <Input name="email" type="email" placeholder="email" onChange={handleChange} />
      <Input name="name" type="text" placeholder="name" onChange={handleChange} />
      <Input type="submit" />
      <p>Form Data</p>
      <p>Password: {state.password}</p>
      <p>Email: {state.email}</p>
      <p>Name: {state.name}</p>
    </Form>  
  );
};