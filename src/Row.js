import { Component } from "react";
import Cell from "./Cell";
import "./Row.css";

class Row extends Component {
  state = {
    word: "",
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
    const wordArray = word.split("");
    console.log("in render: " + wordArray);
    return (
      <div className="row">
        <Cell letter={wordArray[0]}></Cell>
        <Cell letter={wordArray[1]}></Cell>
        <Cell letter={wordArray[2]}></Cell>
        <Cell letter={wordArray[3]}></Cell>
        <Cell letter={wordArray[4]}></Cell>
      </div>
    );
  }
}

export default Row;
