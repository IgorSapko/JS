const parentDiv = document.querySelector("#boxes");
const input = document.querySelector("#controls > input");
const butRende = document.querySelector('button[data-action="render"]');
const butDestr = document.querySelector('button[data-action="destroy"]');
let getRandomColor = function () {
  let r = Math.round(255 * Math.random());
  let b = Math.round(255 * Math.random());
  let g = Math.round(255 * Math.random());
  let col = `rgb(${String(r)},${String(b)},${String(g)})`;

  return col;
};
// const createBoxes = function (amount) {
//   amount = input.value;
//   let arrOfDiv = [];
//   for (let i = 1; i <= amount; i += 1) {
//     let curDiv = document.createElement("div");
//     curDiv.style.backgroundColor = getRandomColor();
//     curDiv.style.width = 20 + i * 10 + "px";
//     curDiv.style.height = 20 + i * 10 + "px";

//     arrOfDiv.push(curDiv);
//   }

//   parentDiv.append(...arrOfDiv);
// };

// butRende.addEventListener("click", createBoxes);

const createBoxes = function (amount) {
  amount = input.value;
  let arrOfDiv = [];
  for (let i = 1; i <= amount; i += 1) {
    let curDiv = `<div style="background-color: ${getRandomColor()}; width: ${
      20 + i * 10
    }px; height: ${20 + i * 10}px;"></div>`;

    // console.log(curDiv);
    arrOfDiv.push(curDiv);
  }
  // console.log(arrOfDiv);
  const totalDiv = arrOfDiv.join("");
  parentDiv.insertAdjacentHTML("beforeend", totalDiv);
  // console.log(parentDiv.children)
};

const destroyBoxes = function () {
  console.log(parentDiv.children);
  parentDiv.querySelectorAll("*").forEach((element) => {
    element.remove();
  });
};
butRende.addEventListener("click", createBoxes);
butDestr.addEventListener("click", destroyBoxes);
