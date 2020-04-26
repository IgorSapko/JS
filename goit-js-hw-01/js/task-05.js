//task_5
alert("ЗАДАНИЕ №5");
const country1 = "китай";

const country2 = "чили";

const country3 = "австралия";

const country4 = "индия";

const country5 = "ямайка";

const country1DeliveryCost = 100;

const country2DeliveryCost = 250;

const country3DeliveryCost = 170;

const country4DeliveryCost = 80;

const country5DeliveryCost = 120;

let enteredCountry;

let enteredCountryModified;

enteredCountry = prompt(
  "Пожалуйста введите страну, куда Вы хотели бы оформить доставку"
);

enteredCountryModified = enteredCountry.toLowerCase();

// alert(enteredCountryModified);

switch (enteredCountryModified) {
  case "китай":
    alert(
      "Доставка в " +
        enteredCountryModified +
        " будет стоить " +
        country1DeliveryCost +
        "кредитов"
    );
    break;
  case "чили":
    alert(
      "Доставка в " +
        enteredCountryModified +
        " будет стоить " +
        country2DeliveryCost +
        "кредитов"
    );
    break;
  case "австралия":
    alert(
      "Доставка в " +
        enteredCountryModified +
        " будет стоить " +
        country3DeliveryCost +
        "кредитов"
    );
    break;
  case "индия":
    alert(
      "Доставка в " +
        enteredCountryModified +
        " будет стоить " +
        country4DeliveryCost +
        "кредитов"
    );
    break;
  case "ямайка":
    alert(
      "Доставка в " +
        enteredCountryModified +
        " будет стоить " +
        country5DeliveryCost +
        "кредитов"
    );
    break;
  default:
    alert("В вашей стране доставка не доступна");
}
