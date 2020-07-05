const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const list = document.querySelector("#ingredients");
list.textContent = "Ингредиенты";
let elemString;
let arr = ingredients.map((elem) => {
  let currItem = document.createElement("li");
  currItem.textContent = elem;
  return currItem;
});
let arrString;
arrString = arr.join("");
list.append(...arr);
