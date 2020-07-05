// const counterValue =
const butIncr = document.querySelector(
  '#counter button[data-action="increment"]'
);
const butDecr = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const valueOfCounter = document.querySelector("#value");

const incrFunk = function () {
  valueOfCounter.textContent = Number(valueOfCounter.textContent) + 1;
  return valueOfCounter;
};
butIncr.addEventListener("click", incrFunk);

const decrFunk = function () {
  valueOfCounter.textContent = Number(valueOfCounter.textContent) - 1;
  return valueOfCounter;
};
butDecr.addEventListener("click", decrFunk);
