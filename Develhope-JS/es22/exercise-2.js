const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};
// Use the destructuring to assign the values just with one code line.
// const id = person.id;
// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;
const [id, firstName, lastName, age] = [person.id, person.firstName, person.lastName, person.age]

console.log(id, firstName, lastName, age);