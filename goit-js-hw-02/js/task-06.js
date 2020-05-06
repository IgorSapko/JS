let numbers = [];
let input;
let i = 0;
let total = 0;
// console.log(typeof(Number(null)))
do {
  input = prompt("введите число");
  let inputNumber = Number(input);

  if (Number.isNaN(inputNumber) === true) {
    alert("Было введено не число, попробуйте еще раз");
  }
  if (Number.isNaN(inputNumber) !== true && inputNumber !== 0) {
    numbers[i] = inputNumber;

    total += numbers[i];
    i += 1;
  }
} while (input !== null);

i > 0
  ? console.log(`Общая сумма чисел равна ${total}`)
  : console.log(`массив пустой`);
