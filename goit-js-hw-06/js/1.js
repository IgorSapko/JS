import dataUsers from "./users.js";
console.log(dataUsers);

// task 1

const getUserNames = (users) => {
  let arrOfNames = [];
  users.forEach((element) => {
    arrOfNames.push(element.name);
  });
  return arrOfNames;
};

console.log(getUserNames(dataUsers));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// task 2

const getUsersWithEyeColor = (users, color) => {
  let usersWithSomeEyeColor = users.filter(
    (currVal) => currVal.eyeColor === color
  );
  return usersWithSomeEyeColor;
};

console.log(getUsersWithEyeColor(dataUsers, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// task 3

const getUsersWithGender = (users, gender) => {
  let usersWithSomeGender = users.filter(
    (currVal) => gender === currVal.gender
  );
  return usersWithSomeGender;
};

console.log(getUsersWithGender(dataUsers, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// task 4

const getInactiveUsers = (users) => {
  let activeUsers = users.filter((currVal) => !currVal.isActive);
  return activeUsers;
};

console.log(getInactiveUsers(dataUsers)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// task 5

const getUserWithEmail = (users, email) =>
  users.find((currVal) => currVal.email === email);

console.log(getUserWithEmail(dataUsers, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(dataUsers, "elmahead@omatom.com")); // {объект пользователя Elma Head}

// task 6

const getUsersWithAge = (users, min, max) => {
  let usersWithSomeAge = users.filter(
    (currVal) => currVal.age > min && currVal.age < max
  );
  return usersWithSomeAge;
};

console.log(getUsersWithAge(dataUsers, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(dataUsers, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// task 7

const calculateTotalBalance = (users) => {
  let totalBalance = 0;
  users.forEach((element) => {
    totalBalance = totalBalance + element.balance;
  });
  return totalBalance;
};

console.log(calculateTotalBalance(dataUsers)); // 20916

// task 8

// const getUsersWithFriend = (users, friendName) => {
//   let friend = [];
//   users.filter((currVal) => {
//     currVal.friends.forEach((curElem) => {
//       if (curElem === friendName) {
//         friend.push(currVal.name);
//       }
//     });
//   });
//   return friend;
// };

const getUsersWithFriend = (users, friendName) => {
  return users
    .filter((elem) => elem.friends.includes(friendName))
    .map((curElem) => curElem.name);
};

console.log(getUsersWithFriend(dataUsers, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(dataUsers, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

// task 9

const getNamesSortedByFriendsCount = (users) => {
  const sortByFriends = (a, b) => a.friends.length - b.friends.length;
  users.sort(sortByFriends);
  let arrSortedByFriendsCount = [];
  users.forEach((elem) => {
    arrSortedByFriendsCount.push(elem.name);
  });
  return arrSortedByFriendsCount;
};

console.log(getNamesSortedByFriendsCount(dataUsers));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// task 10

const getSortedUniqueSkills = (users) => {
  let arrOfSkills = [];
  users.forEach((elem) => {
    arrOfSkills = [...arrOfSkills, ...elem.skills];
  });
  let arrOfUniqueSkills = [];
  arrOfSkills.forEach((curVal) => {
    if (!arrOfUniqueSkills.find((curElem) => curElem === curVal)) {
      arrOfUniqueSkills.push(curVal);
    }
  });
  return arrOfUniqueSkills.sort();
};
console.log(getSortedUniqueSkills(dataUsers));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam']
