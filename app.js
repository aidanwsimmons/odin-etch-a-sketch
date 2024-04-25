const screen = document.querySelector('.screen')
const eraseBtn = document.querySelector('.erase')

const numRows = 80
const numCols = 80

function buildGrid(){
    // Loop to create and append div elements for each cell in the grid
    for (let i = 0; i < numRows * numCols; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        screen.appendChild(cell);
    }

    const cells = document.querySelectorAll('.cell')
    cells.forEach(cell => {
        cell.addEventListener('mouseenter', () => {
            cell.classList.add('dark');
        });
    })
}

document.addEventListener("DOMContentLoaded", buildGrid)