class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  static fromObject(fromObj) {
    return new Person(fromObj.firstName, fromObj.lastName);
  }
}

const obj = {
  firstName: 'Mario',
  lastName: 'Rossi'
};

const person = Person.fromObject(obj);
console.log(person.firstName + " " + person.lastName);