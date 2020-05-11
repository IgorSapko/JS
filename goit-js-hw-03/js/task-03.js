//   first variant

// const findBestEmployee = function (employees) {
//   let nameOfBestEmployee;
//   let arrOfNumbersOfWork = Object.values(employees);
//   let biggestNumberOfWork = arrOfNumbersOfWork[0];
//   let indexBiggestNumberOfWork = 0;
//   console.log(arrOfNumbersOfWork);
//   for (let i = 0; i < arrOfNumbersOfWork.length; i += 1) {
//     if (arrOfNumbersOfWork[i] > biggestNumberOfWork) {
//       biggestNumberOfWork = arrOfNumbersOfWork[i];
//       indexBiggestNumberOfWork = i;
//     }

//     nameOfBestEmployee = Object.keys(employees)[indexBiggestNumberOfWork];
//   }
//   console.log(indexBiggestNumberOfWork);
//   return nameOfBestEmployee;
// };

// second variant

// const findBestEmployee = function (employees) {
//   let biggestNumberOfWork = Math.max(...Object.values(employees));
//   let indexBiggestNumberOfWork;
//   let nameOfBestEmployee;
//   // console.log(Object.values(employees));
//   for (let i = 0; i < Object.values(employees).length; i += 1) {
//     if (Object.values(employees)[i] === biggestNumberOfWork) {
//       indexBiggestNumberOfWork = i;
//     }

//     nameOfBestEmployee = Object.keys(employees)[indexBiggestNumberOfWork];
//   }
//   // console.log(indexBiggestNumberOfWork);
//   return nameOfBestEmployee;
// };

// third variant

const findBestEmployee = function (employees) {
  let biggestNumberOfWork = Math.max(...Object.values(employees));
  let indexBiggestNumberOfWork;
  let nameOfBestEmployee;
  // console.log(Object.values(employees));
  for (let currentKey in employees) {
    console.log(`key - ${currentKey}, value - ${employees[currentKey]}`);
    if (employees[currentKey] === biggestNumberOfWork) {
      nameOfBestEmployee = currentKey;
    }
  }
  // console.log(indexBiggestNumberOfWork);
  return nameOfBestEmployee;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
