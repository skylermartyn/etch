///////////////////////////////////////////////
// Variables & Initial Configuration
///////////////////////////////////////

// Number of cells per side
let gridFid = 100;
// Width of each cell (as a percent of drawing board)
// rounded to 3rd decimal place
let gridSide = Number(Math.round((100 / gridFid) + 'e3') + 'e-3');

// Default page sections assigned to variables and configured
const html = document.querySelector('html');
html.style.height = '1000px';
html.style.width = '1000px';

const header = document.querySelector('header');

const body = document.querySelector('body');
body.style.width = '100%';
body.style.display = 'inline';
body.style.textAlign = 'center';

const footer = document.querySelector('footer');

// Element creation and config for drawing board
const drawingBoard = document.createElement('div');
drawingBoard.style.display = 'grid';
drawingBoard.style.height = '960px';
drawingBoard.style.width = '960px';

///////////////////////////////////////////////
// Functions
///////////////////////////////////////

/*
Renders board based on desired number of cells per side
Board size is fixed to 960px x 960px
:param: perSide: Number of cells per side
*/
function renderBoard(perSide) {
    // Stringify gridSide for styling
    let gridSidePercent = gridSide.toString() + '%';
    let gridSquareTemplate = '';
    for (x = 0; x < perSide; x++) {
        if (x < perSide - 1) {
            gridSquareTemplate += gridSidePercent + ' ';
        } else {
            gridSquareTemplate += gridSidePercent;
        }
    }
    drawingBoard.style.gridTemplateRows = gridSquareTemplate;
    drawingBoard.style.gridTemplateColumns = gridSquareTemplate;
    body.insertBefore(drawingBoard, footer);
}

/*
Renders cells based on desired cell density
:param: perSide: Number of cells per side 
*/
function renderGridCells(perSide) {
    for (let row = 1; row < perSide + 1; row++) {
        for (let col = 1; col < perSide + 1; col++) {
            const newCell = document.createElement('div');
            newCell.style.gridRow = `${row} / ${row + 1}`;
            newCell.style.gridColumn = `${col} / ${col + 1}`;

            newCell.style.backgroundColor = 'pink';
            newCell.style.transitionDuration = '0.5s';
            newCell.addEventListener('mouseover', (e) => {
                if (e.target.style.backgroundColor !== 'black') {
                    e.target.style.backgroundColor = 'black';
                }
            }); 
            drawingBoard.appendChild(newCell);
        }
    }
}

/*
Conjoins renderBoard() & renderGridCells() into single render function
Board size is fixed to 960px x 960px
:param: cellDensity: Density of cells on drawing board 
*/
function renderDrawingBoard(cellDensity) {
    renderBoard(cellDensity);
    renderGridCells(cellDensity);
}

///////////////////////////////////////////////
// Buttons
///////////////////////////////////////

// Reset button
const resetButton = document.createElement('button');
resetButton.textContent = 'Reset Board';
resetButton.addEventListener('click', () => {
    for (x = 0; x < drawingBoard.children.length; x++) {
        drawingBoard.children[x].style.backgroundColor = 'pink';
    }
})
header.appendChild(resetButton);

// Grid fidelity button 
const gridFidButton = document.createElement('button');
gridFidButton.textContent = 'Change Pixel Density'
gridFidButton.addEventListener('click', () => {
    let newGridFid = NaN;
    while (isNaN(newGridFid)) {
        newGridFid = Number(prompt('Enter desired number of squares per side(1 - 100):', '16'));
    }

    gridFid = newGridFid;
    gridSide = Number(Math.round((100 / gridFid) + 'e4') + 'e-4');
    gridSidePercent = gridSide.toString() + '%';
    while (drawingBoard.children.length > 0) {
        drawingBoard.removeChild(drawingBoard.children[0]);
    }

    console.log(drawingBoard.children);
    console.log(gridFid);
    console.log(gridSide);
    console.log(gridSidePercent);

    renderDrawingBoard(gridFid);
})
header.appendChild(gridFidButton);

///////////////////////////////////////////////
// Initial Render
///////////////////////////////////////

renderDrawingBoard(gridFid);