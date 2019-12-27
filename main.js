const html = document.querySelector('html');
html.setAttribute('height', '1000px');
html.setAttribute('width', '1000px');

const container = document.querySelector('#container');

const body = document.querySelector('body');
body.setAttribute('height', '1000px');
body.setAttribute('width', '1000px');
const gridBody = document.createElement('div');
gridBody.setAttribute('display', 'grid');
gridBody.setAttribute('grid-template-columns', '100px 100px 100px 100px');
gridBody.setAttribute('grid-template-rows', '100px 100px 100px 100px');
gridBody.setAttribute('grid-gap', '5px')

const gridCells = [];

for (let row = 1; row < 5; row++) {
    for (let col = 1; col < 5; col++) {
        const newCell = document.createElement('div');
        newCell.setAttribute('grid-row', `${row} / ${row + 1}`);
        newCell.setAttribute('grid-column', `${col} / ${col + 1}`);

        newCell.setAttribute("background-color", 'pink');
        newCell.setAttribute('width', '80px');
        newCell.setAttribute('height', '80px');
        newCell.setAttribute('margin', 'auto');
        gridCells.push(newCell);
    }
}

for (x = 0; x < gridCells.length; x++) {
    gridBody.appendChild(gridCells[x]);
}

container.appendChild(gridBody);
console.log('wahoo');