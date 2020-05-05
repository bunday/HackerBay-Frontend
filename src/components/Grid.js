import React from "react";
import Cell from "./Cell";

function renderGrid(rows, cols, currentCells) {
  const dummyArray = Array(rows).fill();

  return dummyArray.map((row, currentIndex) => (
    <div key={currentIndex} className="row">
      {renderCells(currentIndex, cols, currentCells)}
    </div>
  ));
}
function renderCells(currentRow, cols, currentCells) {
  const dummyArray = Array(cols).fill();

  const rowIndex = currentRow * cols;

  return dummyArray.map((cell, index) => (
    <Cell
      key={rowIndex + index}
      value={currentCells[rowIndex + index]}
      className="cell"
    />
  ));
}
function Grid({ rows, columns, currentCells }) {
  return <div className="grid">{renderGrid(rows, columns, currentCells)}</div>;
}
export default Grid;
