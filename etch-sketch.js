makeGrid();
inputNewSize();

function makeGrid(size = 16){
    const gridContainer = document.getElementById('container');
    gridContainer.textContent = "";
    gridContainer.style.cssText = `grid-template-rows: repeat(${size}, 1fr); grid-template-columns: repeat(${size}, 1fr);`;

    for(i = 0; i < (size*size); i++){
        const gridDiv = document.createElement('div')
        gridDiv.classList = 'grid';
        gridDiv.style.boxSizing = 'border-box';
        gridDiv.style.border = '1px solid black';
        gridContainer.appendChild(gridDiv);
    }

    colorGrid();

}

function colorGrid(){
    const gridSquares = document.querySelectorAll('.grid');
    console.log(gridSquares);

    gridSquares.forEach((div) => {

        div.addEventListener('mouseover', () => {
            
            div.style.backgroundColor = 'red';

        });

    });
}

function inputNewSize(){

    const newGrid = document.getElementById('new-grid');

    newGrid.addEventListener('click', () => {

        let newSize = window.prompt("Please input a number 1 - 100:");

        while((newSize <= 0 || newSize > 100)|| isNaN(newSize)){

            newSize = window.prompt("Error, please input a number 1 - 100:");

        }

        newSize = Math.round(Number(newSize));

        makeGrid(newSize);

    });

}