const input = document.querySelector("#name-input");
const name = document.querySelector("#name-output");
const inputName = function (event) {
  // if (input.value) {
  //   name.textContent = input.value;
  // } else {
  //   name.textContent = "незнакомец";
  // }

  if (event.target.value) {
    name.textContent = event.target.value;
  } else {
    name.textContent = "незнакомец";
  }
};
input.addEventListener("input", inputName);
