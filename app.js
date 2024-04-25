const screen = document.querySelector(".screen");
const eraseBtn = document.querySelector(".erase");
const smallBtn = document.querySelector(".small");
const mediumBtn = document.querySelector(".medium");
const largeBtn = document.querySelector(".large");

const classicBtn = document.querySelector(".classic");
const modernBtn = document.querySelector(".modern");
const rainbowBtn = document.querySelector(".rainbow");

let mode = "classic";
let size = "medium";

let initialOpacity = 0.1;
const opacityStep = 0.1;

let numRows = 60;
let numCols = 60;

function buildGrid() {
  if (size == "small") {
    numRows = 40;
    numCols = 40;
  } else if (size == "medium") {
    numRows = 60;
    numCols = 60;
  } else if (size == "large") {
    numRows = 80;
    numCols = 80;
  }
  // Loop to create and append div elements for each cell in the grid
  for (let i = 0; i < numRows * numCols; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.flexBasis = `calc(80% / ${numRows})`;
    screen.appendChild(cell);
  }

  if (mode == "classic") {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.addEventListener("mouseenter", () => {
        cell.classList.add("dark");
      });
    });
  } else if (mode == "modern") {
    const cells = document.querySelectorAll(".cell");

    cells.forEach((cell) => {
      cell.addEventListener("mouseenter", () => {
        cell.classList.add("gradient");
        cell.style.opacity = parseFloat(cell.style.opacity || 0) + 0.6;
      });
    });
  } else if (mode == "rainbow") {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.addEventListener("mouseenter", () => {
        setRandomColor(cell);
      });
    });
  }
}

function eraseGrid() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.classList.remove("dark");
    cell.classList.remove('gradient')
    cell.style.backgroundColor = "";
  });
}

function clearGrid() {
  screen.innerHTML = "";
}

smallBtn.addEventListener("click", () => {
  size = "small";
  clearGrid();
  buildGrid();
});

mediumBtn.addEventListener("click", () => {
  size = "medium";
  clearGrid();
  buildGrid();
});

largeBtn.addEventListener("click", () => {
  size = "large";
  clearGrid();
  buildGrid();
});

classicBtn.addEventListener("click", () => {
  mode = "classic";
  clearGrid();
  buildGrid(size, mode);
});

modernBtn.addEventListener("click", () => {
  mode = "modern";
  clearGrid();
  buildGrid();
});

rainbowBtn.addEventListener("click", () => {
  mode = "rainbow";
  clearGrid();
  buildGrid();
});

eraseBtn.addEventListener("click", eraseGrid);

// function darkenCell(cell, opacity) {
//   cell.style.backgroundColor = `rgba(217, 215, 215, ${opacity}%)`;
// }

function getRandomColor() {
  const hue = Math.floor(Math.random() * 360); // Random hue value between 0 and 360
  const saturation = "100%"; // Saturation at maximum for vibrant colors
  const lightness = "50%"; // Lightness at 50% for balanced colors
  return "hsl(" + hue + ", " + saturation + ", " + lightness + ")";
}

function setRandomColor(cell) {
  let randomColor = getRandomColor();
  cell.style.backgroundColor = randomColor;
}

document.addEventListener("DOMContentLoaded", buildGrid);
