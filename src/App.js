import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  // State Declaraction
  state = {
    rows: 0,
    columns: 0,
    gridSize: 0,
  };
  componentWillMount() {
    this.getBasicGridSize();
  }

  // Set Grid Size
  getBasicGridSize() {
    let columns = parseInt(
      prompt("Enter number of desired columns between 2 and 25")
    );
    columns = isNaN(columns)
      ? 25
      : columns > 25
      ? 25
      : columns < 2
      ? 2
      : columns;

    let rows = parseInt(
      prompt("Enter number of desired rows between 2 and 25")
    );
    rows = isNaN(rows) ? 25 : rows > 25 ? 25 : rows < 2 ? 2 : rows;

    const gridSize = rows * columns;

    this.setState({
      rows,
      columns,
      gridSize,
    });
  }

  renderGrid() {
    const rows = this.state.rows;
    const dummyArray = Array(rows).fill();

    return dummyArray.map((row, currentIndex) => (
      <div key={currentIndex} className="row">
        {this.renderCells(currentIndex)}
      </div>
    ));
  }
  renderCells(currentRow) {
    const cols = this.state.columns;
    const dummyArray = Array(cols).fill();

    const rowIndex = currentRow * cols;

    return dummyArray.map((cell, index) => (
      <div
        key={rowIndex + index}
        className="cell"
      >
       
      </div>
    ));
  }

  render() {
    return (
      <div className="App">
        <h2> HackerBay Frontend Test by Zadat Olayinka</h2>

        <div className="grid">{this.renderGrid()}</div>
      </div>
    );
  }
}

export default App;
