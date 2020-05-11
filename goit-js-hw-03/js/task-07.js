/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */
let id = 0;
const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */

  createTransaction(amount, type) {
    let id = this.transactions.length + 1;
    let objOfTransaction = {
      amount,
      type,
      id,
    };
    this.transactions.push(objOfTransaction);
    // console.log(this.transactions)
    return objOfTransaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance = this.balance + amount;
    this.createTransaction(amount, "deposit");
    // console.log(this.createTransaction(amount, "deposit"));
    return this.balance;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    this.balance = this.balance - amount;
    if (this.balance < 0) {
      this.balance = this.balance + amount;
      return alert("снятие такой суммы не возможно, недостаточно средств");
    }
    this.createTransaction(amount, "withdraw");
    // console.log(this.createTransaction(amount, "withdraw"));
    return this.balance;
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const historyItem of this.transactions) {
      // console.log(historyItem.id)
      if (historyItem.id === id) {
        return historyItem;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let totalAmountOfType = 0;
    for (const historyItem of this.transactions) {
      if (historyItem.type === type) {
        totalAmountOfType = historyItem.amount + totalAmountOfType;
      }
    }
    return totalAmountOfType;
  },
};

console.log(
  account.deposit(100),
  account.deposit(200),
  account.deposit(500),
  account.withdraw(50),
  account.getBalance(),
  account.transactions,
  account.getTransactionDetails(2),
  account.getTransactionTotal("deposit")
);
let whatTypeOfTransaction = confirm(
  'Вы хотите положить деньги на счет - жмите OK, Вы хотите снять деньги со счета - жмите "Cancel'
);
if (whatTypeOfTransaction === true) {
  whatTypeOfTransaction = "deposit";
  let amount = Number(prompt("Введите сумму, которую хотите положить на счет"));
  account.deposit(amount);
  console.log(
    account.getBalance(),
    account.transactions,
    account.getTransactionDetails(3),
    account.getTransactionTotal("deposit")
  );
} else {
  whatTypeOfTransaction = "withdraw";
  let amount = Number(prompt("Введите сумму, которую хотите снять"));
  account.withdraw(amount);
  console.log(
    account.getBalance(),
    account.transactions,
    account.getTransactionDetails(1),
    account.getTransactionTotal("withdraw")
  );
}
