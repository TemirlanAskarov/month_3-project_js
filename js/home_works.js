/// GMAIL CHECKER

const gmailInput = document.querySelector("#gmail_input");
const gmailBtn = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

const regExp =
  /^(?=.*[a-zA-Z].{6,})[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

gmailBtn.addEventListener("click", function () {
  if (regExp.test(gmailInput.value)) {
    gmailResult.innerHTML = "Правильно";
    gmailResult.style.color = "green";
  } else {
    gmailResult.innerHTML = "Не правильно";
    gmailResult.style.color = "red";
  }
  console.log("click");
});

/// MOVE BLOCK

const redBlock = document.querySelector(".child_block");
let moveX = 0;

const MoveBlock = () => {
  moveX++;
  if (moveX <= 449) {
    redBlock.style.left = `${moveX}px`;
    requestAnimationFrame(MoveBlock);
  }
};

MoveBlock();
