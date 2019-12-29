// Number of squares per side
let gridFid = 16;
// Width of each square
let gridSide = Math.floor(960 / gridFid);
let gridSidePixels = gridSide.toString() + 'px';
// Grid cells array
const gridCells = [];


// Variables pre-selected for sections of the page
const header = document.querySelector('header');
const body = document.querySelector('body');
const footer = document.querySelector('footer');
const drawingBoard = document.querySelector('#drawing-board');
const html = document.querySelector('html');


// Drawing board config
drawingBoard.style.display = 'grid';
// Create dynamic string for gridTemplateRows/Columns style
let gridSquareTemplate = '';
for (x = 0; x < gridFid; x++) {
    if (x < gridFid - 1) {
        gridSquareTemplate += gridSidePixels + ' ';
    } else {
        gridSquareTemplate += gridSidePixels;
    }
}
drawingBoard.style.gridTemplateRows = gridSquareTemplate;
drawingBoard.style.gridTemplateColumns = gridSquareTemplate;


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


drawingBoard.style.height = '960px';
drawingBoard.style.width = '960px';


body.style.height = '1000px';
body.style.width = '1000px';



for (let row = 1; row < 16 + 1; row++) {
    for (let col = 1; col < 16 + 1; col++) {
        const newCell = document.createElement('div');
        newCell.style.gridRow = `${row} / ${row + 1}`
        newCell.style.gridColumn = `${col} / ${col + 1}`

        
        newCell.style.height = gridSidePixels;
        newCell.style.width = gridSidePixels;
        newCell.style.backgroundColor = 'pink';
        newCell.style.transitionDuration = '0.5s';
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