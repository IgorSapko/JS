const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let login;
let a;
let b;
// login = prompt("введите логин");
const isLoginValid = function (login) {
  login.length >= 4 && login.length <= 16 ? (a = true) : (a = false);
  return a;
};

const isLoginUnique = function (allLogins, login) {
  allLogins.includes(login) ? (b = false) : (b = true);
  return b;
};

const addLogin = function (allLogins, login) {
  if (isLoginValid(login) === false) {
    console.log("Ошибка! Логин должен быть от 4 до 16 символов");
    return;
  } else if (isLoginValid(login) === true) {
    isLoginUnique(logins, login) === false
      ? console.log(`Такой логин ${login} уже используется!`)
      : logins.push(login) + console.log(`Логин ${login} успешно добавлен!`);
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
// console.log(logins)
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
