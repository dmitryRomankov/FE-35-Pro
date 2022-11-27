import React, { Component } from "react";
import "./Form.css";

export class Form extends Component {
  state = {
    property: 'string',
  }

  handleSubmitForm = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    const { children, method, name, action } = this.props;
    return (
      <form onSubmit={this.handleSubmitForm} method={method} action={action} name={name} className="form">
        <div className="form__container">
          <h2>Inputs</h2>
          {children}
        </div>
      </form>
    );
  }
}