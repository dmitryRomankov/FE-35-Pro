import React from "react";
import { Form } from "../../components/Form/Form";
import { Input } from "../../components/Input/Input";

export class Registration extends React.Component {
  state = {
    isDefaultAvatar: false,
    isEditMode: false,
    password: "",
    email: "",
    text: "",
  };

  handleSubmit = (data) => {
    console.log("lifted state", data);
    console.log("state", this.state);
  };

  handleChange = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} name="name" action="" method="24f">
        <Input
          name="password"
          type="password"
          placeholder="password"
          onChange={this.handleChange}
        />
        <Input
          name="email"
          type="email"
          placeholder="email"
          onChange={this.handleChange}
        />
        <Input
          name="text"
          type="text"
          placeholder="text"
          onChange={this.handleChange}
        />
        <Input type="submit" />

        <p>Form Data</p>
        <p>Password: {this.state.password}</p>
        <p>Email: {this.state.email}</p>
        <p>Text: {this.state.text}</p>
      </Form>
    );
  }
}
