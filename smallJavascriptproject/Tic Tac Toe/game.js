let boxes = document.querySelectorAll(".box");
let msgContainer = document.querySelector(".show-container");
let newbtn = document.querySelector(".new-button");
let resetbtn = document.querySelector(".reset");
let msg = document.querySelector(".msg");
let count = 0;
let turnO = true;
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const resetGame = () => {
  turnO = true;
  count = 0;
  enableboxes();
  msgContainer.classList.add("hide");
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box was Clicked!");
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;
    let isWinner = checkWinner();
    if (count === 9 && !isWinner) {
      drawGame();
    }
  });
});
const drawGame = () => {
  msg.innerText = `Game Draw`;
  msgContainer.classList.remove("hide");
  disableboxes();
};
const disableboxes = () => {
  for (const box of boxes) {
    box.disabled = true;
  }
};
const enableboxes = () => {
  for (const box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showWinner = (winner) => {
  msg.innerText = `Winner Of This is ${winner}`;
  msgContainer.classList.remove("hide");
  disableboxes();
};
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let firstVlue = boxes[pattern[0]].innerText;
    let secondValue = boxes[pattern[1]].innerText;
    let thirdValue = boxes[pattern[2]].innerText;

    if (firstVlue != "" && secondValue != "" && thirdValue != "") {
      if (firstVlue === secondValue && secondValue === thirdValue) {
        showWinner(firstVlue);
        return true;
      }
    }
  }
};

newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
