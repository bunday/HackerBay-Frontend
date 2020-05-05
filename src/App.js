import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Cell from "./components/Cell";
import Fruit from "./components/Fruit";
import Farmer from "./components/Farmer";

class App extends Component {
  // State Declaraction
  state = {
    rows: 0,
    columns: 0,
    gridSize: 0,
    currentCells: [],
    currentPosition: 0,
  };

  componentWillMount() {
    this.getBasicGridSize();
  }
  componentDidMount() {
    this.setupFarmerAndApple();
    this.movementListener();
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
  numberWithinGridSize() {
    return Math.round(Math.random() * this.state.gridSize);
  }
  setupFarmerAndApple() {
    const maxApple = Math.max(this.state.columns, this.state.rows);

    const gridSize = this.state.gridSize;

    const cells = Array(gridSize).fill(null);

    const appleCellIndexes = Array(maxApple)
      .fill(null)
      .map(() => this.numberWithinGridSize());

    appleCellIndexes.forEach((cell) => (cells[cell] = <Fruit />));

    const farmerCell = this.numberWithinGridSize();

    cells[farmerCell] = <Farmer />;

    this.setState({
      currentCells: cells,
      currentPosition: farmerCell,
    });
  }
  movementListener() {
    document.addEventListener(
      "keydown",
      (event) => {
        event.preventDefault();

        switch (event.key) {
          case "ArrowLeft":
            this.moveFarmer(this.state.currentPosition - 1);
            break;
          case "ArrowRight":
            this.moveFarmer(this.state.currentPosition + 1);
            break;
          case "ArrowUp":
            this.moveFarmer(this.state.currentPosition - this.state.columns);
            break;
          case "ArrowDown":
            this.moveFarmer(this.state.currentPosition + this.state.columns);
            break;
          default:
            break;
        }
      },
      false
    );
  }
  moveFarmer(currentPosition){
    let currentCells = this.state.currentCells;
    if(currentPosition > -1 && currentPosition < currentCells.length) {
      currentCells[currentPosition] = <Farmer/>
      currentCells[this.state.currentPosition] = null;
      this.setState({
        currentCells,
        currentPosition
      })
    }
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
      <Cell
        key={rowIndex + index}
        value={this.state.currentCells[rowIndex + index]}
        className="cell"
      />
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
