const butIncr = document.querySelector(
  '#counter button[data-action="increment"]'
);
const butDecr = document.querySelector(
  '#counter button[data-action="decrement"]'
);
// const valueOfCounter = document.querySelector("#value");

// const incrFunk = function () {
//   valueOfCounter.textContent = Number(valueOfCounter.textContent) + 1;
//   return valueOfCounter.textContent;
// };
// butIncr.addEventListener("click", incrFunk);

// const decrFunk = function () {
//   valueOfCounter.textContent = Number(valueOfCounter.textContent) - 1;
//   return valueOfCounter.textContent;
// };
// butDecr.addEventListener("click", decrFunk);

let counterValue = document.querySelector("#value").textContent;
console.log(counterValue);
console.log(typeof counterValue);
const incrFunk = function () {
  counterValue = Number(counterValue) + 1;
  console.log(`counterValue = ${counterValue}`);
  console.log(
    `document.querySelector("#value").textContent= ${
      document.querySelector("#value").textContent
    }`
  );
  document.querySelector("#value").textContent = counterValue;
  return counterValue;
};
butIncr.addEventListener("click", incrFunk);

const decrFunk = function () {
  counterValue = Number(counterValue) - 1;
  document.querySelector("#value").textContent = counterValue;
  return counterValue;
};
butDecr.addEventListener("click", decrFunk);
