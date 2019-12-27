const html = document.querySelector('html');
html.style.height = '1000px';
html.style.width = '1000px';

const container = document.querySelector('#container');

const body = document.querySelector('body');
body.style.height = '1000px';
body.style.width = '1000px';

const gridBody = document.createElement('div');
gridBody.style.display = 'grid';
gridBody.style.gridTemplateColumns = '100px'.repeat(16);
gridBody.style.gridTemplateRows = '100px'.repeat(16);
gridBody.style.gridGap = '5px';

const gridCells = [];

for (let row = 1; row < 17; row++) {
    for (let col = 1; col < 17; col++) {
        const newCell = document.createElement('div');
        newCell.style.gridRow = `${row} / ${row + 1}`
        newCell.style.gridColumn = `${col} / ${col + 1}`

        newCell.style.backgroundColor = 'pink';
        newCell.style.width = '80px';
        newCell.style.height = '80px';
        newCell.style.margin = 'auto';
        gridCells.push(newCell);
    }
}

console.log(gridCells.length);

for (x = 0; x < gridCells.length; x++) {
    gridBody.appendChild(gridCells[x]);
}

container.appendChild(gridBody);
console.log('wahoo');