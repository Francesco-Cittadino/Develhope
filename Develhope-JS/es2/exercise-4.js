function nicknameMap(persona) {
  let ritorno = "";
  let person = [];
  for (let i = 0; i < persona.length; i++) {
    ritorno = persona[i].name + "-" + persona[i].age;
    person.push (ritorno);
  }
  return person;
}

// Crea la funzione `nicknameMap` 
// usando il ciclo for,
// che accetta un array di persone e
//  restituisce un array `nicknames`. 
// Il nickname deve essere composto come 
// segue: `<nome>-<età>`.

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const nicknames = nicknameMap(persons);
// console.log(persons);
console.log(nicknames);