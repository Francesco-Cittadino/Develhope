let numberStore = [0, 1, 2];
let newNumber = 3;
// numberStore.push(newNumber);
numberStore = [newNumber, ...numberStore]
console.log(numberStore);