const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let setIntervalOfChangeOfColors;
const btnStart = document.querySelector('button[data-action="start"]');
const btnStop = document.querySelector('button[data-action="stop"]');
const body = document.querySelector(".body");

function startSwitchColors() {
  const promise = new Promise((resolve, reject) => {
    btnStart.disabled = true;
    {
      setIntervalOfChangeOfColors = setInterval(() => {
        const randomNumberOfColor = randomIntegerFromInterval(0, 5);
        const randomColor = colors[randomNumberOfColor];
        body.style.backgroundColor = randomColor;
      }, 1000);
    }
  });
}

function stopSwitchColors() {
  clearInterval(setIntervalOfChangeOfColors);
  btnStart.disabled = false;
}

btnStart.addEventListener("click", startSwitchColors);
btnStop.addEventListener("click", stopSwitchColors);
