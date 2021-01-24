const container = document.getElementById("container");
const clear = document.getElementById('clear');

//Creates a 16x16 grid
for (x=0; x<256; x++){
    var newDiv = document.createElement('div');
    newDiv.className = "newDiv";
    newDiv.setAttribute("id", "newDiv");
    document.getElementById('container').appendChild(newDiv);
}

//Colors grid black on mouse over
const gridDiv = document.querySelector('div');

function bgChange(event) {
    event.target.style.backgroundColor = 'black';
}
gridDiv.addEventListener('mouseover', bgChange);

//Clear button - clears grid and prompts user to input new grid size
function clearGrid() {
    var elements = document.getElementsByClassName('newDiv');
    for(var i = 0; i < elements.length; i++){
        elements[i].style.backgroundColor = 'white';
    }
    prompt('Enter new grid size(Limit 100)');
}
clear.addEventListener('click', clearGrid);