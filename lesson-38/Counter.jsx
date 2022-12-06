import React, { Component } from "react";
import { Button } from "../Button";
import "./counter.css";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.handleIncrease = this.handleIncrease.bind(this);
  }

  handleIncrease() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  handleDecrease = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="example">
        <p>{this.state.count}</p>
        <div className="example__buttons">
          <Button text="Increase" onClick={this.handleIncrease} />
          <Button text="Decrease" onClick={this.handleDecrease} />
        </div>
      </div>
    );
  }
}
