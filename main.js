const container = document.getElementById("container");
const clear = document.getElementById("clear");

window.addEventListener("load", defaultGridLayout);

function defaultGridLayout(){
    createGrid(16);
    fillGrid(16);
}

function createGrid(size){
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function fillGrid(size){
for (x=0; x<size * size; x++){
    var newDiv = document.createElement('div');
    newDiv.className = "newDiv";
    newDiv.setAttribute("id", "newDiv");
    document.getElementById('container').appendChild(newDiv);
}
}

const gridDiv = document.querySelector('div');

function bgChange(event) {
    event.target.style.backgroundColor = "black";
    if(parseFloat(event.target.style.opacity)){
        event.target.style.opacity = parseFloat(event.target.style.opacity) + 0.1;
    } else {
        event.target.style.opacity = 0.1;
    }
}

gridDiv.addEventListener('mouseover', bgChange);

clear.addEventListener('click', userGridSize);

function userGridSize(){
    let userSize = prompt("Enter a grid size from 1-64");
    if (userSize === null){
        return;
    }else if (userSize < 1 || userSize > 64) {
        alert ("Please enter a number between 1 and 64")
        userGridSize();
    }else {
        clearGrid();
        createGrid(userSize);
        fillGrid(userSize);
    }
}

function clearGrid() {
    const gridArray = Array.from(container.childNodes);
    gridArray.forEach((element) => {
        container.removeChild(element);
    });
}
