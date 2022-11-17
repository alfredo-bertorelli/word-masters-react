import { Component } from "react";
import Cell from "./Cell";
import "./Row.css";

class Row extends Component {
  render() {
    console.log("in render: " + this.props.word);
    const { word } = this.props;
    const wordArray = word.split("");
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
