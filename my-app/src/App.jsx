import React, { useState, Component } from "react";
import { Button } from "./components/Button";
import { Welcome } from "./pages/Welcome";
import { Form } from "./components/Form/Form";
import { Input } from "./components/Input/Input";
import { Counter } from "./components/Counter/Counter";
import { Avatar } from "./components/Avatar/Avatar";
import "./App.css"

const img1 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDhDMM5MgwCJi0f3XZrI2HAM_Fx9uZmCqbKQ&usqp=CAU";

const users = [
  { name: "Bob", id: 1 },
  { name: "Alex", id: 2 },
  { name: "Maria", id: 3 },
  { name: "Karl", id: 4 },
  { name: "Helen", id: 5 },
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
    console.log('lifted state', data);
    console.log('state', this.state);
  };

  handleChangeAvatar = () =>
    this.setState({ isDefaultAvatar: !this.state.isDefaultAvatar });


  render() {

    return (
      <div className="react-example">

        {/* Inputs and form handling */}
        <Form onSubmit={this.handleSubmit} name="name" action="" method="24f">
          <Input name="password" type="password" placeholder="password" onChange={this.handleChange} />
          <Input name="email" type="email" placeholder="email" onChange={this.handleChange} />
          <Input name="text" type="text" placeholder="text" onChange={this.handleChange} />
          <Input type="submit" />
        </Form>

        {/*Rendering of list*/}
        <ul className="list">
          <h2>List</h2>
          {users.map((user) => {
            return (
              <li key={user.id}>{user.name}</li>
            )
          })}
        </ul>

        {/* Counter */}
        <div className="counter">
          <h2>Counter</h2>
          <Counter />
        </div>

        {/* Conditional Rendering */}

        <div>
          <h2>Conditional rendering</h2>
          {!this.state.isDefaultAvatar && <Avatar src={img1} />}
          {this.state.isDefaultAvatar && <DefaultAvatar />}

          {/* {this.state.isDefaultAvatar ? <Avatar src={img1} /> : <DefaultAvatar />} */}
          <button onClick={this.handleChangeAvatar}>Change avatar</button>
        </div>
      </div>
    )
  }
}

export default App;
