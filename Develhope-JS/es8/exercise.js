function multiplyByTwo(value) {
  let number = 2;
  let result = 0;
 function inner(){
   result = value * number;
   console.log(result)
  }
  return inner;
}
// console.log(multiplyByTwo(4)());
multiplyByTwo(4)();