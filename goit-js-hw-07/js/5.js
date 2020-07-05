const input = document.querySelector("#name-input");
const name = document.querySelector("#name-output");
const inputName = function () {
  if (name.textContent) {
    name.textContent = input.value;
  } else {
    name.textContent = "незнакомец";
  }
};
input.addEventListener("input", inputName);
