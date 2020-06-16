class Storage {
  constructor(arrOfGoods) {
    this.items = arrOfGoods;
  }
  getItems() {
    console.log(this.items);
  }
  addItem(item) {
    this.items.push(item);
  }
  removeItem(item) {
    //var 1
    this.items.find((currentGood, index) => {
      if (currentGood === item) {
        const newArrOfGoods = [
          ...this.items.slice(0, index),
          ...this.items.slice(index + 1, this.items.length + 1),
        ];
        this.items = newArrOfGoods;
        return true;
      }
    });

    //var 2
    // const index = this.items.indexOf(item)
    // console.log (index)
    // this.items.splice(index, 1);

    //var 3
    // this.items.find((currentGood, index) => {
    //   //   console.log(`текущий товар - ${currentGood} с индесом ${index}`);
    //   if (currentGood === item) {
    //     console.log(`нашли текущий товар - ${currentGood} с индесом ${index}`);
    //     this.items.splice(index, 1);
    //     return true;
    //   }
    // });
  }
}

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);

const items = storage.getItems();
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид");
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер");
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
