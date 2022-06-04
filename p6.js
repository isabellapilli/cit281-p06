/*Code the Shape class with the following functionality.

a. Name the class Shape
b. Provide a constructor that expects an array of sides, with a default value of an empty array []
c. Create a class property sides that contains the constructor sides array using the this object
d. Implement a class method perimeter that returns the value of the lengths of all sides.
e. You may want to create this method initially using whatever version of a function you prefer, and once complete refactor the function using the remaining requirements
f. This method must use an implicit arrow/lambda function
g. You must use the Array reduce() method to calculate the perimeter value
h. To make this method a single line of code, you will also need to use the ternary operator ( ? : ) to make sure the array has at least one side */

class Shape {
    constructor(sides = []) {
        this.sides = sides;
    }
  
    perimeter() {
      return this.sides.reduce((length, width) => length + width, 0);
    }
  }

console.log(new Shape([5, 10]).perimeter());  // 15
console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
console.log(new Shape([]).perimeter()); // 0 

/*Code the Rectangle class with the following functionality.

a. Name the class Rectangle
b. Provide a constructor that expects two parameters length and width with default values of 0
c. Call the parent class Shape constructor using the super() method, and an array that consists of length, width, length, width, as a rectangle has four sides
d. Create class properties length and width from the constructor parameters using the this object
e. Implement a method area that returns the rectangle area, remembering that the area of a rectangle is length multiplied by width */

class Rectangle extends Shape {
  constructor(length=0, width=0) {
    super([length, width, length, width]);
    this.length = length;
    this.width = width;
  }
  
  area() {
    return this.length*this.width;
  }
}

console.log(new Rectangle(4, 4).perimeter());  // 16
console.log(new Rectangle(4, 4).area());  // 16
console.log(new Rectangle(5, 5).perimeter()); // 20
console.log(new Rectangle(5, 5).area()); // 25
console.log(new Rectangle().perimeter()); // 0
console.log(new Rectangle().area()); // 0 

/* Code the Triangle class with the following functionality.

a. Name the class Triangle
b. Provide a constructor that expects three parameters sideA, sideB, and sideC with default values of 0
c. Call the parent class Shape constructor using the super() method, and an array that consists of sideA, sideB, and sideC
d. Create class properties sideA, sideB, and sideC from the constructor parameters using the this object
e. Implement a method area that returns the triangle area, using Heron's formula (https://www.mathsisfun.com/geometry/herons-formula.html 
  (Links to an external site.)), noting that implementing this formula will require using Math.sqrt() */

class Triangle extends Shape {
  constructor(sideA=0, sideB=0, sideC=0) {
    super([sideA, sideB, sideC]);
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  area() {
    let s = (this.sideA + this.sideB +this.sideC)/2;
    return Math.sqrt(s * ((s - this.sideA) * (s - this.sideB) * (s - this.sideC)));
  }
}

console.log(new Triangle(3, 4, 5).perimeter());  // 12
console.log(new Triangle(3, 4, 5).area());  // 6
console.log(new Triangle().perimeter()); // 0
console.log(new Triangle().area()); // 0

/* Now that all three of your classes have been tested, you will write a block of code that will process and test the following array of side arrays. 
The expected output of the processing is shown below. You can use any coding technique to produce the output, but below is a list of the elements used by the solution.

a. for..of to iterate through the array
b. variable initialization to null as a variable to hold the object created using new
c. switch() to branch based on number of sides (2, 3 and default for all other values)
d. spread/scatter ellipsis to pass the side array as individual values
e. template literal for the output
f. Array toString() method to produce a string of values from an array separated by commas */

// Array of sides arrays
const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];
for (const entry of data) {
  console.log(`Rectangle with sides ${entry} has perimeter of and an area of ${entry[0] * entry[1]}.`)
if (entry <= 2) {
  console.log(`Shape with ${entry} side is unsupported.`)
  }
}

//I tried but I was having trouble with this last part. 
