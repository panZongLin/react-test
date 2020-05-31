import React, { Component } from "react";
import { ThemeContext } from "./theme-context";

class ThemedButton extends Component {
  static contextType = ThemeContext;
  render() {
    let props = this.props;
    let theme = this.context;
    console.log("props", props, "theme", theme);

    return (
        <button {...props} style={{ backgroundColor: theme.background }} />
    )
  }
}

export default ThemedButton;
