const html = document.querySelector('html');
html.style.height = '1000px';
html.style.width = '1000px';

const drawingBoard = document.querySelector('#drawing-board');

const body = document.querySelector('body');
body.style.height = '1000px';
body.style.width = '1000px';

const gridCells = [];

for (let row = 1; row < 17; row++) {
    for (let col = 1; col < 17; col++) {
        const newCell = document.createElement('div');
        newCell.style.gridRow = `${row} / ${row + 1}`
        newCell.style.gridColumn = `${col} / ${col + 1}`

        newCell.classList.add('square');
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