// function sum(num1, num2, num3, num4, num5) {
//     return num1 + num2 + num3 + num4 + num5;
// }

function sum(...nums) {
    return nums.reduce((a, b) => {
      return a + b;
    });
  }


console.log(sum(1, 2, 3, 4, 5));
