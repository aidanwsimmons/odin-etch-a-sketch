const screen = document.querySelector(".screen");
const eraseBtn = document.querySelector(".erase");
const smallBtn = document.querySelector('.small')
const mediumBtn = document.querySelector('.medium')
const largeBtn = document.querySelector('.large')

const classicBtn = document.querySelector(".classic");
const modernBtn = document.querySelector(".modern");
const rainbowBtn = document.querySelector(".rainbow");

let mode = "classic";
let size = small

let initialOpacity = 0.1
const opacityStep = 0.1

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
  // else if(mode == 'modern'){
  //   const cells = document.querySelectorAll(".cell");

  //   let currentOpacity = initialOpacity

  //   function darkenCell(cell, opacity) {
  //       cell.style.backgroundColor = "rgba(0, 0, 0, " + opacity + ")"
  //   }

  //   cells.forEach((cell) => {
  //     cell.addEventListener("mouseenter", () => {
  //       darkenCell(this, currentOpacity)
  //       currentOpacity += opacityStep
  //     });
  //   });
  // }
  // else if(mode == 'rainbow'){
  //   const cells = document.querySelectorAll(".cell");
  //   cells.forEach((cell) => {
  //     cell.addEventListener("mouseenter", () => {
  //       setRandomColor(this)
  //     });
  //   });
  // }
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

// modernBtn.addEventListener("click", () => {
//     mode = 'modern'
//     clearGrid()
//     buildGrid()
// })

// rainbowBtn.addEventListener("click", () => {
//     mode = 'rainbow'
//     clearGrid()
//     buildGrid()
// })

// function getRandomColor() {
//     const hue = Math.floor(Math.random() * 360); // Random hue value between 0 and 360
//     const saturation = "100%"; // Saturation at maximum for vibrant colors
//     const lightness = "50%"; // Lightness at 50% for balanced colors
//     return "hsl(" + hue + ", " + saturation + ", " + lightness + ")";
// }

// function setRandomColor(cel){
//     let randomColor = getRandomColor();
//     cel.style.backgroundColor = randomColor;
// }

document.addEventListener("DOMContentLoaded", buildGrid);
