import { Component } from "react";

class Cell extends Component {
  render() {
    return <div className="cell">{this.props.letter}</div>;
  }
}

export default Cell;
