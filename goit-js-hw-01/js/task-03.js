//task_3
alert("ЗАДАНИЕ №3");
const ADMIN_PASSWORD = "jqueryismyjam";
let message;

let inputedPassword;

inputedPassword = prompt("Пожалуйста введите пароль!");

if (inputedPassword === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else if (inputedPassword === null) {
  message = "Отменено пользователем!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}

alert(message);
