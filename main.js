const container = document.getElementById("container");

for (x=0; x<256; x++){
    var newDiv = document.createElement('div');
    newDiv.className = "newDiv";
    document.getElementById('container').appendChild(newDiv);
}