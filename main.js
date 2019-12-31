///////////////////////////////////////////////
// Variables & Initial Configuration
///////////////////////////////////////

// Number of cells per side
let gridFid = 16;
// Width of each cell (as a percent of drawing board)
// rounded to 3rd decimal place
let gridSide = Number(Math.round((100 / gridFid) + 'e3') + 'e-3');

// Default page sections assigned to variables and configured
const html = document.querySelector('html');
//html.style.height = '100%';
//html.style.width = '100%';

const header = document.querySelector('header');
header.style.lineHeight = '130px';
header.style.height = '130px';
header.style.width = '940px';
header.style.margin = 'auto';

const body = document.querySelector('body');
body.style.width = '100%';
body.style.display = 'inline-block';
body.style.textAlign = 'center';

const footer = document.querySelector('footer');

// Element creation and config for drawing board
const drawingBoard = document.createElement('div');
drawingBoard.style.display = 'grid';
drawingBoard.style.height = '960px';
drawingBoard.style.width = '960px';
drawingBoard.style.margin = 'auto';
drawingBoard.style.borderStyle = 'solid';
drawingBoard.style.borderWidth = '20px';

// Create page title for browser window/tab
const title = document.createElement('title');
title.textContent = 'Etch a Sketch!';
header.appendChild(title);

// Create page title & subtitle for header
const pageTitle = document.createElement('h1');
pageTitle.textContent = 'Etch a Sketch!';
pageTitle.style.margin = 'auto';
pageTitle.style.fontFamily = 'Helvetica';
pageTitle.style.float = 'left';
pageTitle.style.fontSize = '36pt';

header.appendChild(pageTitle);

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
resetButton.style.float = 'right';
resetButton.style.height = '50px';
resetButton.style.marginTop = '38px';
resetButton.style.marginRight = '20px';

resetButton.addEventListener('click', () => {
    for (x = 0; x < drawingBoard.children.length; x++) {
        drawingBoard.children[x].style.backgroundColor = 'pink';
    }
})

// Grid fidelity button 
const gridFidButton = document.createElement('button');
gridFidButton.textContent = 'Change Pixel Density';
gridFidButton.style.float = 'right';
gridFidButton.style.height = '50px';
gridFidButton.style.marginTop = '38px';

gridFidButton.addEventListener('click', () => {
    let newGridFid = NaN;
    while (isNaN(newGridFid) || newGridFid < 0 || newGridFid > 100) {
        newGridFid = Number(prompt('Enter desired number of squares per side [1 - 100]:', '16'));
    }
    
    if (newGridFid == 0) {
        return;
    } else {
        gridFid = newGridFid;
    }

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

// Render buttons
header.appendChild(gridFidButton);
header.appendChild(resetButton);

///////////////////////////////////////////////
// Initial Render
///////////////////////////////////////

renderDrawingBoard(gridFid);