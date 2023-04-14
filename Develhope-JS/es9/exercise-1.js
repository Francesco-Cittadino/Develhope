const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};


Object.keys(person).forEach(key => {
  console.log(key + ': ' + person[key]);
});


// console.log(Object.keys(person));

// Crea un oggetto `persona`. Stampa la sua coppia
// chiave/valore nella console. Prova ad usare il metodo `Object.kyes`: