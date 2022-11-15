import React, { useState, Component } from "react";
import { Button } from "./components/Button";
import { Welcome } from "./pages/Welcome";
import { Form } from "./components/Form/Form";
import { Input } from "./components/Input/Input";
import { Counter } from "./components/Counter/Counter";
import { Avatar } from "./components/Avatar/Avatar";

const img1 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDhDMM5MgwCJi0f3XZrI2HAM_Fx9uZmCqbKQ&usqp=CAU";

const users = [
  { name: "name", id: 1 },
  { name: "name1", id: 2 },
  { name: "name2", id: 3 },
];

const defaultAvatar =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQrF3t4HTqY8rjh54a9PrakBAZsJ5gPFv2CQ&usqp=CAU";

const DefaultAvatar = () => (
  <img src={defaultAvatar} alt="Default Avatar" className="default" />
);

class App extends Component {
  state = {
    isDefaultAvatar: false,
  };

  handleChange = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  handleSubmit = (data) => {
    console.log(data);
  };

  handleChangeAvatar = () =>
    this.setState({ isDefaultAvatar: !this.state.isDefaultAvatar });


  render() {

    return (
      <>
        <Form onSubmit={this.handleSubmit} name="name" action="" method="24f" />
      </>
    )

    // <Form>
    //   <Input name="password" type="password" placeholder="password" onChange={this.handleChange} />
    //   <Input name="email" type="email" placeholder="email" onChange={this.handleChange} />
    //   <Input name="text" type="text" placeholder="text" onChange={this.handleChange} />
    //   <Input type="submit" onClick={this.handleSubmit} />
    // </Form>
  }
}

export default App;
