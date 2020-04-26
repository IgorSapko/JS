//task_6
alert("ЗАДАНИЕ №6");
let total = 0;

let enteredNumberconverted;

let enteredNumber = 0;

while (enteredNumber !== null) {
  enteredNumber = prompt("Введите число");
  enteredNumberconverted = Number(enteredNumber);
  if (isNaN(enteredNumber) === true) {
    alert("Было введено не число, попробуйте еще раз");
    enteredNumber = 0;
    enteredNumberconverted = Number(enteredNumber);
  }
  total = enteredNumberconverted + total;
}

alert("Общая сумма чисел равна " + total);
