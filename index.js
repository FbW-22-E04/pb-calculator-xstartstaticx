class Calculator {
  constructor() {
    //properties
    this.pi = Math.PI;
    this.e = Math.exp(1);
  }

  //getter

  //methods
  ratio(x, y, width) {
    let widthRatio = width / x;
    let heightRatio = widthRatio * y;
    console.log(`Height is ${heightRatio} on ratio ${x}:${y}`);
  }

  percentage(x, y) {
    console.log(`Percentage of ${x} in ${y} is: ${(x / y) * 100}%`);
  }

  add(x, y) {
    console.log(`The sum of ${x} plus ${y} is: ${x + y}`);
  }

  subtract(x, y) {
    console.log(`The difference of ${x} subtracted from ${y} is: ${y - x}`);
  }

  multiply(x, y) {
    console.log(`The product of ${x} multiplied by ${y} is: ${x * y}`);
  }
  divide(x, y) {
    if (y > 0) {
      console.log(`The quotient of ${x} divided by ${y} is: ${x / y}`);
    } else {
      console.log(`Please enter value of y greater than 0`);
    }
  }
  modulation(x, y) {
    if (y > 0) {
      console.log(`The remainder of ${x} divided by ${y}
 is: ${x % y}`);
    } else {
      console.log(`Please enter value of y greater than 0`);
    }
  }
  elevate(x, y) {
    console.log(`The power of ${x} elevated to ${y} is: ${x ** y}`);
  }
  sqrt(x) {
    console.log(`The square root of ${x} is: ${x ** 0.5}`);
  }
}

const calculate = new Calculator();

console.log(calculate.pi);
console.log(calculate.e);

calculate.ratio(10, 50, 20);
calculate.percentage(10, 100);
calculate.add(2, 3);
calculate.subtract(6, 10);
calculate.multiply(7, 7);
calculate.divide(20, 3);
calculate.modulation(16, 5);
calculate.elevate(2, 3);
calculate.sqrt(49);
