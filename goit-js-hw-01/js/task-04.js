//task_4
alert("ЗАДАНИЕ №4");
let credit = 23580;

let totalPrice;

let quantityDroidsWanted;

const pricePerDroid = 3000;

let residualCredits;

quantityDroidsWanted = prompt("Какое колличество дроидов Вы хотели бы купить?");

residualCredits = credit - quantityDroidsWanted * pricePerDroid;

if (quantityDroidsWanted === null) {
  alert("Отменено пользователем!");
} else if (quantityDroidsWanted === "") {
  alert("Вы не ввели колличество дроидов!");
} else if (residualCredits >= 0) {
  alert(
    "Вы купили " +
      quantityDroidsWanted +
      " дроидов, на счету осталось " +
      residualCredits +
      " кредитов."
  );
} else if (isNaN(quantityDroidsWanted) === true) {
  alert("Пожалуйста введите число");
} else {
  alert("Недостаточно средств на счету!");
}
