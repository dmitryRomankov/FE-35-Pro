import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "./form/Form";
import { Input } from "./input/Input";

export const Registration = () => {

  const nav = useNavigate();

  const [state, setState] = useState({
    isDefaultAvatar: false,
    isEditMode: false,
    password: '',
    email: '',
    name: '',
    isAuthorized: false,
  });

  const handleSubmit = (data) => {
    console.log('lifted state', data);
    setState((prevState) => ({
      ...prevState,
      isAuthorized: true,
    }))
    console.log('state', state);
    console.log('REGISTRATION COMPLETE');
    
  };

  const handleChange = (event) => {
      setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
    if(state.isAuthorized){
      nav('/success');
    }
  }, [nav, state.isAuthorized])
  
  return (   
    <Form onSubmit={handleSubmit} name="name" action="" method="">
      <Input name="password" type="password" placeholder="password" onChange={handleChange} />
      <Input name="email" type="email" placeholder="email" onChange={handleChange} />
      <Input name="name" type="text" placeholder="name" onChange={handleChange} />
      <Input type="submit"/>
      <p>Form Data</p>
      <p>Password: {state.password}</p>
      <p>Email: {state.email}</p>
      <p>Name: {state.name}</p>
    </Form>  
  );
};