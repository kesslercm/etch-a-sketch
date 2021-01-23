const container = document.getElementById("container");

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