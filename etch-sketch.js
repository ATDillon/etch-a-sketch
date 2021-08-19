function makeGrid(size = 16){
    const gridContainer = document.getElementById('container');
    gridContainer.textContent = "";
    gridContainer.style.cssText = `grid-template-rows: repeat(${size}, 1fr); grid-template-columns: repeat(${size}, 1fr);`;

    for(i = 0; i < (size*size); i++){
        const gridDiv = document.createElement('div')
        gridDiv.style.boxSizing = 'border-box';
        gridDiv.style.border = '1px solid black';
        gridContainer.appendChild(gridDiv);
    }
}