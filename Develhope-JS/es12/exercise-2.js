function nicknameMap(persons) {
  const nickmap = [];
  for (let i = 0; i < persons.length; i++ ){
    nickmap.push("il nickname è " + persons[i].name + " - " + persons[i].age);
  }
  return nickmap;
}


// Crea una funzione chiamata `nicknameMap` che accetta un array di persone e restituisce un array di nickname. 
// Il nickname dovrebbe essere composto in questo modo: `<nome>-<età>`.
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
console.log(persons);
console.log(nicknames);