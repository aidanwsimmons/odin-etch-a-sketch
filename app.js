const screen = document.querySelector('.screen')

const numRows = 16
const numCols = 20

function buildGrid(){
    // Loop to create and append div elements for each cell in the grid
    for (let i = 0; i < numRows * numCols; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        gridContainer.appendChild(cell);
    }
}

document.addEventListener("DOMContentLoaded", buildGrid())