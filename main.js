// Number of squares per side
let gridFid = 100;
// Width of each square (as a percent of drawing board)
let gridSide = Number(Math.round((gridFid / 960) + 'e4') + 'e-3');
console.log(gridSide);
// Stringify gridSide for styling
let gridSidePercent = gridSide.toString() + '%';



// Variables pre-selected for sections of the page
const header = document.querySelector('header');
const body = document.querySelector('body');
const footer = document.querySelector('footer');
const drawingBoard = document.querySelector('#drawing-board');
const html = document.querySelector('html');

drawingBoard.style.display = 'grid';
drawingBoard.style.height = '960px';
drawingBoard.style.width = '960px';

function renderBoard () {
    
    // Create dynamic string for gridTemplateRows/Columns style
    let gridSquareTemplate = '';
    for (x = 0; x < gridFid; x++) {
        if (x < gridFid - 1) {
            gridSquareTemplate += gridSidePercent + ' ';
        } else {
            gridSquareTemplate += gridSidePercent;
        }
    }
    drawingBoard.style.gridTemplateRows = gridSquareTemplate;
    drawingBoard.style.gridTemplateColumns = gridSquareTemplate;
    
}

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
    const newGridFid = prompt('Enter desired number of squares per side(1 - 100):', '16');

    gridFid = newGridFid;
    while (drawingBoard.children.length > 1) {
        drawingBoard.removeChild(drawingBoard.children[0]);
    }

    console.log(drawingBoard.children);
    console.log(gridFid);
    console.log(gridSide);
    console.log(gridSidePixels);

    renderBoard();
    renderPixels();
})
header.appendChild(gridFidButton);



html.style.height = '1000px';
html.style.width = '1000px';





body.style.height = '1000px';
body.style.width = '1000px';
body.style.display = 'inline';
body.style.textAlign = 'center';



function renderPixels () {
    for (let row = 1; row < gridFid + 1; row++) {
        for (let col = 1; col < gridFid + 1; col++) {
            const newCell = document.createElement('div');
            newCell.style.gridRow = `${row} / ${row + 1}`
            newCell.style.gridColumn = `${col} / ${col + 1}`

            
            //newCell.style.height = gridSidePercent;
            //newCell.style.width = gridSidePercent;
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


renderBoard();
renderPixels();


console.log('wahoo');