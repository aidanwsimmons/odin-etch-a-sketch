const screen = document.querySelector(".screen");
const eraseBtn = document.querySelector(".erase");
const classicBtn = document.querySelector(".classic");
const modernBtn = document.querySelector(".modern");
const rainbowBtn = document.querySelector(".rainbow");

let mode = "classic";

const numRows = 80;
const numCols = 80;

function buildGrid() {
  // Loop to create and append div elements for each cell in the grid
  for (let i = 0; i < numRows * numCols; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    screen.appendChild(cell);
  }

  if (mode == "classic") {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.addEventListener("mouseenter", () => {
        cell.classList.add("dark");
      });
    });
  }
  else if(mode == 'modern'){

  }
  else if(mode == 'rainbow'){

  }
}

function eraseGrid() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.classList.remove("dark");
  });
}

function clearGrid() {
    screen.innerHTML = ''
}

eraseBtn.addEventListener("click", eraseGrid);

classicBtn.addEventListener("click", () => {
    mode = 'classic'
    clearGrid()
    buildGrid()
})

modernBtn.addEventListener("click", () => {
    mode = 'modern'
    clearGrid()
    buildGrid()
})

classicBtn.addEventListener("click", () => {
    mode = 'rainbow'
    clearGrid()
    buildGrid()
})

document.addEventListener("DOMContentLoaded", buildGrid);
