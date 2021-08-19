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