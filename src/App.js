import { render } from "react-dom";
import { Component } from "react";
import Row from "./Row";

class App extends Component {
  render() {
    return <Row></Row>;
  }
}

render(<App />, document.getElementById("root"));
