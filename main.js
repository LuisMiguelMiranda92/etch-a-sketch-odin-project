// const container = document.querySelector("#container");
// const buttonContainer = document.querySelector("#button-container");
// const boardContainer = document.querySelector("#board-container");
// container.appendChild(buttonContainer);
// container.appendChild(boardContainer);

// const createBoardButton = document.querySelector("#create-btn");
// createBoardButton.addEventListener("click", createBoard);
// const input = document.querySelector("#grid-size");

// function createBoard() {
//   boardContainer.innerHTML = "";
//   const squareSize = 640 / input.value;

//   const fragment = document.createDocumentFragment();
//   for (let i = 0; i < input.value * input.value; i++) {
//     const square = document.createElement("div");
//     square.style.backgroundColor = "blue";
//     square.style.width = `${squareSize}px`;
//     square.style.height = `${squareSize}px`;

//     square.addEventListener("mouseover", () => {
//       hoverSquare(square);
//     });
//     fragment.appendChild(square);
//   }
//   boardContainer.appendChild(fragment);
// }

// function hoverSquare(square) {
//   square.style.backgroundColor = "yellow";
// }

const boardContainer = document.querySelector("#board-container");
const createBoardButton = document.querySelector("#create-btn");
const input = document.querySelector("#grid-size");

// OPTIMIZATION: Use Event Delegation
// Instead of 2500 listeners, we use 1 on the container
boardContainer.addEventListener("mouseover", (e) => {
  // Only trigger if the mouse is over a square, not the container itself
  if (e.target.classList.contains("square")) {
    e.target.style.backgroundColor = "yellow";
  }
});

function createBoard() {
  const size = parseInt(input.value);

  boardContainer.innerHTML = "";

  // ALWAYS use 100% / size for flexbox grids to stay responsive
  const squareSize = 100 / size;

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    // Percentages allow the squares to shrink with the container
    square.style.width = `${squareSize}%`;
    square.style.height = `${squareSize}%`;

    fragment.appendChild(square);
  }

  boardContainer.appendChild(fragment);
}

createBoardButton.addEventListener("click", createBoard);

// Initialize with default grid
createBoard();
