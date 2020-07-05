const input = document.querySelector("#validation-input");

const checkOfQuantityOfInputedSymbols = function () {
  if (input.value.length === 6) {
    input.classList.replace("invalid", "valid");
    console.log(input.value.length);
  } else {
    input.classList.toggle("invalid");
  }
};
input.addEventListener("blur", checkOfQuantityOfInputedSymbols);
