const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".
person2.firstName = "Simon"

//viene modificato anche il valore firstName di person1
//perchè person2 è il riferimento di person1.


console.log(person1);
console.log(person2);
