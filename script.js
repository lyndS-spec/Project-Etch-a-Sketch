const container = document.getElementById("container");

function createGrid(numberOfSquares) {
    const containerWidth = container.clientWidth;
    const squareSize = containerWidth / numberOfSquares;
    const totalSquares = numberOfSquares * numberOfSquares;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square-grid");
        square.style.width = squareSize + "px";
        square.style.height = squareSize + "px";

        square.dataset.timesHovered = 0;

        square.addEventListener("mouseover", function () {
            let timesHovered = Number(square.dataset.timesHovered);

            if (timesHovered === 0) {
                const red = Math.floor(Math.random() * 256);
                const green = Math.floor(Math.random() * 256);
                const blue = Math.floor(Math.random() * 256);
                square.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
            }

            if (timesHovered < 10) {
                timesHovered = timesHovered + 1;
                square.dataset.timesHovered = timesHovered;
                square.style.opacity = timesHovered / 10;
            }
        });

        container.appendChild(square);
    }
}

function newGrid() {
    let numberOfSquares = prompt("How many squares per side? (max 100)");
    numberOfSquares = Number(numberOfSquares);

    if (numberOfSquares > 100) {
        numberOfSquares = 100;
    }

    container.textContent = "";
    createGrid(numberOfSquares);
}

document.getElementById("grid_number").addEventListener("click", newGrid);

createGrid(16);