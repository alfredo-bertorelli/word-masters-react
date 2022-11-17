import { render } from "react-dom";
import { Component } from "react";
import Row from "./Row";
import Board from "./Board";

class App extends Component {
  render() {
    return <Board></Board>;
  }
}

render(<App />, document.getElementById("root"));
