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

const parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");

const centerX = parentBlock.offsetWidth / 2 - childBlock.offsetWidth / 2;
const centerY = parentBlock.offsetHeight / 2 - childBlock.offsetHeight / 2;
const radius = Math.min(centerX, centerY) - 10; // Радиус круга с небольшим отступом

let angle = 0;
const speed = 0.02; // Скорость вращения (угловое смещение)

const moveBlock = () => {
  angle += speed;

  // Вычисляем новые координаты
  const positionX = centerX + radius * Math.cos(angle);
  const positionY = centerY + radius * Math.sin(angle);

  childBlock.style.left = `${positionX}px`;
  childBlock.style.top = `${positionY}px`;

  requestAnimationFrame(moveBlock);
};

moveBlock();

/// TIMER

const getMinutes = document.querySelector("#minutes");
const getSeconds = document.querySelector("#seconds");
const startBtn = document.querySelector("#start");
const stoptBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");

let minutes = 0;
let seconds = 0;
let interval;

const startTimer = () => {
  seconds++;
  if (seconds <= 9) {
    getSeconds.innerHTML = "0" + seconds;
  }
  if (seconds > 9) {
    getSeconds.innerHTML = seconds;
  }
  if (seconds > 60) {
    minutes++;
    getMinutes.innerHTML = "0" + minutes;
    seconds = 0;
    getSeconds.innerHTML = "0" + 0;
  }
  if (minutes > 9) {
    getMinutes.innerHTML = seconds;
  }
  startBtn.disabled = true;
};

startBtn.addEventListener("click", () => {
  interval = setInterval(startTimer, 100);
});

stoptBtn.addEventListener("click", () => {
  clearInterval(interval);
  startBtn.disabled = false;
});
resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  minutes = "0";
  seconds = "0";
  getMinutes.innerHTML = minutes;
  getSeconds.innerHTML = seconds;
  startBtn.disabled = false;
});
