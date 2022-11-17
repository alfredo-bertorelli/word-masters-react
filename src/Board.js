import { Component } from "react";
import Row from "./Row";

class Board extends Component {
  state = {
    word: "",
    currentRow: 0,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKey);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKey);
  }

  handleKey = (e) => {
    console.log("in handle: " + e.key);
    this.setState((prevState) => {
      return { word: prevState.word + e.key };
    });
  };

  render() {
    const { word } = this.state;

    return <Row word={word}></Row>;
  }
}

export default Board;
