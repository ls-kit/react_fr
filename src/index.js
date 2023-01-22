import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App";

class Root extends Component {
  render() {
    return <App />;
  }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById("luxe"));
