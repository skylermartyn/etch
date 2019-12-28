// Number of squares per side
const gridFid = 16;
// Width of each square
const gridSide = Math.floor(960 / gridFid);
// Grid cells array
const gridCells = [];


// Variables pre-selected for sections of the page
const header = document.querySelector('header');
const body = document.querySelector('body');
const footer = document.querySelector('footer');
const drawingBoard = document.querySelector('#drawing-board');
const html = document.querySelector('html');


// Reset button
const resetButton = document.createElement('button');
resetButton.textContent = 'Reset Board';
resetButton.addEventListener('click', () => {
    for (x = 0; x < drawingBoard.children.length; x++) {
        drawingBoard.children[x].style.backgroundColor = 'pink';
    }
})
header.appendChild(resetButton);



html.style.height = '1000px';
html.style.width = '1000px';


drawingBoard.style.size = '960px 960px';


body.style.height = '1000px';
body.style.width = '1000px';



for (let row = 1; row < 16 + 1; row++) {
    for (let col = 1; col < 16 + 1; col++) {
        const newCell = document.createElement('div');
        newCell.style.gridRow = `${row} / ${row + 1}`
        newCell.style.gridColumn = `${col} / ${col + 1}`

        
        newCell.style.size = `${gridSide} ${gridSide}`;
        newCell.style.backgroundColor = 'pink';
        newCell.addEventListener('mouseover', (e) => {
            if (e.target.style.backgroundColor !== 'black') {
                e.target.style.backgroundColor = 'black';
            }
        }); 
        gridCells.push(newCell);
    }
}

console.log(gridCells.length);

for (x = 0; x < gridCells.length; x++) {
    drawingBoard.appendChild(gridCells[x]);
}



console.log('wahoo');