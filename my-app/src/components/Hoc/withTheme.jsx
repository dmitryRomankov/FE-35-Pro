import * as React from "react";
import { ThemeContext } from "./theme-context";


export function withTheme(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <ThemeContext.Consumer>
          {contexts => <Component {...this.props} {...contexts} />}
        </ThemeContext.Consumer>
      )
    }
  };
}
