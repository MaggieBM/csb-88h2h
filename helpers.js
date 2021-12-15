/* eslint-disable no-unused-vars */
/* global paper */

paper.setup(document.querySelector("canvas"));

class Grid {
  constructor(columnsCount, rowsCount) {
    this.columnsCount = columnsCount;
    this.rowsCount = rowsCount;
    const cellWidth = paper.view.bounds.width / columnsCount;
    const cellHeight = paper.view.bounds.height / rowsCount;
    this.cells = [];
    for (let y = 0; y < rowsCount; y++) {
      for (let x = 0; x < columnsCount; x++) {
        const cell = new paper.Rectangle({
          from: [x * cellWidth, y * cellHeight],
          to: [(x + 1) * cellWidth, (y + 1) * cellHeight]
        });
        cell.rowNumber = y + 1;
        cell.columnNumber = x + 1;
        cell.maxSize = Math.max(cell.width, cell.height);
        cell.minSize = Math.min(cell.width, cell.height);
        this.cells.push(cell);
      }
    }
  }

  getCell(x, y) {
    return this.cells.find(
      ({ rowNumber, columnNumber }) => columnNumber === x && rowNumber === y
    );
  }

  drawCells(color = "black") {
    this.cells.forEach((cell) =>
      this.drawCell(cell.columnNumber, cell.rowNumber, color)
    );
  }

  drawCell(x, y, color = "black") {
    const cell = this.getCell(x, y);
    new paper.Path.Rectangle({
      rectangle: cell,
      strokeColor: color
    });
  }

  drawCellsCoordinates(color = "black") {
    this.cells.forEach((cell) =>
      this.drawCellCoordinates(cell.columnNumber, cell.rowNumber, color)
    );
  }

  drawCellCoordinates(x, y, color = "black") {
    const cell = this.getCell(x, y);
    new paper.PointText({
      point: cell.center,
      content: `${x} , ${y}`,
      fillColor: color,
      justification: "center"
    });
  }
}

paper.view.onMouseMove = (event) => {
  document.querySelector("div").innerHTML = `${Math.floor(
    event.point.x
  )} , ${Math.floor(event.point.y)}`;
};
