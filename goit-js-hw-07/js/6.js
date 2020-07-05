const input = document.querySelector("#validation-input");

const checkOfQuantityOfInputedSymbols = function () {
  if (input.value.length === 6) {
    input.classList.replace("invalid", "valid");
    input.classList.add("valid");
    // console.log(input.value.length);
  } else {
    input.classList.replace("valid", "invalid");
    input.classList.add("invalid");
  }
};
input.addEventListener("blur", checkOfQuantityOfInputedSymbols);
