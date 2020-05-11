const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
  
user.mood = 'happy';
user.hobby = 'skydiving';
user.premium =false

console.log (user);

for (let userKey of Object.keys(user)){
  console.log (`ключ ${userKey} : значение ${user[userKey]}`)
}


console.log(Object.keys(user))