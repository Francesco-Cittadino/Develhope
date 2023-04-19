const person = {
  id: 1,
  firstame: 'Mario',
  lastName: 'Rossi',
  age: 25
};
const { id, firstame:name, lastName:surname, age:old } = person;
console.log(id, name, surname, old);