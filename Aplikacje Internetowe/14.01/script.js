document.getElementById("button").addEventListener("click", function() {
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    addToBoard(name, surname);
    document.getElementById("name").value = '';
    document.getElementById("surname").value = '';
});

function addToBoard(name, surname) {
    const newDiv = document.createElement("div");
    newDiv.textContent = `${name} ${surname}`;
    const board = document.getElementById("Lista");
    board.appendChild(newDiv);
}

