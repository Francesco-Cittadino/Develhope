// // Convert the `developer` object into json.
// class Person {
//   constructor(id, firstName, lastName, age) {
//     this.id = id;
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
// }

// const developer = new Person(1, 'Mario', 'Rossi', 25);


class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

const developer = new Person(1, 'Mario', 'Rossi', 25);

const developerJSON = JSON.stringify(developer);

console.log(developerJSON);
// Print developer as json object
// Convert the `developer` object into json.