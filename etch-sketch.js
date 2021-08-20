makeGrid();
inputNewSize();

function makeGrid(size = 16){

    const gridContainer = document.getElementById('container');
    gridContainer.textContent = "";
    gridContainer.style.cssText = `grid-template-rows: repeat(${size}, 1fr); grid-template-columns: repeat(${size}, 1fr);`;

    for(i = 0; i < (size*size); i++){
        const gridDiv = makeGridSquare();
        gridContainer.appendChild(gridDiv);
    }

    colorGrid();

}

/*Goes through the first event listener one time only for each div, then adds a new one to adjust opacity after the color is set.*/

function colorGrid(){

    const gridSquares = document.querySelectorAll('.grid');
    console.log(gridSquares);

    gridSquares.forEach((div) => {
        
        let light = 100;

        div.addEventListener('mouseover', () => {

            div.style.backgroundColor = getRandomColor();

        }, {once: true});

        div.addEventListener('mouseover', function removeOpacity(){

            div.style.opacity = `${light}%`
            light -= 10;
            if(light === -10){

                div.removeEventListener('mouseover', removeOpacity);

            }
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

function getRandomColor(){
    let r = Math.floor((Math.random() * 256)),
    b = Math.floor((Math.random() * 256)),
    g = Math.floor((Math.random() * 256)),
    color = `rgb(${r}, ${g}, ${b})`;

    return color;
}

function makeGridSquare(){
    const gridDiv = document.createElement('div')

    gridDiv.classList = 'grid';
    gridDiv.style.backgroundColor = 'white';
    gridDiv.style.boxSizing = 'border-box';
    gridDiv.style.border = '1px solid black';

    return gridDiv;
}