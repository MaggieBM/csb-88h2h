/* eslint-disable no-unused-vars */
/* global paper,Grid */

var grid = new Grid(10, 10);
//grid.drawCells();
//grid.drawCellsCoordinates();

//console.log(grid.cells);

var specificCell = grid.getCell(2, 3);

function getRandomNumber(min, max) {
  return min + Math.random() * (max - min);
}

for (var cell of grid.cells) {
  var circle = new paper.Path.Circle(cell.center, 60);
  var randomNumber = getRandomNumber(0, 0);
  circle.translate(randomNumber);
  var randomColor = paper.Color.random();
  circle.fillColor = randomColor;
}

var text = new paper.PointText(paper.view.center);
text.content = "hello :)";
text.fontSize = 150;
text.fillColor = "white";
text.justification = "center";
