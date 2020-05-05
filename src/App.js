import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  
  // State Declaraction
  state = {
    rows: 0,
    columns: 0,
    gridSize: 0
  }
  componentWillMount() {
    this.getBasicGridSize()
  }

  // Set Grid Size
  getBasicGridSize() {
    let columns = parseInt(prompt('Enter number of desired columns between 2 and 25'));
    columns = isNaN(columns) ? 25 : (columns > 25 ? 25 : (columns < 2 ? 2 : columns));
    
    let rows = parseInt(prompt('Enter number of desired rows between 2 and 25'));
    rows = isNaN(rows) ? 25 : (rows > 25 ? 25 : (rows < 2 ? 2 : rows));
    
    const gridSize = rows * columns;

    this.setState({
      rows, columns, gridSize
    })
  }

  
  render() {
    return (
      <div className="App">
        <h2> HackerBay Frontend Test by Zadat Olayinka</h2>
      </div>
    );
  }
}

export default App;
