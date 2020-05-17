
// const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const ​users = [{ id: '001', name: 'UserName 1', age: 23, gender: 'M' },{ id: '002', name: 'UserName 2', age: 25, gender: 'F' },
//     { id: '003', name: 'UserName 3', age: 28, gender: 'M' },
//     { id: '004', name: 'UserName 4', age: 24, gender: 'F' },
//     { id: '005', name: 'UserName 5', age: 32, gender: 'F' },
//     { id: '006', name: 'UserName 6', age: 31, gender: 'M' },
//     { id: '007', name: 'UserName 7', age: 29, gender: 'M' },
// ];
// ​ const map = (array, callback) => { const result = [];
//  ​
//      for (let index = 0; index < array.length; index++) {
//          const resItem = callback(array[index], index, array);
//          result.push(resItem);     }
//  ​     return result;
//  }
//  const multipleItem = (item, index, array) => item * 2 + index;
//  console.log(map(testArray, multipleItem))
// const getName = user => user.name;
//  const userNames = map(users, getName);
//  console.log(userNames);
// ​

const dog = {
    sound: 'woof',
   bark() {
        console.log(this.sound)
    },
}
const b = dog.bark()
console.log(b)