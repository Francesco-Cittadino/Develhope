class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}
// Definisci una classe chiamata `AreaCalculator`. 
// Al suo interno, create un metodo statico che vi permetta di calcolare l'area della figura geometrica passata come parametro. 
// Il metodo ti permetterà di calcolare l'area del quadrato, del rettangolo e del cerchio.

class AreaCalculator {
  static calculate (parameter){
 if(parameter == square){
  this.area = parameter.side * parameter.side;
}else if(parameter == rectangle){
  this.area = parameter.width * parameter.height;
}else if(parameter == circle){
  this.area = parameter.radius * parameter.radius * Math.PI
}
else{
console.log("is not a geometric figure");
}
return this.area;
}
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
